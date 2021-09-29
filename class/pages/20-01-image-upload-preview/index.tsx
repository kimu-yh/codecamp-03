import { useRef, useState } from "react"
import { gql, useMutation } from "@apollo/client";
import { fileValidation } from '../../src/commons/libraries/validation'

const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`;
const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
    }
  }
`

export default function ImageUploadPreviewPage() {
  const [imageUrl, setImageUrl] = useState("")
  const fileRef = useRef<HTMLInputElement>()
  const [myFile, setMyFile] = useState()
  const [uploadFile] = useMutation(UPLOAD_FILE)

  function onClickGray() {
    fileRef.current.click()
  }
  function onClickFile(event) {
    const file =  event.target.files[0]
    if (!fileValidation(file)) return;

    const fileReader = new FileReader()
    fileReader.readAsDataURL(file) // 여기서 리턴된 url은 내 컴퓨터에서만 사용되는 임시 url
    fileReader.onload = (data) => {   
      // console.log(data.target.result) // 이렇게 해야 읽기 시작하고 결과가 
      setImageUrl(data.target.result) // 여기로 들어와서 바로 화면에 보여지게 됨. 스토리지로 저장이 된 것이 아직 아님. 내 컴퓨터에서만 접근 가능한 주소
      setMyFile(file)
    }
  }

  async function onClickSubmit() {
    const start =  performance.now()
    const result = await Promise.all([
      uploadFile({ variables: { file: myFile1 } }),
      uploadFile({ variables: { file: myFile2 } }),
      uploadFile({ variables: { file: myFile3 } }),
      
    ]) // 나중에 myFiles로 배열로 만들고 map으로 뿌리기 도전 

    // [ result1, result2, ...]
    // result.map(el => el.data.uploadFile.url) => [url1, url2, url3...]
    const urls = result.map(el => el.data.uploadFile.url)


    // const result1 = await uploadFile({
    //   variables: {
    //     file: myFile,
    //   }
    // })
    // const result2 = await uploadFile({
    //   variables: {
    //     file: myFile,
    //   }
    // })
    // const result3 = await uploadFile({
    //   variables: {
    //     file: myFile,
    //   }
    // })
    // const result4 = await uploadFile({
    //   variables: {
    //     file: myFile,
    //   }
    // })
    // const result5 = await uploadFile({
    //   variables: {
    //     file: myFile,
    //   }
    // })
    // const result = await uploadFile({
    //   variables: {
    //     file: myFile,
    //   }
    // })
    const end = performance.now()
    console.log(end - start)
    // const url = result.data.uploadFile.url

    // 게시물 등록
    // createBoard({
    //   variables: {
    //     ..., 
    //     images: urls 
    //   }
    // })
  }

  return (
    <>
    <div
    onClick={onClickGray}
    style={{ width: "50px", height: "50px", backgroundColor: "gray" }}
    >이미지 업로드!</div>
    <img src={imageUrl} />
    <input type="file" 
    ref={fileRef}
    onChange={onClickFile} />
    <button
    onClick={onClickSubmit}
    >게시물 등록하기</button>
    </>
  )
}