import MarketDetailUI from "./MarketDetail.presenter"
import { useRouter } from "next/router"
import { useMutation, useQuery } from "@apollo/client"
import { FETCH_USEDITEM, DELETE_USEDITEM, 
  TOGGLE_USEDITEM_PICK, FETCH_USEDITEM_IPICKED, 
  FETCH_USER_LOGGED_IN, CREATE_POINT_TRANSACTION_OF_BUYING_AND_SELLING } from "./MarketDetail.queries"
import { Modal } from 'antd'
import { useState } from "react"

export default function MarketDetail() {
  const [picked, setPicked] = useState(false)
  const router = useRouter()
  const [toggleUseditemPick] = useMutation(TOGGLE_USEDITEM_PICK)
  const [deleteUseditem] = useMutation(DELETE_USEDITEM)
  const [createPointTransactionOfBuyingAndSelling] = useMutation(CREATE_POINT_TRANSACTION_OF_BUYING_AND_SELLING)
  const { data } = useQuery(FETCH_USEDITEM, {
    variables: {useditemId: router.query.marketId }
  })
  const { data: dataIpicked } = useQuery(FETCH_USEDITEM_IPICKED, {
    variables: {page: 1, search: ""}
  })
  const { data: loginData } = useQuery(FETCH_USER_LOGGED_IN)
  
  
  
  function onClickMoveToList() {
    router.push(`/markets`)
  }
 
  function onClickMoveToEdit() {
    router.push(`/markets/${router.query.marketId}/edit`)
  }
  
  async function onClickDelete() { 
    try {
      await deleteUseditem({
        
        variables: {useditemId: router.query.marketId }
      })
      Modal.confirm({ content: "게시물이 삭제되었습니다."}) 
      router.push("/markets");
    } catch(error) {
      Modal.error({ content: error.message })
    }
  }

  async function onClickPick(event) {
   
    try {
      await toggleUseditemPick({
        variables: {
          useditemId: event.currentTarget.id
        }, refetchQueries : [
          {
            query: FETCH_USEDITEM,
            variables : {

              useditemId: router.query.marketId
            }
          }
        ]
      })
      setPicked(prev=>!prev)
    } catch(error) {
      Modal.error({content: error.message})
    }
  }

  async function onClickBuy(e) {
    try {
      await createPointTransactionOfBuyingAndSelling({
        variables: {
          useritemId: router.query.marketId
        }
      })
      Modal.confirm({content: "구매를 성공하였습니다."})

    } catch(error) {
      Modal.error({content: error.message})
    }
  }

  return <MarketDetailUI 
          data={data}
          dataIpicked={dataIpicked}
          loginData={loginData}
          marketId={router.query.marketId}
          picked={picked}
          user={data?.fetchUseditem.seller?.picture}
          writer={data?.fetchUseditem.seller?.name}
          date={data?.fetchUseditem.createdAt}
          onClickMoveToList={onClickMoveToList}
          onClickMoveToEdit={onClickMoveToEdit}
          onClickDelete={onClickDelete}
          onClickPick={onClickPick}
          onClickBuy={onClickBuy} 
        />
}