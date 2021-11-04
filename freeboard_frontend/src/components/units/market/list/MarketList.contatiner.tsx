import { useQuery } from "@apollo/client"
import { useRouter } from "next/router"
import MarketListUI from "./MarketList.presenter"
import { FETCH_USEDITEMS, FETCH_USEDITEMS_OFTHEBEST } from "./MarketList.queries"
import { IQuery, IQueryFetchUseditemsArgs } from "../../../../commons/types/generated/types"
import _ from "lodash";
import { useState } from "react"

export default function MarketList() {
  const router = useRouter()
  const { data: selling, fetchMore, refetch } = useQuery<Pick<IQuery, "fetchUseditems">, IQueryFetchUseditemsArgs>(FETCH_USEDITEMS, { variables: { page: 1, 
    isSoldout: false,
  }})
  const { data: best } = useQuery(FETCH_USEDITEMS_OFTHEBEST)
  const [keyword, setKeyword] = useState('')

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

  const onClickMoveToId = (event) => {
    router.push(`/markets/${event.target.id}`);
  }
 
  function onLoadMore() {
    if (!selling) return;

    fetchMore({
      variables: {
        page: Math.ceil(Number(selling?.fetchUseditems.length / 10))
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

  const getDebounce = _.debounce((data) => {
    refetch({ search: data })
    setKeyword(data)
  }, 2000)

  function onChangeSearch(event: ChangeEvent<HTMLInputElement>) {
    getDebounce(event.target.value)
  }

  function onChangeDate(date) {
    refetch({startDate: date[0], endDate: date[1]})
  }

  return <MarketListUI 
    keyword={keyword}
    data={selling?.fetchUseditems}
    best={best}
    onLoadMore={onLoadMore}
    onChangeSearch={onChangeSearch}
    onChangeDate={onChangeDate}
    onClickMoveToId={onClickMoveToId}
    onClickMoveToMarketDetailandSetTS={onClickMoveToMarketDetailandSetTS}
  />
}
