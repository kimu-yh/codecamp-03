import styled from '@emotion/styled'

const Wrapper = styled.div`
  margin-top: 30px;
`

const Label = styled.label`
  height: 24px;
  font-size: 20px;
`

const Input = styled.input`
  ::placeholder{font-size: 18px}
  margin-top: 16px;
  width: 100%;
  height: 52px;
  border: 1px solid gray;
  padding-left: 16px;
`

export default function LineInput (props) {

  return (
    <Wrapper>
      <Label name={props.name}>{props.name}</Label>
      <Input type="text" placeholder={`${props.name}을/를 입력해주세요`}/>
    </Wrapper>
  )
}
