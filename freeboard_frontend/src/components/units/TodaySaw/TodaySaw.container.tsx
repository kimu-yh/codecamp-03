
import { useRouter } from 'next/router'
import TodaySawUI from './TodaySaw.presenter'

export default function TodaySaw() {
  const router = useRouter()

  function onClickMoveToDetail(el) {
    console.log('a', el)
    router.push(`/market/${el._id}`)
  }

  return (
    <TodaySawUI
    onClickMoveToDetail={onClickMoveToDetail}
    />
  )
}