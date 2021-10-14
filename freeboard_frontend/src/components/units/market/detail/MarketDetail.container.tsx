import MarketDetailUI from "./MarketDetail.presenter"
import { useRouter } from "next/router"
import { useMutation, useQuery } from "@apollo/client"
import { FETCH_USEDITEM, DELETE_USEDITEM } from "./MarketDetail.queries"
import { Modal } from 'antd'

export default function MarketDetail() {
  const router = useRouter()
  const [deleteUseditem] = useMutation(DELETE_USEDITEM)
  const { data } = useQuery(FETCH_USEDITEM, {
    variables: {useditemId: router.query.marketId }
  })

  function onClickMoveToList() {
    router.push("/market")
  }
 
  function onClickMoveToEdit() {
    router.push(`/market/${router.query.marketId}/edit`)
  }
  
  async function onClickDelete() { 
    try {
      await deleteUseditem({
        
        variables: {useditemId: router.query.marketId }
      })
      Modal.confirm({ content: "게시물이 삭제되었습니다."}) 
      router.push("/market");
    } catch(error) {
      Modal.error({ content: error.message })
    }
  }

  return <MarketDetailUI 
          data={data}
          onClickMoveToList={onClickMoveToList}
          onClickMoveToEdit={onClickMoveToEdit}
          onClickDelete={onClickDelete}
          user={data?.fetchUseditem.seller?.picture}
          writer={data?.fetchUseditem.seller?.name}
          date={data?.fetchUseditem.createdAt}
        />
}