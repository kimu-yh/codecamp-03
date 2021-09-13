import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import CommentListUI from "./CommentList.presenter"
import { FETCH_BOARD_COMMENTS } from "../write/CommentWrite.queries";

export default function CommentList() {
  const router = useRouter()
  const { data } = useQuery(FETCH_BOARD_COMMENTS, {
    variables: { boardId: router.query.boardId }
  })

  return <CommentListUI data={data} />
}