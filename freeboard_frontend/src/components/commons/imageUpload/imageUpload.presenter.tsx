import {
  UploadButton,
  UploadFileHidden, 
  UploadImage,
} from './imageUpload.styles'
import { IUploadUIProps } from "./imageUpload.types"

export default function ImageUploadUI (props: IUploadUIProps) {

  return(
    <>
    { props.fileUrl || props.defaultFileUrl ? (
      <UploadImage
          onClick={props.onClickUpload}
          src={
            props.fileUrl || `https://storage.googleapis.com/${props.defaultFileUrl[props.index]}`
          } />
      ) : (
      <UploadButton type="button" onClick={props.onClickUpload}>
        <>+</>
        <>Upload</>
      </UploadButton>
    )}
    <UploadFileHidden 
      type="file"
      ref={props.fileRef}
      onChange={props.onChangeFile}
    />
  </>
  )
}