import styled from "@emotion/styled"
import { Rate } from "antd"

export const InputWrapper = styled.div`
  width: ${ props => props.isAnswer? "1000px" : "1200px" };
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
  border: 1px solid gray;
`

export const Arrow = styled.img`
  width: 15px;
  height: 17px;
  margin-top: 20px;
  margin-right: 20px;
`
export const TextWrapper = styled.div`
  width: 100%
`

export const InputPw = styled.input`
  margin-left: 24px;
  width: 180px;
  height: 52px;
  padding: 14px 20px;
  border: 1px solid gray;
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
  background-color: ${(props) => props.isYellow ? "yellow" : "black"};
  color: ${(props) => props.isYellow ? "gray" : "white"};
  font-size: 16px;
  width: 91px;
  height: 50px;
  border: ${(props) => props.isYellow ? "1px solid gray" : "none"};;
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

export const PencilIcon = styled.img`
  width: 30px;
`

export const Star = styled(Rate)`
  margin-left: 10px;
  padding: 7px;
`

export const ReviewWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 5px 0px 5px 0;
`

export const Review = styled.span`
  margin-left: 5px;
  padding: 0 0 3px 0;
  font-size: 16px;
  color: gray;
`
export const AnswerWriteWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  padding: 20px;
`