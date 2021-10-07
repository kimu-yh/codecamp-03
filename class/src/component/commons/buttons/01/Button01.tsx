import styled from "@emotion/styled"
import {IProps} from "../../../../component/units/25-04-react-hook-form/Myform.types"

const MyButton = styled.button`
  background-color: ${(props: IProps) => (props.isValid ? "yellow" : "")};
`


export default function Button01(props) {
  return <MyButton type={props.type} isValid={props.isValid}
  >버튼</MyButton>
}