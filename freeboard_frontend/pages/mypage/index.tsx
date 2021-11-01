import { useMutation, useQuery} from '@apollo/client';
import { useContext, useEffect , useState  } from 'react';
import { GlobalContext } from '../_app';
import {Wrapper, WelcomeMessage, UpdateWrapper,
        Name, Email,  Point, MyButton, MyButton2,
        Body, PhotoWrapper, InfoWrapper, 
        Form, ButtonWrapper, PointWrapper, PointImage, PointTitle, 
        } from './mypage.styles'
import { FETCH_USER_LOGGED_IN, UPDATE_USER, UPLOAD_FILE} from './mypage.queries'
import ImageUpload from '../../src/components/commons/imageUpload/imageUpload.container';
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useForm } from 'react-hook-form';
import Payment from './payment'
import { Modal } from 'antd';
import { useRouter } from 'next/router';

const schema = yup.object().shape({
  myEmail: yup
    .string()
    .email("이메일 형식이 적합하지 않습니다")
    .required("필수 입력 사항입니다"),
  myName: yup
    .string()
    .min(2, "닉네임은 두 글자 이상입니다")
    .required("필수 입력 사항입니다"),
})

export default function MyPage() {
  const router = useRouter()
  const [ updateUser ] = useMutation(UPDATE_USER)
  const [isOpen, setIsOpen] = useState(false)
  const { setUserInfo, userInfo } = useContext(GlobalContext)

  const { data } = useQuery(FETCH_USER_LOGGED_IN)
  const [files, setFiles] = useState<(File | null)[]>([null])
  const [uploadFile] = useMutation(UPLOAD_FILE);
  const { handleSubmit, register, formState } = useForm({
    mode: "onChange", 
    resolver: yupResolver(schema)
  })

  useEffect(() => {
    if (userInfo.email) return;
    setUserInfo({
      email: data?.fetchUserLoggedIn.email,
      name: data?.fetchUserLoggedIn.name,
      picture: data?.fetchUserLoggedIn.picture
    })
  }, [data])
   
  function onChangeFiles(file: File, index: number) {
    const newFiles = [...files]
    newFiles[index] = file;
    setFiles(newFiles)
  }

 const onChangeUpdate = async (updata) => {
    
    try {
      const uploadFiles = files.map((el) => (el 
        ? uploadFile({ variables: { file: el } }) 
        : null)); 
      const imagesResults = await Promise.all(uploadFiles); 
      const myImages = imagesResults.map((el) => 
          el?.data.uploadFile.url || ""); 
      await updateUser({
        variables: {
          updateUserInput: {
            name: updata.myName,
            picture: myImages[0],
          },
        },
        update(cache, {data}) {
          cache.modify({
            fields: {
              fetchUserLoggedIn: (prev) => {
                return [data.updateUser, ...prev]
              }
            }
          })
        }
      })
      setUserInfo({
        email: data?.fetchUserLoggedIn.email,
        name: data?.fetchUserLoggedIn.name,
        picture: data?.fetchUserLoggedIn.picture
      })
      Modal.confirm({content: "프로필을 업데이트 하였습니다!"})
    } catch(error) {
      Modal.error({content: error.message})
    }
  }

  function onClickOpenPayment() {
    setIsOpen(prev => !prev)
  }

  function onClickMoveToItemsIBought() {
    router.push("/markets")
  }

  function onClickMoveToMyItems() {
    router.push("/markets")
  }

  return (
    
    <Wrapper>
      <WelcomeMessage>
        로그인 성공! {userInfo.name}님 환영합니다
      </WelcomeMessage>
      <UpdateWrapper>
      <Form onSubmit={handleSubmit(onChangeUpdate)}>
        <Body>
         {/* <Frame src="/images/profileFrame.png" /> */}
        
          <PhotoWrapper>
            {
              new Array(1).fill(1).map((el, index)=> (
                <ImageUpload
                key={`${el}_${index}`}
                index={index}
                onChangeFiles={onChangeFiles}
                defaultFileUrl={[data?.fetchUserLoggedIn.picture]}
                />
              ))
            }
          </PhotoWrapper>
         
          <InfoWrapper>
            닉네임 <Name 
              type="text" 
              {...register("myName")}
              placeholder={data?.fetchUserLoggedIn.name} />
              <div>{formState.errors.myName?.message}</div>
            이메일 <Email 
              type="text" 
              {...register("myEmail")}
              placeholder={data?.fetchUserLoggedIn.email} />
              <div>{formState.errors.myEmail?.message}</div>
            주 소 <Point />
          </InfoWrapper>
          <PointWrapper>
            <PointTitle placement="top" 
              color={'yellow'}
              title="포인트 충전하러가기"
            >
              <PointImage
                src="/images/point.png" onClick={onClickOpenPayment} /> 
            </PointTitle>
           {isOpen && 
            (<Modal 
                visible={isOpen} 
                onCancel={() => setIsOpen(prev => !prev)} 
                onOk={() => setIsOpen(prev => !prev)}
              > 
              <Payment 
                data={data}
              />
              </Modal>
            )}
         </PointWrapper>
         </Body>
         <ButtonWrapper>
          <MyButton type="submit" isValid={formState.isValid}>
            프로필 업데이트!
          </MyButton>
          <MyButton2 onClick={onClickMoveToItemsIBought}>
            내가 산 상품 보러가기
          </MyButton2>
          <MyButton2 onClick={onClickMoveToMyItems}>
            내가 올린 상품 보러가기
          </MyButton2>
        </ButtonWrapper>
        </Form>
      </UpdateWrapper>
    </Wrapper>
   
  )
}