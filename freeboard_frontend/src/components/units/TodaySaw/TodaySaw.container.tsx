
import { useRouter } from 'next/router'
import TodaySawUI from './TodaySaw.presenter'

export default function TodaySaw() {
  const router = useRouter()

  function onClickMoveToDetail(e) {
    router.push(`/market/${e.currentTarget.id}`)
  }

  return (
    <TodaySawUI
    onClickMoveToDetail={onClickMoveToDetail}
    />
  )
}