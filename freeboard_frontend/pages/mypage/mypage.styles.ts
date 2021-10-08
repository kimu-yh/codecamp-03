import styled from "@emotion/styled";

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
  align-items: center;
`

export const Picture = styled.img`
  border-radius: 70px;
  height: 52px;
  width: 52px;
  margin: 10px;
  border: none;
  background-color: darkgreen;
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
  margin: 20px auto;
  border-radius: 10px;
  border: none;
  background-color: ${(props: Iprops) => (props.isValid ? "#c5efe4" : "lightgray")};
  width: 400px;
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
  width: 200px;
  height: 240px;
  border: 1px solid gray;
  padding: 10px;
`
export const InfoWrapper = styled.div`
  width: 400px;
  height: 240px;
  border: 1px solid gray;
  padding: 10px;
  margin-left: 10px;
`

