import styled from "@emotion/styled"

const Label = styled.label`
  height: 24px;
  font-size: 20px;
`

const RadioButton = styled.input`
  cursor: pointer;
  margin-top: 16px;
`

const RadioLabel = styled.label`
  margin-left: 8px;
	margin-right: 20px;
	font-weight: 500;
  font-size: 16px;
	cursor: pointer;
`

export default function Button( {label, one, two} ) {

  return (
    <>
    <Label>{label}</Label><br/ >
      <RadioButton type="radio" id={one} name={label} />
      <RadioLabel htmlFor={one}>{one}</RadioLabel>
      <RadioButton type="radio" id={two} name={label} />
      <RadioLabel htmlFor={two}>{two}</RadioLabel>
    </>
  )
}