import styled from "@emotion/styled"
import { breakpoint } from "../../src/commons/styles/media"

const Wrapper = styled.div`
  width: 1000px;
  height: 1000px;
  background-color: red;

  @media ${breakpoint.tablet} {
    width: 100%;
    height: 500px;
    background-color: green;
  }

  @media ${breakpoint.mobile} {
    width: 100%;
    height: 100px;
    background-color: blue;
  }
`

export default function ResponsiveMediaPage() {

  return (
    <Wrapper>
      상자
    </Wrapper>
  )
}