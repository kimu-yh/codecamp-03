import MarketDetail from '../../../src/components/units/market/detail/MarketDetail.container'
import CommentWrite from '../../../src/components/units/comments/write/CommentWrite.container'
import CommentList from '../../../src/components/units/comments/list/CommentList.container'

export default function MarketDetailPage() {

  return (
    <>
      <MarketDetail />
      <CommentWrite />
      <CommentList />
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