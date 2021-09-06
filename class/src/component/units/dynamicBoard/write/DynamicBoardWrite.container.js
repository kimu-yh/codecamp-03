import DynamicBoardWriteUI from './DynamicBoardWrite.presenter'
import { useRouter } from 'next/dist/client/router'
import { useState } from 'react'
import { useMutation } from '@apollo/client'
import { CREATE_BOARD } from './DynamicBoardWrite.queries'



export default function DynamicBoardWritePage() {
  const router = useRouter()

  const [ createBoard ] = useMutation(CREATE_BOARD)
  const [ myWriter, setMyWriter ] = useState('')  
  const [ myTitle, setMyTitle ] = useState('') 
  const [ myContents, setMyContents ] = useState('')
  const [ isActive, setIsActive ] = useState(false)

  function onChangeMyWriter(event) {
    setMyWriter(event.target.value)
    event.target.value !== '' && myTitle !== '' && myContents !== ''? setIsActive(true): setIsActive(false)
  }

  function onChangeMyTitle(event) {
    setMyTitle(event.target.value)
    myWriter !== '' &&  event.target.value !== '' && myContents !== ''? setIsActive(true): setIsActive(false)
  }

  function onChangeMyContents(event) {
    setMyContents(event.target.value)
    myWriter !== '' && myTitle !== '' &&  event.target.value !== ''? setIsActive(true): setIsActive(false)
  }

  async function aaa() {
    try {
      const result = await createBoard({
        variables: { writer: myWriter, title: myTitle, contents: myContents }
      })
      console.log(result)
      console.log(result.data.createBoard.number)
      router.push(`/quiz/06-02-dynamic-board-read-container-presenter/${result.data.createBoard.number}`) // 최신 방식 templete literal

    } catch(error) {
        console.log(error)
    }
  }

  return (
    <DynamicBoardWriteUI 
      onChangeMyWriter={onChangeMyWriter}
      onChangeMyTitle={onChangeMyTitle}
      onChangeMyContents={onChangeMyContents}
      aaa={aaa}
      isActive={isActive}
    />
  )
}
