import styled from "@emotion/styled"
import 'react-quill/dist/quill.snow.css'
import dynamic from 'next/dynamic'

const ReactQuill = dynamic(() => import("react-quill"), {ssr: false})

const Wrapper = styled.div`
  margin-top: 30px;
`

const TextInput = styled(ReactQuill)`
  /* ::placeholder{font-size: 20px}; */
  margin-top: 16px; 
  margin-bottom: 30px;
  width: 100%;
  height: 350px;
  border: none;
`
const Label = styled.label`
  height: 24px;
  font-size: 20px;
`
const ErrorMessage = styled.div`
  margin-top: 5px;
  color: red;
`
export default function TextBox(props) { 
  return (
    <Wrapper>
      <Label>{props.name}</Label>
      <TextInput 
        onChange={props.onChange}
        placeholder={`${props.name}을 입력해주세요`}
        value={props.contents}
      />
      <ErrorMessage>{props.formState}</ErrorMessage>
    </Wrapper>
  )
}