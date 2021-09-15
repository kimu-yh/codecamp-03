import styled from "@emotion/styled"
import { Rate } from "antd"

export const InputWrapper = styled.div`
  width: 1200px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-left: 100px;
`

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: row;
`

export const InputWriter = styled.input`
  width: 180px;
  height: 52px;
  padding: 14px 20px;
`

export const TextWrapper = styled.div`
  width: 100%
`

export const InputPw = styled.input`
  margin-left: 24px;
  width: 180px;
  height: 52px;
  padding: 14px 20px;
`

export const InputText = styled.textarea`
  margin-top: 20px;
  width: 100%;
  height: 160px;
  padding: 20px;
  border: 1px solid gray;
  resize: none;
`

export const SubmitBtn = styled.button`
  background-color: black;
  color: white;
  font-size: 16px;
  width: 91px;
  height: 50px;
`

export const BtnWrapper = styled.div`
  display: flex;
  height: 52px;
  position: relative;
  top: -54px;
`

export const TextLength = styled.div`
  position: relative;
  border-top: 1px solid #F2F2F2;
  width: 1200px;
  font-size: 16px;
  color: #BDBDBD;
  padding: 14px 20px;
`

export const Fix = styled.img`
width: 18px;
height: 18px;
`

export const Star = styled(Rate)`
margin-left: 10px;
padding: 7px;
`
