import MarketDetailUI from "./MarketDetail.presenter"
import { useRouter } from "next/router"
import { useMutation, useQuery } from "@apollo/client"
import { FETCH_USEDITEM, DELETE_USEDITEM, 
  TOGGLE_USEDITEM_PICK, FETCH_USEDITEM_IPICKED } from "./MarketDetail.queries"
import { Modal } from 'antd'
import { useEffect, useState } from "react"

export default function MarketDetail() {
  const [picked, setPicked] = useState(false)
  const router = useRouter()
  const [toggleUseditemPick] = useMutation(TOGGLE_USEDITEM_PICK)
  const [deleteUseditem] = useMutation(DELETE_USEDITEM)
  const { data } = useQuery(FETCH_USEDITEM, {
    variables: {useditemId: router.query.marketId }
  })
  const { data: dataIpicked } = useQuery(FETCH_USEDITEM_IPICKED, {
    variables: {page: 1, search: ""}
  })
 
  
  function onClickMoveToList() {
    router.push(`/market`)
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

  async function onClickPick(event) {
    console.log("ipicked",  dataIpicked?.fetchUseditemsIPicked)
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


  // useEffect(()=>{
  //   dataIpicked?.fetchUseditemsIPicked.map((el)=>{
  //     return console.log("el",el)
  //   })
  // },[])

  return <MarketDetailUI 
          data={data}
          onClickMoveToList={onClickMoveToList}
          onClickMoveToEdit={onClickMoveToEdit}
          onClickDelete={onClickDelete}
          onClickPick={onClickPick}
          user={data?.fetchUseditem.seller?.picture}
          writer={data?.fetchUseditem.seller?.name}
          date={data?.fetchUseditem.createdAt}
          picked={picked}
        />
}