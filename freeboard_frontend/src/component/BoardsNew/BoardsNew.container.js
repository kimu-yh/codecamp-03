import { useState } from "react";
import { useMutation } from '@apollo/client';
import { useRouter } from 'next/router';
import { CREATE_BOARD } from './BoardsNew.queries';
import BoardsNewUI from './BoardsNew.presenter'

export default function BoardsNewPage(){
  const router = useRouter()
  const [createBoard] = useMutation(CREATE_BOARD)
  const [writer, setWriter] = useState('');
  const [writerError, setWriterError] = useState('');
  const [pw, setPw] = useState('');
  const [pwError, setPwError] = useState('');
  const [title, setTitle] = useState('');
  const [titleError, setTitleError] = useState('');
  const [contents, setContents] = useState('');
  const [contentsError, setContentsError] = useState('');
  const [isActive, setActive] = useState(false)

  const onChangeWriter = e => {
    setWriter(e.target.value)
    e.target.value !== '' && pw !== '' && title !== '' && contents !== ''?
    setActive(true): setActive(false)
  }
  const onChangePw = e => {
    setPw(e.target.value) 
    writer !== '' && e.target.value !== '' && title !== '' && contents !== ''?
    setActive(true): setActive(false)
  }
  const onChangeTitle = e => {
    setTitle(e.target.value)
    writer !== '' && pw !== '' && e.target.value !== '' && contents !== ''?
    setActive(true): setActive(false)
  }
  const onChangeContents = e => {
    setContents(e.target.value)
    writer !== '' && pw !== '' && title !== '' && e.target.value !== ''?
    setActive(true): setActive(false)
  }
  async function onClickSubmit() {
    if (writer === '') {
      setWriterError("작성자가 없습니다!")
    } else {
      setWriterError("")
    }
    if (pw.length === 0) {
      setPwError("비밀번호가 없습니다!")
    } else {
      setPwError("")
    }
    if (title.length === 0) {
      setTitleError("제목이 없습니다!")
    } else {
      setTitleError("")
    }
    if (contents.length === 0) {
      setContentsError("내용이 없습니다!")
    } else {
      setContentsError("")
    }
    if (writer !== '' && pw !== '' && title !== '' && contents !== '') {
      alert("게시물을 등록합니다.")
    }

    try {
      const result = await createBoard({
        variables: {
          createBoardInput: {
            writer: writer,
            password: pw,
            title: title, 
            contents: contents
          }
        }
      })
      console.log(result.data.createBoard._id)
      router.push(`/boards/container-presenter/detail/${result.data.createBoard._id}`)
    } catch(error) {
      console.error()
    }
    
  }
  

  return (
  <BoardsNewUI 
    router={router}
    onChangeWriter={onChangeWriter}
    onChangePw={onChangePw}
    onChangeTitle={onChangeTitle}
    onChangeContents={onChangeContents}
    onClickSubmit={onClickSubmit}
    writerError={writerError}
    pwError={pwError}
    titleError={titleError}
    contentsError={contentsError}
    isActive={isActive}
  />
  )
}