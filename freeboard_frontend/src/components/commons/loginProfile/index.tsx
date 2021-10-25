import styled from '@emotion/styled';


const Wrapper = styled.div`
  margin: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
`
const CircleImage = styled.img`
  margin-right: 20px;
  width: 75px;
  height: 75px;
  border-radius: 50%;
  background: #ffffff;
  box-shadow:  8px 8px 15px #c7c7c7,
              -8px -8px 15px #ffffff;
`
const Name = styled.span`
  margin: 10px;
  font-family: "gamja";
  font-size: 25px;
`


export default function LoginProfile(props) {

  return (
    <>
      <Wrapper onClick={props.onClick}>
        <CircleImage src={`https://storage.googleapis.com/${props.src}`}/>
        <Name>{props.name}</Name>
      </Wrapper>
    </>
  )
}