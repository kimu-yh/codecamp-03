import { useQuery } from "@apollo/client"
import { useRouter } from "next/router"
import DetailPage from "./BoardsDetail.presenter"
import { FETCH_BOARD } from "./BoardsDetail.queries"

export default function BoardsDetailPage() {
  const router = useRouter()
  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: router.query.id }
  })

  return (
    <DetailPage 
      router={router}
      data={data}
    />
  )
}