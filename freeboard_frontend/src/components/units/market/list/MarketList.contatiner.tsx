import { useQuery } from "@apollo/client"
import { useRouter } from "next/router"
import MarketListUI from "./MarketList.presenter"
import { FETCH_USEDITEMS, FETCH_USEDITEMS_OFTHEBEST, FETCH_USER_LOGGED_IN } from "./MarketList.queries"
import { IQuery, IQueryFetchUseditemsArgs } from "../../../../commons/types/generated/types"
import { useEffect, useState } from "react"


export default function MarketList() {
  const router = useRouter()
  const { data: selling, fetchMore } = useQuery<Pick<IQuery, "fetchUseditems">, IQueryFetchUseditemsArgs>(FETCH_USEDITEMS, { variables: { page: 1, 
    isSoldout: false,
  }})

  const [data, setData] = useState(selling?.fetchUseditems)
  const [current, setCurrent] = useState('');

  // const [keyword, setKeyword] = useState('')

  const { data: best } = useQuery(FETCH_USEDITEMS_OFTHEBEST)
  const { data: login } = useQuery(FETCH_USER_LOGGED_IN)
  
  const { data: sold } = useQuery(FETCH_USEDITEMS, { variables: { page: 1, 
    isSoldout: true,
  }}) 

  

  function onClickMoveToMarketNew() {
    router.push("/markets/new");
  }

  useEffect( () => {
    setData( selling?.fetchUseditems )
  }, [selling])

  const onClickMoveToMarketDetailandSetTS = (el) => (event)=> {
    const today = JSON.parse(sessionStorage.getItem("todaySaw")) || []
    let isExist = false;
    today.forEach((item) => {
      if (el._id === item._id) isExist = true
    })
    if (isExist) return;

    const newEl = {...el}
    delete newEl.__typename;
    today.push(newEl)
    sessionStorage.setItem("todaySaw", JSON.stringify(today))
    router.push(`/markets/${event.currentTarget.id}`)
  }

  const onClickItemsSelling = (event) => {
    setData(selling?.fetchUseditems)
    setCurrent(event.target.id)
  }

  const onClickItemsSold = (event) => {
    setData(sold?.fetchUseditems)
    setCurrent(event.target.id)
  }

  const onClickMyItems = (event) => {
    console.log(selling, login.fetchUserLoggedIn?._id)

    setData(selling.fetchUseditems?.filter(e => e.seller._id === login.fetchUserLoggedIn?._id))
    setCurrent(event.target.id)
  }

// *************************************************
  const onClickItemsIbought = (event) => {
    setCurrent(event.target.id)
    router.push("/markets/ibought");
  }
  
  const onClickIPicked = (event) => {
    setCurrent(event.target.id)
    router.push("/markets/ipicked");
  }

 
  function onLoadMore() {
    if (!data) return;

    // if (!current) {
    fetchMore({
      variables: {
        page: Math.ceil(Number(data?.length / 10))
      },
      updateQuery: (prev, {fetchMoreResult}) => {
        return {
          fetchUseditems : [
            ...prev.fetchUseditems,
            ...fetchMoreResult.fetchUseditems,
          ]
        }
      }
    })
  }

  return <MarketListUI 
    data={data}
    best={best}
    current={current}
    onLoadMore={onLoadMore}
    onClickMoveToMarketNew={onClickMoveToMarketNew}
    onClickMoveToMarketDetailandSetTS={onClickMoveToMarketDetailandSetTS}
    onClickItemsSelling={onClickItemsSelling}
    onClickItemsSold={onClickItemsSold}
    onClickItemsIbought={onClickItemsIbought}
    onClickMyItems={onClickMyItems}
    onClickIPicked={onClickIPicked}
  />
}
