
import { useRouter } from 'next/router'
import TodaySawUI from './TodaySaw.presenter'

export default function TodaySaw(props) {
  const router = useRouter()

  function onClickMoveToDetail(el) {
    
    router.push(`/market/${el._id}`)
  }

  function onClickClose() {
    props.setClose(prev => !prev)
  }

  return (
    <TodaySawUI
    onClickMoveToDetail={onClickMoveToDetail}
    onClickClose={onClickClose}
    close={props.close}
    />
  )
}