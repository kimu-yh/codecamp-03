import { useQuery } from '@apollo/client'
import {FETCH_USEDITEMS_IBOUGHT} from '../../../src/components/units/market/list/MarketList.queries'
import MarketListPageUI from '../../../src/components/units/market/list/MarketListPages.presenter';

export default function IBought(props) {
  const { data: iBought, fetchMore : fetchMoreIBought } = useQuery(FETCH_USEDITEMS_IBOUGHT, {
    variables: {
      search: "",
      page: 1,
    }
  })

  function onLoadMoreIbought() {
    if (!iBought) return;

    fetchMoreIBought({
      variables: {
        page: Math.ceil(Number(iBought?.length / 10))
      },
      updateQuery: (prev, {fetchMoreResult}) => {
        return {
          fetchUseditemsIBought : [
            ...prev.fetchUseditemsIBought,
            ...fetchMoreResult.fetchUseditemsIBought,
          ]
        }
      }
    })
  }

  return ( <MarketListPageUI
    data={iBought?.fetchUseditemsIBought}
    onLoadMore={onLoadMoreIbought}
    onClickMoveToMarketDetailandSetTS={props.onClickMoveToMarketDetailandSetTS}
  /> 
  )
}