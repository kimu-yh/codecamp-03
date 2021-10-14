import styled from "@emotion/styled"
import { LogoutOutlined } from '@ant-design/icons'

export const Wrapper = styled.div`
  /* height: 150px; */
  /* background-color: #9ea395; */
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-family: "gamja";
  margin: 0 auto;
  padding: 20px 30px;
`

export const InnerWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
`

export const InnerLogo = styled.h1`
  margin-top: 30px;
  color: #272727;
  font-size: 30px;
  cursor: pointer;
  padding: 30px 20px 20px 20px;
`

export const InnerButton = styled.span`
  margin: 30px 10px 10px 10px;
  color: #272727;
  cursor: pointer;
`

export const Logout = styled(LogoutOutlined)`
  margin-left: 10px;
  font-size: 20px;
  color: #a3acae;
`

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`