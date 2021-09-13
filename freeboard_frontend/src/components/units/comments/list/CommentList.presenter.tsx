import CommentListUIItem from "./CommentList.presenterItem"

export default function CommentListUI(props) {
  return (
    <>
     {props.data?.fetchBoardComments.map(data => 
      <CommentListUIItem key={data._id} data={data} />
      )}
    </>
  )
}