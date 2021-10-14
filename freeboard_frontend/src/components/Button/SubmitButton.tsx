import styled from "@emotion/styled";

interface IProps {
  isValid: boolean
}

const SubmitButton = styled.button`
  font-size: 18px;
  border: none;
  margin: 80px auto;
  width: 179px;
  height: 52px;
  background-color: ${(props: IProps) => (props.isValid ? "#FFD600" : "#BDBDBD")};
  :hover {
    font-size: 20px;
    font-weight: 700;
  }

`

export default function Button (props) {
  return (
    <SubmitButton name={props.name}
      isValid={props.isValid} type={props.type} onClick={props.onClick}
    >{props.name}</SubmitButton>
  )
}