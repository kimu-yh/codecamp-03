import router from 'next/router'
import TodaySawUI from './TodaySaw.presenter'

export default function TodaySaw() {
  


  function onClickGetSessionStorage() {
    const TodaySaw = sessionStorage.getItem("item")
    router.push('/market/router.query.marketId')
  }

  return (
    <TodaySawUI
    onClickSetSessionStorage={onClickSetSessionStorage}
    onClickGetSessionStorage={onClickGetSessionStorage}
    />
  )
}