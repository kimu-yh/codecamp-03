import {gql, useMutation, useQuery} from '@apollo/client';
import { useContext, useEffect , useState  } from 'react';
import { GlobalContext } from '../_app';
import {Wrapper, WelcomeMessage, UpdateWrapper,
        Name, Email, 
        Point, MyButton, 
        Body, PhotoWrapper, InfoWrapper
        } from './mypage.styles'
import ImageUpload from '../../src/components/commons/imageUpload/imageUpload.container';
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useForm } from 'react-hook-form';

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



const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      name
      email
      picture
    }
  }
`

const UPDATE_USER = gql`
  mutation updateUser($updateUserInput: UpdateUserInput!) {
    updateUser(updateUserInput: $updateUserInput) {
      _id
      picture
      name
    }
  }
`
export const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      _id
      url
    }
  }
`

export default function MyPage() {
  const [ updateUser ] = useMutation(UPDATE_USER)
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

  async function onChangeUpdate(data) {
    
    try {
      const uploadFiles = files.map((el) => (el 
        ? uploadFile({ variables: { file: el } }) 
        : null)); 
      const imagesResults = await Promise.all(uploadFiles); 
      const myImages = imagesResults.map((el) => 
          el?.data.uploadFile.url || ""); 

      const result = await updateUser({
        variables: {
          updateUserInput: {
            name: data.myName,
            picture: myImages[0]
          }
        }
      })
      console.log("id:", result.data.updateUser._id)
    } catch(error) {
      alert(error.message)
    }
  
    
  }

  

  return (
    
    <Wrapper>
      <WelcomeMessage>
        로그인 성공! {userInfo.name}님 환영합니다
      </WelcomeMessage>
      <UpdateWrapper>
      <form onSubmit={handleSubmit(onChangeUpdate)}>
        <Body>
          <PhotoWrapper>
            사진
            {
              new Array(1).fill(1).map((el, index)=> (
                <ImageUpload
                key={`${el}_${index}`}
                index={index}
                onChangeFiles={onChangeFiles}
                defaultFileUrl={data?.fetchUserLoggedIn.picture}
                />
              ))
            }
          </PhotoWrapper>
          <InfoWrapper>
            닉네임 <Name 
              type="text" 
              {...register("myName")}
              value={data?.fetchUserLoggedIn.name} />
              <div>{formState.errors.myName?.message}</div>
            이메일 <Email 
              type="text" 
              {...register("myEmail")}
              value={data?.fetchUserLoggedIn.email} />
              <div>{formState.errors.myEmail?.message}</div>
            주 소 <Point />
          </InfoWrapper>
         </Body>
         <MyButton type="submit" isValid={formState.isValid}>
          프로필 업데이트!
        </MyButton>
        </form>
      </UpdateWrapper>
    </Wrapper>
   
  )
}