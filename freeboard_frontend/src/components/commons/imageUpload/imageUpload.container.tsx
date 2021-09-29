import { UPLOAD_FILE } from "./imageUpload.queries";
import { useRef } from "react";
import { useMutation } from "@apollo/client";
import { Modal } from "antd";
import ImageUploadUI from "./imageUpload.presenter"

export default function ImageUpload(props) {
  
  const [uploadFile] = useMutation(UPLOAD_FILE)
  const fileRef = useRef<HTMLInputElement>()

  function onClickDiv() {
    fileRef.current?.click()
  }

  async function onChangeFile(event) {
    const file = event.target.files?.[0]

    if (!file?.size) {
      Modal.error({ content: "파일이 없습니다." });
      return;
    }
    if (file.size > 5 * 1024 * 1024) {
      Modal.error({ content: "파일이 너무 큽니다.(제한: 5MB)" });
      return;
    }
    if (!file.type.includes("png") && !file.type.includes("jpeg")) {
      Modal.error({
        content: "파일 확장자가 올바르지 않습니다.(png, jpeg만 가능)",
      });
      return;
    }
    try {
      const result = await uploadFile({
        variables: { file }
      })
      props.onChangeImageUrls(result.data.uploadFile.url, props.index)
    } catch(error) {
      Modal.error({ content: error.message })
    }
  }

  return (
    <ImageUploadUI
      fileRef={fileRef}
      imageUrl={props.imageUrl}
      onClickDiv={onClickDiv}
      onChangeFile={onChangeFile}
    />
  )
}