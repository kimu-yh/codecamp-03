import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import QnAListUI from "./QnAList.presenter"
import { FETCH_USEDITEM_QUESTIONS } from "../QnA.queries";

export default function QnAList() {
  const router = useRouter()
  const { data, fetchMore } = useQuery(FETCH_USEDITEM_QUESTIONS, {
    variables: { 
      useditemId: router.query.marketId, 
    }
  })

  function onLoadMore() {
    if (!data) return;
    fetchMore({
      variables: { page: Math.ceil(data?.fetchUseditemQuestions.length / 10) + 1 ,},
      updateQuery: (prev, { fetchMoreResult }) => {
        return {
          fetchUseditemQuestions: [...prev.fetchUseditemQuestions, ...fetchMoreResult.fetchUseditemQuestions]
        }
      }
    })
  }

  return <QnAListUI data={data}
    onLoadMore={onLoadMore} />
}