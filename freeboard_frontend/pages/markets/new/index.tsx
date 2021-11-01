import MarketWrite from "../../../src/components/units/market/write/MarketWrite.container";
import { withAuth } from "../../../src/components/commons/hocs/withAuth"

const MarketNewPage = (props) => {
  
  return <MarketWrite />
}

export default withAuth(MarketNewPage)