
import { MyButton, Title } from './BoardWrite.styles'


export default function BoardWriteUI(props) {
  return (
    <>
      <Title zzz={props.zzz}>Container Presenter Pattern</Title>
      작성자: <input type="text" onChange={props.onChangeMyWriter}/><br />
      제목: <input type="text" onChange={props.onChangeMyTitle} /><br />
      내용: <input type="text" onChange={props.onChangeMyContents} /><br />
      <MyButton onClick={props.aaa} qqq={props.qqq}>GRAPHQL-API 요청하기!!</MyButton>
    </>
  )
}


