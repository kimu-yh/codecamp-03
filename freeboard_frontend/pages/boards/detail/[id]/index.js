import { gql, useQuery } from "@apollo/client"
import { useRouter } from "next/dist/client/router"
import { Wrapper, Profile, Writer, WriterWrapper, Date, 
          Chain, Location, InfoWrap, Title, Image, 
          Contents, Youtube, LikeWrap, ThumbsUp, ThumbsDown
} from "../../../../styles/BoardsRead"

const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      writer
      title
      contents
    }
  }
`

export default function DetailPage() {
  const router = useRouter()
  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: router.query.id }
  })

  return (
    <Wrapper>
      <WriterWrapper>
        <Profile alt="default profile" src="/defaultProfile.png"/>
        <InfoWrap>
          <Writer>작성자: {data?.fetchBoard?.writer}</Writer>
          <Date>Date: 2021.02.18</Date>
          </InfoWrap>
        <Chain alt="link" src="/chain.png" />
        <Location alt="location" src="/locationYellow.png" />
      </WriterWrapper>
      <Title>제목: {data?.fetchBoard?.title}</Title>
      <Image>나중에 이미지가 들어옵니다.</Image>
      <Contents>내용: {data?.fetchBoard?.contents}</Contents>
      <Youtube>나중에 유투브 영상이 보입니다.</Youtube>
      <LikeWrap>
        <ThumbsUp alt="thumb up" src="/thumb_up.png" />
        <ThumbsDown alt="thumb down" src="/thumb_down.png" />
      </LikeWrap>
    </Wrapper>
  )
}