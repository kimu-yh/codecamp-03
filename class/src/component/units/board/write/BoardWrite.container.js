import BoardWriteUI from './BoardWrite.presenter'
import { useState } from 'react'
import { useMutation } from '@apollo/client'
import { CREATE_BOARD, UPDATE_BOARD } from './BoardWrite.queries'
import { useRouter } from 'next/router'

export default function BoardWrite(props) {
  const router = useRouter()
  const [ createBoard ] = useMutation(CREATE_BOARD)
  const [ updateBoard ] = useMutation(UPDATE_BOARD)
  const [ myWriter, setMyWriter ] = useState('')
  const [ myTitle, setMyTitle ] = useState('')
  const [ myContents, setMyContents ] = useState('')
  const [ zzz, setZzz ] = useState(false)
  const [ qqq, setQqq ] = useState(false)

  //myWriter, myContents, myTitle이 모두 내용이 저장되어 있다면, 
  //즉 빈 값이 아니라면 e.g. myWriter !== ""
  //setQqq를 사용해서 false => true 이모션의 버튼색을 노란색으로 변경하기


  function onChangeMyWriter(event) {
    setMyWriter(event.target.value)
    event.target.value !== "" && myTitle !== "" && myContents !== "" ? setQqq(true): setQqq(false)
  }

  function onChangeMyTitle(event) {
    setMyTitle(event.target.value)
    const isWritten = (myWriter !== "" && event.target.value !== "" && myContents !== "")? true: false
    setQqq(isWritten)
  }

  function onChangeMyContents(event) {
    setMyContents(event.target.value)
    myWriter !== "" && myTitle !== "" && event.target.value !== ""? setQqq(true): setQqq(false)
  }

  async function aaa() {
    try {
      const result = await createBoard({
        variables: { writer: myWriter, title: myTitle, contents: myContents }
      })
      console.log(result)
      console.log(result.data.createBoard.number)
      router.push(`/08-04-board-detail/${result.data.createBoard.number}`)
    } catch(error) {
      console.log(error)
    }
    
  }
  
  async function onClickEdit() {
    try {
      await updateBoard({
        variables: {
          number: Number(router.query.number),
          writer: myWriter,
          title: myTitle,
          contents: myContents
        }
      })
      router.push(`/08-04-board-detail/${router.query.number}`)
    } catch {
      console.log(error)
    }
    
  }
  
  return (
    <BoardWriteUI
      onChangeMyWriter={onChangeMyWriter}
      onChangeMyTitle={onChangeMyTitle}
      onChangeMyContents={onChangeMyContents}
      aaa={aaa}
      zzz={zzz}
      qqq={qqq}
      isEdit={props.isEdit}
      onClickEdit={onClickEdit}
    />

  )
}