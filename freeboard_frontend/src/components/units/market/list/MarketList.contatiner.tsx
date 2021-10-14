import { useQuery } from "@apollo/client"
import { useRouter } from "next/router"
import MarketListUI from "./MarketList.presenter"
import { FETCH_USEDITEMS, FETCH_USEDITEMS_OFTHEBEST } from "./MarketList.queries"
import { IQuery, IQueryFetchUseditemsArgs } from "../../../../commons/types/generated/types";


export default function MarketList() {
  const router = useRouter()
  // const [keyword, setKeyword] = useState('')
  const { data } = useQuery<Pick<IQuery, "fetchUseditems">, IQueryFetchUseditemsArgs>(FETCH_USEDITEMS, { variables: { page: 1 }})
  const { data: best } = useQuery(FETCH_USEDITEMS_OFTHEBEST)

  function onClickMoveToMarketNew() {
    router.push("/market/new");
  }
  const onClickMoveToMarketDetailandSetTS = (el) => (event)=> {
    router.push(`/market/${event.currentTarget.id}`)
    sessionStorage.setItem("todaySaw", "event.currentTarget.id")
    let isExist = false;
    const todaySaw = JSON.parse(sessionStorage.getItem("todaySaw")) || []
    todaySaw.forEach((item) => {
      if (el._id === item._id) isExist = true
    })
    if (isExist) return;
    const newEl = {...el}
    delete newEl.__typename;
    todaySaw.push(newEl)
    sessionStorage.setItem("todaySaw", JSON.stringify(todaySaw))
  }


  return <MarketListUI 
    data={data}
    best={best}
    onClickMoveToMarketNew={onClickMoveToMarketNew}
    onClickMoveToMarketDetailandSetTS={onClickMoveToMarketDetailandSetTS}
  />
}
