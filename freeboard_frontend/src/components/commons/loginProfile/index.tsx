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
const Name = styled.div`
  font-family: "gamja";
  font-size: 25px;
`
const Balance = styled.div`
  font-family: "gamja";
  font-size: 20px;
  color: skyblue;
`
const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export default function LoginProfile(props) {

  return (
    <>
      <Wrapper onClick={props.onClick}>
        <CircleImage src={`https://storage.googleapis.com/${props.src}`}/>
        <InfoWrapper>
          <Name>{props.name}</Name>
          <Balance>{props.balance}캔 보유중</Balance>
        </InfoWrapper>
      </Wrapper>
    </>
  )
}