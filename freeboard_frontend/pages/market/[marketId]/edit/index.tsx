import { useQuery, gql } from '@apollo/client'
import { useRouter } from 'next/router'
import MarketWrite from '../../../../src/components/units/market/write/MarketWrite.container'
import { withAuth } from "../../../../src/components/commons/hocs/withAuth"

const FETCH_USEDITEM = gql`
  query fetchUseditem($useditemId: ID!) {
    fetchUseditem(useditemId: $useditemId) {
      _id
      name
      tags
      remarks
      contents
      price
      images
    }
  }
`

const MarketEditPage = (props) => {
  const router = useRouter();
  const { data } = useQuery(FETCH_USEDITEM, {
    variables: {
      useditemId: String(router.query.marketId)
    }
  })
  
  return <MarketWrite isEdit={true} data={data} />
}

export default withAuth(MarketEditPage)