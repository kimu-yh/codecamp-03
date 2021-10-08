import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import BoardWriteUI from "./BoardWrite.presenter";
import { CREATE_BOARD, UPDATE_BOARD, UPLOAD_FILE } from "./BoardWrite.queries";
import { IMyUpdateBoardInput } from "./BoardWrite.types"

export default function BoardWrite(props) {
  const router = useRouter()
  const [isActive, setIsActive] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  const [myInputs, setMyInputs] = useState({
    writer: '', 
    password: '',
    title: '',
    contents: '',
    youtubeUrl: '',
  })
  const [boardAddress, setBoardAddress] = useState({
    zipcode: '',
    address: '',
    addressDetail: '',
  })

  const [files, setFiles] = useState<(File | null)[]>([null, null, null])

  const [myError, setMyError] = useState({
    writer: '',
    password: '',
    title: '',
    contents: '',
    youtubeUrl: ''
  })
  
  const [createBoard] = useMutation(CREATE_BOARD);
  const [updateBoard] = useMutation(UPDATE_BOARD);
  const [uploadFile] = useMutation(UPLOAD_FILE);

  function onChangeMyInputs(event){
    setMyInputs({...myInputs, [event.target.name]: event.target.value})

    if (event.target.value) {
      setMyError({...myError, [event.target.name]: ''}) 
    } else {
      setMyError({...myError, [event.target.name]: `${
        event.target.name === "writer" && "작성자를" ||
        event.target.name === "password" && "비밀번호를" ||
        event.target.name === "title" && "제목을" ||
        event.target.name === "contents" && "내용을" ||
        event.target.name === "youtubeUrl" && "유투브동영상주소를"} 입력해주세요`}) 
    }

    setIsActive(Object.values(myInputs).every(e => e))
  }

  function onClickAddressSearch() {
    setIsOpen(true)
  }

  function onCompleteAddressSearch(data) {
    setBoardAddress((prev) => ({
      ...prev,
      zipcode: data.zonecode,
      address: data.address
    }))
    setIsOpen(false)
  }

  function onToggleZipcode() {
    setIsOpen(prev => !prev)
  }

  function onChangeAddressInputs(event) {
    setBoardAddress((prev) => ({
      ...prev, 
      addressDetail: event.target.value
    }))
  }

  async function onClickSubmit(){
    if (isActive) {
      try {
        const uploadFiles = files // [File1, File2, null]
          .map((el) => (el 
              ? uploadFile({ variables: { file: el } }) 
              : null)); 
          /* 
          [ 
            uploadFile({ variables: { file: File1 } }), 
            uploadFile({ variables: { file: File2 } }), 
            null 
          ]
          */
        const results = await Promise.all(uploadFiles); 
        /* await Promise.all([ 
          uploadFile({ variables: { file: File1 } }), 
          uploadFile({ variables: { file: File2 } }), 
          null ])
         */
        const myImages = results.map((el) => 
          el?.data.uploadFile.url || ""); 
        // ["강아지이미지.png", "고양이이미지.png", ""]


        const result = await createBoard({
          variables: {
            createBoardInput: {...myInputs,
              boardAddress: {
                ...boardAddress
              },
              images: myImages,
            },
          },
        });
        // console.log(result.data.createBoard._id)
        router.push(`/boards/${result.data.createBoard._id}`)
      } catch(error){
        alert(error.message)
      }
    }
  }

  async function onClickUpdate() {
    if (Object.values(myInputs).every(e => e.length === 0)) {
      alert("수정된 내용이 없습니다.");
      return;
    }
    const myUpdateBoardInput: IMyUpdateBoardInput = {};
    if (myInputs.title) myUpdateBoardInput.title = myInputs.title;
    if (myInputs.contents) myUpdateBoardInput.contents = myInputs.contents;
    if (myInputs.youtubeUrl) myUpdateBoardInput.youtubeUrl = myInputs.youtubeUrl;
    if (boardAddress.zipcode || boardAddress.address || boardAddress.addressDetail) {
      myUpdateBoardInput.boardAddress = {}
      if (boardAddress.zipcode) myUpdateBoardInput.boardAddress.zipcode = boardAddress.zipcode;
      if (boardAddress.address) myUpdateBoardInput.boardAddress.address = boardAddress.address;
      if (boardAddress.addressDetail) myUpdateBoardInput.boardAddress.addressDetail = boardAddress.addressDetail;
    }

    const uploadFiles = files // [file1, file2, null]
      .map(el => el? uploadFile({ variables: {file: el} }) : null)
    /* [ uploadFile({ variables: { file: File1 } }), 
         uploadFile({ variables: { file: File2 } }), 
         null ]
    */
    const results =  await Promise.all(uploadFiles)
    /* await Promise.all([ 
      uploadFile({ variables: { file: File1 } }), 
      uploadFile({ variables: { file: File2 } }), 
      null ])
    */
    const nextImages = results.map(el => el?.data.uploadFile.url || "") // ["강아지이미지.png", "고양이이미지.png", ""]
    myUpdateBoardInput.images = nextImages;

    if (props.data?.fetchBoard.images?.length) {
      const prevImages = [...props.data?.fetchBoard.images]
      // ["토끼이미지.png", "", "거북이이미지.png"]
      myUpdateBoardInput.images = prevImages.map((el, index) => 
        nextImages[index] || el) // prettier-ignore
    } else {
      myUpdateBoardInput.images = nextImages
    }

    try {
      const result = await updateBoard({ 
        variables: {
          password: myInputs.password,
          boardId: router.query.boardId,
          updateBoardInput: myUpdateBoardInput
        }
      });
    router.push(`/boards/${result.data.updateBoard._id}`)
    } catch(error) {
      alert(error.message);
    } 
  }

  function onChangeFiles(file: File, index: number) {
    const newFiles = [...files]
    newFiles[index] = file;
    setFiles(newFiles)
  }

  /* 이미지 1차 실습 (좌측정렬)
  function onChangeImageUrls(imageUrl, index) {
    let newImageUrls = [...imageUrls]
    newImageUrls[index] = imageUrl
    newImageUrls = newImageUrls.filter(ele => ele)
    const result = new Array(3).fill(1).map((cur, index) => {
      return newImageUrls[index] ? newImageUrls[index]  : ""
    })
    console.log(result)
    setImageUrls(result)
  */

  return (
    <BoardWriteUI
      isActive={isActive}
      isOpen={isOpen}
      onChangeMyInputs={onChangeMyInputs}
      onChangeAddressDetail={onChangeAddressInputs}
      onClickAddressSearch={onClickAddressSearch}
      onCompleteAddressSearch={onCompleteAddressSearch}
      onClickSubmit={onClickSubmit}
      onClickUpdate={onClickUpdate}
      onToggleZipcode={onToggleZipcode}
      onChangeFiles={onChangeFiles}
      myError={myError}
      isEdit={props.isEdit}
      data={props.data}
      boardAddress={boardAddress}
    />
  );
}
