import QnAListUIItem from "./QnAList.presenterItem"
import InfiniteScroll from 'react-infinite-scroller'
import QnAWrite from "../write/QnAWrite.container"


export default function QnAListUI(props) {

  return (
    <>
    {/* <QnAWrite /> */}
    <InfiniteScroll
      pageStart={0}
      loadMore={props.onLoadMore}
      hasMore={true}
      isReverse={true}
    >
     {props.data?.fetchUseditemQuestions.map(el => 
      <QnAListUIItem key={el._id} data={el} />
      )}
    </InfiniteScroll>
    </>
  )
}