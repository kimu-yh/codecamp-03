import { useRouter } from "next/router"
import HeaderUI from "./Header.presenter"
import { GlobalContext } from '../../../../pages/_app';
import { useContext, useEffect } from "react";


export default function Header() {
  const { setUserInfo, userInfo, accessToken } = useContext(GlobalContext)
  const router =  useRouter()
  const onClickBoards = () => router.push('/boards')
  const onClickMoveToLogin = () => router.push('/login')
  const onClickMoveToSignup = () => router.push('/signup')

  useEffect(() => {
    if (userInfo.name) return;
    setUserInfo({
      name: userInfo.name,
      picture: userInfo.picture
    })
  }, [userInfo.name])

  return( 
    <HeaderUI
    onClickBoards={onClickBoards}
    onClickMoveToLogin={onClickMoveToLogin}
    onClickMoveToSignup={onClickMoveToSignup}
    accessToken={accessToken}
    userInfo={userInfo}
    />
  )
}