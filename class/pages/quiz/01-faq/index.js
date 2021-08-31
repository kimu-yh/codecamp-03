import { 
  Container, Title, Name, Img, Wrapper, RowFlex, Menu, Number, 
  EachQuery, BottomIcon, Icon, IconMenu, Selected, Search
} from "../../../styles/QuizFaq"

export default function QuizFaqPage() {

  return (
    <Container>
      <Img src="../../../upper-bar.png" alt="upper-bar" />
      <Search src="../../../search.svg" alt="search" />
      <Wrapper>
        <Title>마이</Title>
        <Img src="../../../profile.png" alt="profile" />
        <Name>임정아 </Name>
        <img src="/../../../arrow-down.png" alt="arrow-down" />
      </Wrapper>
      <RowFlex>
          <Menu>공지사항</Menu>
          <Menu>이벤트</Menu>
          <Selected><u>FAQ</u></Selected>
          <Menu>Q&A</Menu>
      </RowFlex>
      <Wrapper>
        <Number>Q.01</Number>
        <EachQuery>리뷰 작성은 어떻게 하나요?</EachQuery>
        <Img src="../../../arrow-down" alt="arrow-down" />
      </Wrapper>
      <Wrapper>
        <Number>Q.02</Number>
        <EachQuery>리뷰 수정/삭제는 어떻게 하나요?</EachQuery>
        <Img src="../../../arrow-down" alt="arrow-down" />
      </Wrapper>
      <Wrapper>
        <Number>Q.03</Number>
        <EachQuery>아이디/비밀번호를 잊어버렸어요</EachQuery>
        <Img src="../../../arrow-down" alt="arrow-down" />
      </Wrapper>
      <Wrapper>
        <Number>Q.04</Number>
        <EachQuery>회원탈퇴를 하고싶어요.</EachQuery>
        <Img src="arrow-down" alt="arrow-down" />
      </Wrapper>
      <Wrapper>
        <Number>Q.05</Number>
        <EachQuery>출발지 설정은 어떻게 하나요?</EachQuery>
        <Img src="arrow-down" alt="arrow-down" />
      </Wrapper>
      <Wrapper>
        <Number>Q.06</Number>
        <EachQuery>비밀번호를 변경하고싶어요.</EachQuery>
        <Img src="../../../arrow-down.svg" alt="arrow-down" />
      </Wrapper>
      <RowFlex>
        <Icon>
          <img src="home.svg" alt="home-logo" />
          <IconMenu>홈</IconMenu>
        </Icon>
        <Icon>
          <Img src="location.svg" alt="location-logo" />
          <IconMenu>잇츠로드</IconMenu>
        </Icon>
        <Icon>
          <Img src="like.svg" alt="like-logo" />
          <IconMenu>마이찜</IconMenu>
        </Icon>
        <Icon>
          <Img src="my-selected.svg" alt="my-logo" />
          <IconMenu>마이</IconMenu>
        </Icon>
      </RowFlex>
    </Container>
    
  )
}