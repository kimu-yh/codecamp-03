import {
  UploadButton,
  InputFile,
  SeeImage,
} from './imageUpload.styles'

export default function ImageUploadUI (props) {

  return(
    <>
    {props.imageUrl ? (
      <UploadButton 
          onClick={props.onClickDiv}>
        <InputFile
          type="file"
          onChange={props.onChangeFile}
          ref={props.fileRef}
        /> 
        <SeeImage src={`https://storage.googleapis.com/${props.imageUrl}`} />
        {/* <div>+</div>
        <div>Upload</div> */}
     </UploadButton>
    )
    :
    
      <UploadButton  onClick={props.onClickDiv}>
        <InputFile
          type="file"
          onChange={props.onChangeFile}
          ref={props.fileRef}
        />           
          <div>+</div>
          <div>Upload</div>
    </UploadButton>
  }
  </>
  )
}