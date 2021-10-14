import CommentListUIItem from "./CommentList.presenterItem"
import InfiniteScroll from 'react-infinite-scroller'
import CommentWrite from "../write/CommentWrite.container"


export default function CommentListUI(props) {

  return (
    <>
    <CommentWrite />
    <InfiniteScroll
      pageStart={0}
      loadMore={props.onLoadMore}
      hasMore={true}
      isReverse={true}
    >
     {props.data?.fetchBoardComments.map(el => 
      <CommentListUIItem key={el._id} data={el} />
      )}
    </InfiniteScroll>
    </>
  )
}