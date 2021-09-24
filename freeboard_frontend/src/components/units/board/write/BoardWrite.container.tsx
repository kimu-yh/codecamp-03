import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import BoardWriteUI from "./BoardWrite.presenter";
import { CREATE_BOARD, UPDATE_BOARD } from "./BoardWrite.queries";

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

  const [myError, setMyError] = useState({
    writer: '작성자를 입력해주세요.',
    password: '비밀번호를 입력해주세요.',
    title: '제목을 입력해주세요.',
    content: '내용을 입력해주세요'
  })

  const [createBoard] = useMutation(CREATE_BOARD);
  const [updateBoard] = useMutation(UPDATE_BOARD);

  function onChangeMyInputs(event){
    setMyInputs({...myInputs, [event.target.name]: event.target.value})

    if (event.target.value !== "") {
      setMyError({...myError, [event.target.name]: ""})
    }

    if (myError[event.target.name] === "") {
      setIsActive(true)
    } 
    // else {
    //   setIsActive(false)
    // }
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
        const result = await createBoard({
          variables: {
            createBoardInput: {...myInputs,
              boardAddress: {
                ...boardAddress
              }
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
    const myUpdateBoardInput = {};
    if (myInputs.title) myUpdateBoardInput.title = myInputs.title;
    if (myInputs.contents) myUpdateBoardInput.contents = myInputs.contents;
    if (myInputs.youtubeUrl) myUpdateBoardInput.youtubeUrl = myInputs.youtubeUrl;
    if (boardAddress.zipcode || boardAddress.address || boardAddress.addressDetail) {
      myUpdateBoardInput.boardAddress = {}
      if (boardAddress.zipcode) myUpdateBoardInput.boardAddress.zipcode = boardAddress.zipcode;
      if (boardAddress.address) myUpdateBoardInput.boardAddress.address = boardAddress.address;
      if (boardAddress.addressDetail) myUpdateBoardInput.boardAddress.addressDetail = boardAddress.addressDetail;
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
      myError={myError}
      isEdit={props.isEdit}
      data={props.data}
      boardAddress={boardAddress}
    />
  );
}
