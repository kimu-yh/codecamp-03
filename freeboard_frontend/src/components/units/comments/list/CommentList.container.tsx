import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { IQuery } from "../../../../commons/types/generated/types";
import CommentListUI from "./CommentList.presenter"
import { FETCH_BOARD_COMMENTS } from "./CommentList.queries";

export default function CommentList() {
  const router = useRouter()
  const { data, fetchMore } = useQuery<Pick<IQuery, "fetchBoardComments">>(FETCH_BOARD_COMMENTS, {
    variables: { boardId: router.query.boardId }
  })

  function onLoadMore() {
    if (!data) return;
    fetchMore({
      variables: { page: Math.ceil(data?.fetchBoardComments.length / 10) + 1 , },
      updateQuery: (prev, { fetchMoreResult }) => {
        return {
          fetchBoardComments: [...prev.fetchBoardComments, ...fetchMoreResult.fetchBoardComments]
        }
      }
    })
  }

  return <CommentListUI data={data}
    onLoadMore={onLoadMore} />
}