import ReactPlayer from 'react-player'
import styled from '@emotion/styled'

const Youtube = styled(ReactPlayer)`
  margin: auto;
  width: 600px;
  background-color: #ddddaf;
`
const Wrapper = styled.div`
  margin: auto;
  padding: 30px;
  
`
const Row = styled.div`
  margin-top: 50px;
  font-size: 20px;
  font-family: "gamja";
  text-align: center;
  border-top: 1px dotted olive;
  padding-top: 15px;
`

export default function Music() {

  return(
    <Wrapper>
      <Row>
        <h1>아침에 cheerup하려고 듣는 음악</h1>
        <Youtube url="https://www.youtube.com/watch?v=W_MUcyXz3r4" width={700}></Youtube>
      </Row>
      <Row>
        <h1>출근길에 자리에 못앉았을 때 듣는 음악</h1>
        <Youtube url="https://www.youtube.com/watch?v=13rXfxHtJYo" width={700}></Youtube>
      </Row>
      <Row>
        <h1>쉬는 시간 5분 남았을 때 듣는 음악</h1>
        <Youtube url="https://www.youtube.com/watch?v=BRWK5I49jOs" width={700}></Youtube>
      </Row>
      <Row>
        <h1>응가할 때 듣는 음악</h1>
        <Youtube url="https://www.youtube.com/watch?v=3DeBh8HcjbU" width={700}></Youtube>
      </Row>
      <Row>
        <h1>저녁에 혼자 맥주마실 때 듣는 음악</h1>
        <Youtube url="https://www.youtube.com/watch?v=0IueDUcDmRY&list=RDEMETBf6HkfcF3xE6BOhqfhTg&start_radio=1" width={700}></Youtube>
      </Row>
      <Row>
        <h1>샤워할 때 듣는 음악</h1>
        <Youtube url="https://www.youtube.com/watch?v=JM3Ey3tFa5s" width={700}></Youtube>
      </Row>
      <Row>
        <h1>자존감 차오르고 싶을 때 듣는 음악</h1>
        <Youtube url="https://www.youtube.com/watch?v=rahSCzsuMo8" width={700}></Youtube>
      </Row>
    </Wrapper>
  )
}