import { Wrapper, Profile, Writer, WriterWrapper, Date, 
  Chain, Location, InfoWrap, Title, Image, 
  Contents, Youtube, LikeWrap, ThumbsUp, ThumbsDown
} from "./BoardsDetail.styles"

export default function DetailPage(props) {
  return (
    <Wrapper>
      <WriterWrapper>
        <Profile alt="default profile" src="/defaultProfile.png"/>
        <InfoWrap>
          <Writer>작성자: {props.data&&props.data.fetchBoard.writer}</Writer>
          <Date>Date: 2021.02.18</Date>
          </InfoWrap>
        <Chain alt="link" src="/chain.png" />
        <Location alt="location" src="/locationYellow.png" />
      </WriterWrapper>
      <Title>제목: {props.data&&props.data.fetchBoard.title}</Title>
      <Image>나중에 이미지가 들어옵니다.</Image>
      <Contents>내용: {props.data&&props.data.fetchBoard.contents}</Contents>
      <Youtube>나중에 유투브 영상이 보입니다.</Youtube>
      <LikeWrap>
        <ThumbsUp alt="thumb up" src="/thumb_up.png" />
        <ThumbsDown alt="thumb down" src="/thumb_down.png" />
      </LikeWrap>
    </Wrapper>
  )
}