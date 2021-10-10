import styled from "@emotion/styled"

const Wrapper = styled.div`
  margin-top: 30px;
`

const TextInput = styled.textarea`
  ::placeholder{font-size: 18px};
  margin-top: 16px; 
  width: 100%;
  height: 372px;
  padding: 16px;
`
const Label = styled.label`
  height: 24px;
  font-size: 20px;
`

export default function TextBox(props) {

  return (
    <Wrapper>
      <Label name={props.name}>{props.name}</Label>
      <TextInput placeholder={`${props.name}을 입력해주세요`}/>
    </Wrapper>
  )
}