import { gql, useMutation } from "@apollo/client";
import { useState, useRef } from "react";


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

export default function ImageUploadPage() {
  const [imageUrls, setImageUrls] = useState(['']);
  const [createBoard] = useMutation(CREATE_BOARD)
  const [uploadFile] = useMutation(UPLOAD_FILE);
  const fileRef = useRef<HTMLInputElement>()
  const [myInputs, setMyInputs] =  useState({
    writer: '',
    password: '',
    title: '',
    contents: ''
  })

  const onChangeFile = async (e) => {
    const myFile = e.target.files[0];
    console.log(myFile);

    

    const result = await uploadFile({
      variables: {
        file: myFile,
      },
    });
    console.log(result.data.uploadFile.url);
    setImageUrls([result.data.uploadFile.url]);
  };

  function onClickDiv() {
    fileRef.current?.click()
  }

  function onChangeMyInputs(e) {
    setMyInputs({...myInputs, [e.target.name]: e.target.value})
  }

  function onClickSubmit() {
    createBoard({
      variables: {
        createBoardInput: {
          ...myInputs,
          images: [...imageUrls]
        }
      }
    })
  }

  return (
    <>
      <div>이미지 업로드!!!</div>
      <div 
      style={{
        width: '200px', 
        height: '50px', 
        backgroundColor: 'gray',
        margin: '20px'
      }}
      onClick={onClickDiv}
      >이미지 선택!!!</div>
      <input 
      style={{display: "none", margin: '20px'}} 
      type="file" 
      onChange={onChangeFile}
      ref={fileRef} />
      <img 
      src={`https://storage.googleapis.com/${imageUrls[0]}`}
      style={{margin: '20px'}}
      /><br />
      작성자: <input type="text" name="writer" onChange={onChangeMyInputs} /><br />
      비밀번호: <input type="password" name="password"onChange={onChangeMyInputs} /><br />
      제목: <input type="text" name="title" onChange={onChangeMyInputs} /><br />
      내용: <input type="text" name="contents" onChange={onChangeMyInputs} /><br />
      <button onClick={onClickSubmit}>등록하기!</button>
    </>
  );
}