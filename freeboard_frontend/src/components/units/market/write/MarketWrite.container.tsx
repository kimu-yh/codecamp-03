import { useMutation } from '@apollo/client';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import MarketWriteUI from './MarketWrite.presenter'
import { CREATE_USEDITEM, UPDATE_USEDITEM, UPLOAD_FILE } from './MarketWrite.queries'
import { useForm } from 'react-hook-form'
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from 'yup'
import { Modal } from 'antd'
import { IMyUpdateInput } from "./MarketWrite.types"

const schema = yup.object().shape({
  name: yup
    .string()
    .required("상품 이름은 꼭 입력해주세요"),
  remarks: yup
    .string()
    .required("상품 요약을 해주세요"),
  contents: yup
    .string()
    .required("상품 설명을 해주세요"),
  price: yup.string().required("상품 가격을 입력해주세요"),
  // tags: yup.array().nullable()
})


export default function MarketWrite(props) {
  const router = useRouter()
  // const [isOpen, setIsOpen] = useState(false)
  // const [tags, setTags] = useState([])
  const [files, setFiles] = useState<(File | null)[]>([null, null])
  const [createUseditem] = useMutation(CREATE_USEDITEM)
  const [updateUseditem] = useMutation(UPDATE_USEDITEM)
  const [uploadFile] = useMutation(UPLOAD_FILE)

 

  const { handleSubmit, register, formState, setValue, trigger, watch } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  async function onClickSubmit(data) {
    console.log("data:", data)
   
      try {
        const uploadFiles = files
          .map(el => el
            ? uploadFile({ variables: {file: el} })
            : null
          )
        const results = await Promise.all(uploadFiles)
        const myImages = results
          .map(el => el?.data.uploadFile.url || "")
        
        const result = await createUseditem({
          variables: {
            createUseditemInput: {
              name: data.name,
              remarks: data.remarks,
              contents: data.contents,
              price: Number(data.price),
              tags: data.tags.split(','),
              images: myImages,
            },
          },
        })
        console.log("등록완료ID", result.data.createUseditem._id )
        router.push(`/market/${result.data.createUseditem._id}`)

      } catch(error) {
        Modal.error({ content: error.message })
      }
  }
  // 수정시 기존의 데이터를 저장 (수정시 아무것도 변경하지 않아도 있는 데이터가 리액트 폼에 저장됨)
  useEffect(() => {
    if( props?.isEdit && props?.data?.fetchUseditem) {
      setValue('contents', props?.data?.fetchUseditem?.contents)
      setValue('name', props?.data?.fetchUseditem?.name)
      setValue('price', props?.data?.fetchUseditem?.price)
      setValue('remarks', props?.data?.fetchUseditem?.remarks)
      setValue('tags', props?.data?.fetchUseditem?.tags)
    }
  }, [props?.isEdit, props?.data?.fetchUseditem])

  function onChangeMyEditor(value) {
    setValue("contents", value === "<p><br></p>" ? "" : value)
    trigger("contents")
  }

  async function onClickUpdate(data) {
    const myUpdateInput: IMyUpdateInput = {}
    
    if (data.name) myUpdateInput.name = data.name;
    if (data.remarks) myUpdateInput.remarks = data.remarks;
    if (data.contents) myUpdateInput.contents = data.contents;
    if (data.price) myUpdateInput.price = Number(data.price)
    if (data.tags) myUpdateInput.tags = data.tags
    if (data.zipcode) myUpdateInput.useditemAddress.zipcode = data.zipcode
    if (data.address) myUpdateInput.useditemAddress.address = data.address
    if (data.addressDetail) myUpdateInput.useditemAddress.addressDetail = data.addressDetail
    if (data.lat) myUpdateInput.useditemAddress.lat = data.lat
    if (data.lng) myUpdateInput.useditemAddress.lng = data.lng

    const uploadFiles = files 
        .map(el => el? uploadFile({ variables: {file: el} }) : null)
    const results =  await Promise.all(uploadFiles)
    const nextImages = results.map(el => el?.data.uploadFile.url || "")
    myUpdateInput.images = nextImages;
    if (props.data?.fetchUseditem.images?.length) {
      const prevImages = [...props.data?.fetchUseditem.images]
      myUpdateInput.images = prevImages.map((el, index) => 
        nextImages[index] || el)
    } else {
      myUpdateInput.images = nextImages
    }

    try {
      const result = await updateUseditem({
        variables: {
          updateUseditemInput: myUpdateInput,
          useditemId: router.query.marketId
        }
      })
      router.push(`/market/${result.data.updateUseditem._id}`)
    } catch(error) {
      Modal.error({ content: error.message })
    }
  }

  function onChangeFiles(file: File, index: number) {
    const newFiles = [...files]
    newFiles[index] = file;
    setFiles(newFiles)
  }
  return (
    <MarketWriteUI
      // isOpen={isOpen} 이거는 어드레스 창 여는 스테이트
      handleSubmit={handleSubmit}
      onClickSubmit={onClickSubmit}
      onClickUpdate={onClickUpdate}
      onChangeFiles={onChangeFiles}
      register={register}
      formState={formState}
      // onChangeTags={onChangeTags}
      isEdit={props.isEdit}
      data={props.data}
      onChangeMyEditor={onChangeMyEditor}
      contents={watch("contents") || ""}
      setValue={setValue}
    />
  )
}