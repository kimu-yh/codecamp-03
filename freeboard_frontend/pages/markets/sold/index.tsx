import { useQuery } from '@apollo/client'
import {FETCH_USEDITEMS} from '../../../src/components/units/market/list/MarketList.queries'
import MarketListPageUI from '../../../src/components/units/market/list/MarketListPages.presenter';

export default function IBought() {
  const { data: sold, fetchMore: fetchMoreSold } = useQuery(FETCH_USEDITEMS, 
    { variables: 
      { page: 1, isSoldout: true, }
    }) 

  function onLoadMoreSold() {
    if (!sold) return;

    fetchMoreSold({
      variables: {
        page: Math.ceil(Number(sold?.fetchUseditems.length / 10))
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

  return ( <MarketListPageUI
    data={sold?.fetchUseditems}
    onLoadMore={onLoadMoreSold}
  /> 
  )
}