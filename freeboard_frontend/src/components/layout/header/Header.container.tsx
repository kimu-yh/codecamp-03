import { useRouter } from "next/router"
import HeaderUI from "./Header.presenter"

export default function Header() {
  const router =  useRouter()
  const onClickBoards = () => router.push('/boards')
  const onClickMoveToLogin = () => router.push('/login')

  return( 
    <HeaderUI
    onClickBoards={onClickBoards}
    onClickMoveToLogin={onClickMoveToLogin}
    />
  )
}