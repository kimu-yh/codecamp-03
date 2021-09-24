import styled from "@emotion/styled";

export const Wrapper = styled.div`
  height: 64px;
  background-color: #cfd4c5;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  color: #4f4f4f;
  font-family: "gamja";
`

export const MenuItem = styled.div`
  margin: 0px 60px;
  cursor: pointer;

  :hover {
    background-color: #7b7b7b;
    color: #fffff8;
  }
`