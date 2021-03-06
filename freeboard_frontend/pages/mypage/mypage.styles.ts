import styled from "@emotion/styled";
import { Tooltip } from 'antd';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 30px auto;
  align-items: center;
  justify-content: center;
`

export const WelcomeMessage = styled.div`
  margin: 10px 20px;
  font-size: 30px;
  color: darkgray;
  height: 50px;
  font-family: "gamja";
`

export const UpdateWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;
  padding: 10px;
  align-items: flex-start;
`

export const Name = styled.input`
  height: 52px;
  width: 300px;
  margin: 10px;
  border: none;
  border-bottom: 1px solid black;
`

export const Email = styled.input`
  height: 52px;
  width: 300px;
  margin: 10px;
  border: none;
  border-bottom: 1px solid black;
`

export const Point = styled.input`
  height: 52px;
  width: 300px;
  margin: 10px;
  border: none;
  border-bottom: 1px solid black;
`
interface Iprops {
  isValid: boolean
} 

export const MyButton = styled.button`
  padding: 10px;
  margin: 20px;
  border-radius: 10px;
  border: none;
  background-color: ${(props: Iprops) => (props.isValid ? "#c5efe4" : "lightgray")};
  width: 300px;
  height: 50px;
  cursor: pointer;
`

export const MyButton2 = styled.button`
  padding: 10px;
  margin: 20px;
  border-radius: 10px;
  border: none;
  background-color: #caf3f9;
  :hover{
    background-color: #99c0c6;
    font-weight: 700;
    font-size: 17px;
  }
  width: 300px;
  height: 50px;
  cursor: pointer;
`

export const Body = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  align-content: center;
  margin: 10px;
`

export const PhotoWrapper = styled.div`
  padding: 10px ;
  width: 200px;
  height: 240px;
  background-image: url("/images/frame2.png");
  background-color: #4a585b;
  margin-right: 20px;
`
export const InfoWrapper = styled.div`
  width: 400px;
  height: 240px;
  padding: 10px;
  margin-left: 10px;
`
export const Form = styled.form`
  
`
export const ButtonWrapper = styled.div`
  text-align: center;
`
export const PointWrapper = styled.div`
  width: 240px;
  margin-left: 10px;
`
export const PointImage = styled.img`
  width: 200px;
  cursor: pointer;
`
export const PointTitle = styled(Tooltip)`

`
 