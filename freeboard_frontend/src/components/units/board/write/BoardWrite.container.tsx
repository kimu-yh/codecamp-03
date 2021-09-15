import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import BoardWriteUI from "./BoardWrite.presenter";
import { CREATE_BOARD, UPDATE_BOARD, FETCH_BOARD } from "./BoardWrite.queries";

export default function BoardWrite(props) {
  const router = useRouter()
  const [isActive, setIsActive] = useState(false)

  const [writer, setWriter] = useState('')
  const [password, setPassword] = useState('')
  const [title, setTitle] = useState('')
  const [contents, setContents] = useState('')
  const [youtubeUrl, setYoutubeUrl] = useState('')

  const [writerError, setWriterError] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const [titleError, setTitleError] = useState('')
  const [contentsError, setContentsError] = useState('')

  const [createBoard] = useMutation(CREATE_BOARD);
  const [updateBoard] = useMutation(UPDATE_BOARD);
  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: router.query.boardId },
  });

  function onChangeWriter(event){
    setWriter(event.target.value)
    if(event.target.value !== ""){
      setWriterError("")
    }

    if(event.target.value !== "" && password !== "" && title !== "" && contents !== ""){
      setIsActive(true)
    } else {
      setIsActive(false)
    }
  }

  function onChangePassword(event){
    setPassword(event.target.value)
    if(event.target.value !== ""){
      setPasswordError("")
    }

    if(writer !== "" && event.target.value !== "" && title !== "" && contents !== ""){
      setIsActive(true)
    } else {
      setIsActive(false)
    }
  }

  function onChangeTitle(event){
    setTitle(event.target.value)
    if(event.target.value !== ""){
      setTitleError("")
    }

    if(writer !== "" && password !== "" && event.target.value !== "" && contents !== ""){
      setIsActive(true)
    } else {
      setIsActive(false)
    }
  }

  function onChangeContents(event){
    setContents(event.target.value)
    if(event.target.value !== ""){
      setContentsError("")
    }

    if(writer !== "" && password !== "" && title !== "" && event.target.value !== ""){
      setIsActive(true)
    } else {
      setIsActive(false)
    }
  }

  function onChangeYoutubeUrl(event) {
    setYoutubeUrl(event.target.value)
  }

  async function onClickSubmit(){
    if(writer === ""){
      setWriterError("작성자를 입력해주세요.")
    }
    if(password === ""){
      setPasswordError("비밀번호를 입력해주세요.")
    }
    if(title === ""){
      setTitleError("제목을 입력해주세요.")
    }
    if(contents === ""){
      setContentsError("내용을 입력해주세요.")
    }
    if(writer !== "" && password !== "" && title !== "" && contents !== ""){
      try {
        const result = await createBoard({
          variables: {
            createBoardInput: {
              writer: writer,
              password: password,
              title: title,
              contents: contents,
              youtubeUrl: youtubeUrl
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

  interface IMyUpdateBoardInput {
    title? : string;
    contents? : string;
    youtubeUrl?: string;
  }

  async function onClickUpdate() {
    if (!title && !contents && youtubeUrl) {
      alert("수정된 내용이 없습니다.");
      return;
    }
    const myUpdateBoardInput: IMyUpdateBoardInput = {};
    if (title) myUpdateBoardInput.title = title;
    if (contents) myUpdateBoardInput.contents = contents;
    if (youtubeUrl) myUpdateBoardInput.youtubeUrl = youtubeUrl;
    try {
      const result = await updateBoard({ 
        variables: {
          password: password,
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
      onChangeWriter={onChangeWriter}
      onChangePassword={onChangePassword}
      onChangeTitle={onChangeTitle}
      onChangeContents={onChangeContents}
      onChangeYoutubeUrl={onChangeYoutubeUrl}
      onClickSubmit={onClickSubmit}
      writerError={writerError}
      passwordError={passwordError}
      titleError={titleError}
      contentsError={contentsError}
      onClickUpdate={onClickUpdate}
      isEdit={props.isEdit}
      data={props.data}
    />
  );
}
