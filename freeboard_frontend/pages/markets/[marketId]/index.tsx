import MarketDetail from '../../../src/components/units/market/detail/MarketDetail.container'
import QnAList from '../../../src/components/units/market/QnA/list/QnAList.container'
import QnAWrite from '../../../src/components/units/market/QnA/write/QnAWrite.container'
// import QnAWrite from '../'

export default function MarketDetailPage() {

  return (
    <>
      <MarketDetail />
      <QnAWrite />
      <QnAList />
      
      { /* 대댓글 구현 방식 제안1.
       <CommentWrite />
      {data?.fetchProducts.map(() => (
        <>
          <CommentWrite />
          <CommentList />
        </>
      ))}
       */}
    </>
  )
}