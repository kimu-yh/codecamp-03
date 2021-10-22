import { useQuery, useLazyQuery } from "@apollo/client";
import { useRouter } from "next/router";
import QnAListUI from "./QnAList.presenter"
import { FETCH_USEDITEM_QUESTIONS } from "../QnA.queries";
import { useEffect } from "react";

export default function QnAList() {
  const router = useRouter()
  const { data: Qdata, fetchMore } = useQuery(FETCH_USEDITEM_QUESTIONS, {
    variables: { 
      useditemId: router.query.marketId, 
    }
  })
  console.log(Qdata)

  function onLoadMore() {
    if (!Qdata) return;
    fetchMore({
      variables: { page: Math.ceil(Qdata?.fetchUseditemQuestions.length / 10) + 1,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        return {
          fetchUseditemQuestions: [...prev.fetchUseditemQuestions, ...fetchMoreResult.fetchUseditemQuestions,
          ],
        }
      }
    })
  }

  return <QnAListUI 
    Qdata={Qdata}
    // Adata={Adata}
    onLoadMore={onLoadMore} />
}