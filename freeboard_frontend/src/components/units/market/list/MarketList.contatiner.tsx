import { useQuery } from "@apollo/client"
import { useRouter } from "next/router"
import MarketListUI from "./MarketList.presenter"
import { FETCH_USEDITEMS, FETCH_USEDITEMS_OFTHEBEST } from "./MarketList.queries"
import { IQuery, IQueryFetchUseditemsArgs } from "../../../../commons/types/generated/types"


export default function MarketList() {
  const router = useRouter()
  // const [keyword, setKeyword] = useState('')
  const { data, fetchMore } = useQuery<Pick<IQuery, "fetchUseditems">, IQueryFetchUseditemsArgs>(FETCH_USEDITEMS, { variables: { page: 1, 
    isSoldout: false,
  }})
  const { data: best } = useQuery(FETCH_USEDITEMS_OFTHEBEST)

  function onClickMoveToMarketNew() {
    router.push("/market/new");
  }

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
    router.push(`/market/${event.currentTarget.id}`)
  }

  function onLoadMore() {
    if (!data) return;
    fetchMore({
      variables: {
        page: Math.ceil(Number(data?.fetchUseditems.length / 10))
    },
    updateQuery: (prev, {fetchMoreResult}) => {
      return {
        fetchUseditems: [
          ...prev.fetchUseditems,
          ...fetchMoreResult.fetchUseditems,
        ]
      }
    }
  })
  }

  // function onLoadMore() {
  //   fetchUseditems({
  //     variables: {
  //       pages
  //     }, 
  //     update(cache, {data}) {
  //       caches.modify({
  //         fields: {
  //           fetchBoards: (prev) => {
  //             return [data.fetchUseditems, ...prev]
  //           }
  //         }
  //       })
  //     }
  //   }),
    
  // }

  return <MarketListUI 
    data={data}
    best={best}
    onLoadMore={onLoadMore}
    onClickMoveToMarketNew={onClickMoveToMarketNew}
    onClickMoveToMarketDetailandSetTS={onClickMoveToMarketDetailandSetTS}
  />
}
