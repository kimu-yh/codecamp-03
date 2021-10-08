import { useRouter } from "next/router"
import HeaderUI from "./Header.presenter"

export default function Header() {

  const router =  useRouter()
  const onClickBoards = () => router.push('/boards')
  const onClickMoveToLogin = () => router.push('/login')
  const onClickMoveToSignup = () => router.push('/signup')

  return( 
    <HeaderUI
    onClickBoards={onClickBoards}
    onClickMoveToLogin={onClickMoveToLogin}
    onClickMoveToSignup={onClickMoveToSignup}
    />
  )
}