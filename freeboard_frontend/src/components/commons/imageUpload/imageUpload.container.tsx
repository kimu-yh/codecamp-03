import { ChangeEvent, useState, useRef } from "react";
import ImageUploadUI from "./imageUpload.presenter"
import { checkImage } from "../libraries/checkImage"
import { IUploadProps} from "./imageUpload.types"

export default function ImageUpload(props: IUploadProps) {
  const fileRef = useRef<HTMLInputElement>(null)
  const [fileUrl, setFileUrl] = useState("")

  function onClickUpload() {
    fileRef.current?.click();
  }

  async function onChangeFile(event: ChangeEvent<HTMLInputElement>) {
    const file = checkImage(event.target.files?.[0])
    if (!file) return;

    // try {
    //   const result = await uploadFile({
    //     variables: { file }
    //   })
    //   props.onChangeImageUrls(result.data.uploadFile.url, props.index)
    // } catch(error) {
    //   Modal.error({ content: error.message })
    // }


    const fileReader =  new FileReader()
    fileReader.readAsDataURL(file);
    fileReader.onload = data => {
      setFileUrl(data.target?.result as string);
      props.onChangeFiles(file, props.index)
    }
  }
  return (
    <ImageUploadUI
      fileRef={fileRef} // 현재 클릭하여 업데이트 한 이미지의 실제 스토리지 주소
      fileUrl={fileUrl} // 2차 실습 (내 컴퓨터에서만 접근 가능한 임시 미리보기 주소)
      defaultFileUrl = {props.defaultFileUrl} // 얘는 누구지? 이게 처음 등록한 이미지 주소인가.
      onClickUpload={onClickUpload}
      onChangeFile={onChangeFile}
      index={props.index}
    />
  )
}