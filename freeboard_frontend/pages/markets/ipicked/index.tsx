import { useQuery } from '@apollo/client'
import {FETCH_USEDITEM_IPICKED} from '../../../src/components/units/market/list/MarketList.queries'
import MarketListUI from '../../../src/components/units/market/list/MarketList.presenter'

export default function IPicked() {
  const { data : iPicked, fetchMore : fetchMoreIPicked } = useQuery(FETCH_USEDITEM_IPICKED, {
    variables : {
      search : "",
      page : 1
    }
  })

  function onLoadMoreIpicked() {
    if (!iPicked) return;

    fetchMoreIPicked({
      variables: {
        page: Math.ceil(Number(iPicked?.length / 10))
      },
      updateQuery: (prev, {fetchMoreResult}) => {
        return {
          fetchUseditemsIPicked : [
            ...prev.fetchUseditemsIPicked,
            ...fetchMoreResult.fetchUseditemsIPicked,
          ]
        }
      }
    })
  }

  return ( <MarketListUI 
    data={iPicked.fetchUseditemsIPicked}
    onLoadMore={onLoadMoreIpicked}
  /> 
  )
}