import { useMutation, gql } from "@apollo/client"
import { useState } from "react"

const CREATE_BOARD = gql`
  mutation createBoard(
    $writer:String, 
    $title:String,
    $contents:String){
      createBoard(
        writer:$writer,
        title:$title,
        contents:$contents
      ) {
        number
        message
      }
    }
`

export default function QuizGqlPage() {
  const [ createBoard ] = useMutation(CREATE_BOARD)
  const [ myWriter, setMyWriter ] = useState('')
  const [ myTitle, setMyTitle ] = useState('')
  const [ myContents, setMyContents ] = useState('')

  const onChangeMyWriter = e => setMyWriter(e.target.value)
  const onChangeMyTitle = e => setMyTitle(e.target.value)
  const onChangeMyContents = e => setMyContents(e.target.value)

  async function requestGraphql() {
    const result = await createBoard({
      variables: { writer: myWriter, title: myTitle, contents: myContents }
    })
    console.log(result)
    console.log(result.data.createBoard.number)
  }

  return (
    <div>
      작성자: <input type="text" onChange={onChangeMyWriter} /><br />
      제목: <input type="text" onChange={onChangeMyTitle} /><br />
      내용: <input type="text" onChange={onChangeMyContents} /><br />
      <button onClick={requestGraphql}>GRAPHQL-API 요청하기</button>
    </div>
  )
}