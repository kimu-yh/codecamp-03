import { useMutation } from '@apollo/client';
import { useRouter } from 'next/router';
import { useState } from 'react';
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
    .min(1, "한 글자 이상 입력해주세요.")
    .required("반드시 입력해야하는 필수사항입니다."),
  remarks: yup
    .string()
    .min(1, "한 글자 이상 입력해주세요.")
    .required("반드시 입력해야하는 필수사항입니다."),
  contents: yup
    .string()
    .min(1, "한 글자 이상 입력해주세요.")
    .required("반드시 입력해야하는 필수사항입니다."),
  price: yup
    .number()
    .min(1, "한 글자 이상 입력해주세요.")
    .required("반드시 입력해야하는 필수사항입니다."),
})


export default function MarketWrite(props) {
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false)
  const [tags, setTags] = useState([])
  const [files, setFiles] = useState<(File | null)[]>([null, null])
  const [createUseditem] = useMutation(CREATE_USEDITEM)
  const [updateUseditem] = useMutation(UPDATE_USEDITEM)
  const [uploadFile] = useMutation(UPLOAD_FILE)

  const {handleSubmit, register, formState} = useForm({
    mode: "onChange", 
    resolver: yupResolver(schema)
  })

  function onChangeTags(e) {
    if (!e.target.value.includes(",")) Modal.error({ content: "쉼표(,)로 태그를 구분해주세요" })
    const tagWords = e.target.value.split(',')
    setTags(tagWords)
  }

  async function onClickSubmit(data) {
    if (formState.isValid) {
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
              tags: tags,
              images: myImages,
            },
          },
        })
        router.push(`/market/${result.data.createUseditem._id}`)

      } catch(error) {
        Modal.error({ content: error.message })
      }
    }
  }

  async function onClickUpdate(data) {
    const myUpdateInput = {}
    if (data.name) myUpdateInput.name = data.name;
    if (data.remarks) myUpdateInput.remarks = data.remarks;
    if (data.contents) myUpdateInput.contents = data.contents;
    if (data.price) myUpdateInput.price = data.price;
    if (tags) myUpdateInput.tags = tags;
    const uploadFiles = files 
        .map(el => el? uploadFile({ variables: {file: el} }) : null)
    const results =  await Promise.all(uploadFiles)
    const nextImages = results.map(el => el?.data.uploadFile.url || "")
    myUpdateInput.images = nextImages;
    if (props.data?.fetchUseditem.images?.length) {
      const prevImages = [...props.data?fetchUseditem.images]
      myUpdateInput.images = prevImages.map((el, index) => 
        nextImages[index] || el)
    } else {
      myUpdateInput.images = nextImages
    }

    try {
      const result = await updateUseditem({
        variables: {
          updateUseditemInput: myUpdateInput,
          useditemId: router.query.productId
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
      onChangeTags={onChangeTags}
      isEdit={props.isEdit}
      data={props.data}
    />
  )
}