import QnAListUIItem from "./QnAList.presenterItem"
import InfiniteScroll from 'react-infinite-scroller'


export default function QnAListUI(props) {

  console.log(props)
  return (
    <>
    <InfiniteScroll
      pageStart={0}
      loadMore={props.onLoadMore}
      hasMore={true}
      isReverse={true}
    >
    {props.Qdata?.fetchUseditemQuestions.map(el => 
      <QnAListUIItem key={el._id} data={el} id={el._id} />
    )}
{/* 
    {props.Adata?.fetchUseditemQuestionAnswers.map(el => 
      <QnAListUIItem key={el._id} data={el} />
    )} */}

    </InfiniteScroll>
    </>
  )
}