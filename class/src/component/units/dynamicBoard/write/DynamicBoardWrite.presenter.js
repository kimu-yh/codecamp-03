import { MyButton } from './DynamicBoardWrite.styles'

export default function DynamicBoardWriteUI(props) {
  return (
    <div>
      작성자: <input type="text" onChange={props.onChangeMyWriter}/><br />
      제목: <input type="text" onChange={props.onChangeMyTitle} /><br />
      내용: <input type="text" onChange={props.onChangeMyContents} /><br />
      <MyButton onClick={props.aaa} isActive={props.isActive}>GRAPHQL-API 요청하기!!</MyButton>
    </div>
  )
}
