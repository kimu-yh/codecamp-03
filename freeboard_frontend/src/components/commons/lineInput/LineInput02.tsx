import styled from "@emotion/styled"

const Line = styled.input`
  margin-top: 16px;
  width: 100%;
  height: 52px;
`

export default function LineInput02(props) {

  return (
    <Line name={props.name}/>
  )
}