import { useQuery, gql } from "@apollo/client"
import { useRouter } from "next/router"
import Dompurify from "dompurify"

const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      title
      writer
      contents
    }
    
  }
`

export default function WebEditorDetailPage() {
  const router = useRouter()
  const {data} = useQuery(FETCH_BOARD, {
    variables: {
      boardId: router.query.id
    }
  })

  // 아래 html 중괄호가 두 개 생기는 이유
  // const myHtml = {
  //   __html: <span>fff</span>
  // } 

  return (
    <>
      <div>작성자: {data?.fetchBoard.writer}</div>
      <div>제목: {data?.fetchBoard.title}</div>
      { process.browser && ( // 브라우저 일때만 돔퓨러파이 그려줘 라는 코드 추가 없으면 에러남
      // typeof Window !== "undefined" && // 이렇게도 쓴다
        <div>내용: 
        <div dangerouslySetInnerHTML={{ __html: Dompurify.sanitize(data?.fetchBoard.contents)}}></div>
      </div> 
      ) }
    </>
  )
}

