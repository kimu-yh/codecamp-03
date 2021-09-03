import { useQuery, gql } from "@apollo/client"
import { useRouter } from "next/dist/client/router"

const FETCH_BOARD = gql`
#graphql에서의 주석처리
  query fetchBoard($number: Int) {
    fetchBoard(number: $number) {
      writer
      title
      contents
    }
  }
`

export default function DynamicBoardReadPage() {
  const router = useRouter()

  const { data } = useQuery(FETCH_BOARD, {
    variables: { number: Number(router.query.number) }
  })

  return (
    <>
      {/* html에서의 주석처리 */}
      <div>This is board detail page!!!</div>
      <div>board no: {router.query.number }</div>
      <div>board writer: {data?.fetchBoard?.writer}</div>
      <div>board title: {data?.fetchBoard?.title}</div>
      <div>board contents: {data?.fetchBoard?.contents}</div>

      {/* <div>board writer: {data ? data.fetchBoard.writer: "loading..."} </div>
      <div>board title: {data ? data.fetchBoard.title: "loading..."}</div>
      <div>board contents: {data ? data.fetchBoard.contents: "loading..."}</div> */}
    </>
  )
}