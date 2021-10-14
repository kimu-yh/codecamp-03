import { useRouter } from "next/router"
import HeaderUI from "./Header.presenter"
import { GlobalContext } from '../../../../pages/_app';
import { useContext, useEffect } from "react";
import {Modal} from 'antd'
// import { LOGOUT_USER } from "./Header.queries"
// import { useMutation } from "@apollo/client";


export default function Header() {
  const { setUserInfo, userInfo, accessToken, setAccessToken } = useContext(GlobalContext)
  const router =  useRouter()
  // const [logoutUser] = useMutation(LOGOUT_USER)
  const onClickBoards = () => router.push('/boards')
  const onClickMoveToLogin = () => router.push('/login')
  const onClickMoveToSignup = () => router.push('/signup')
  const onClickLogout = () => {
    // logoutUser()
    localStorage.removeItem("accessToken")
    setUserInfo({})
    setAccessToken('')
    Modal.confirm({ content: "로그아웃 성공"})
  }

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
    onClickLogout={onClickLogout}
    />
  )
}