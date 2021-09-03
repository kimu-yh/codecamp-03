import { gql, useQuery } from "@apollo/client"
import { useRouter } from "next/dist/client/router"

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
    <div>
      <div>작성자: {data?.fetchBoard?.writer}</div>
      <div>Date: 2021.02.18</div>
      <h1>제목: {data?.fetchBoard?.title}</h1>
      <div>내용: {data?.fetchBoard?.contents}</div>
    </div>
  )
}