import { useQuery } from '@apollo/client'
import {FETCH_USEDITEM_IPICKED} from '../../../src/components/units/market/list/MarketList.queries'
import MarketListPageUI from '../../../src/components/units/market/list/MarketListPages.presenter';

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
        page: Math.ceil(Number(iPicked?.fetchUseditemsIPicked.length / 10))
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

  return ( <MarketListPageUI
    data={iPicked?.fetchUseditemsIPicked}
    onLoadMore={onLoadMoreIpicked}
  /> 
  )
}