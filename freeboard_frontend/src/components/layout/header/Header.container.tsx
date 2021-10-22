import { useRouter } from "next/router"
import HeaderUI from "./Header.presenter"
import { GlobalContext } from '../../../../pages/_app';
import { useContext } from "react";
import {Modal} from 'antd'
import { useQuery } from "@apollo/client";
import { FETCH_USER_LOGGED_IN } from "./Header.queries";
// import { LOGOUT_USER } from "./Header.queries"
// import { useMutation } from "@apollo/client";


export default function Header() {
  const {data} = useQuery(FETCH_USER_LOGGED_IN)
  const { setUserInfo, setAccessToken } = useContext(GlobalContext)
  const router =  useRouter()
  // const [logoutUser] = useMutation(LOGOUT_USER)
  const onClickBoards = () => router.push('/boards')
  const onClickMoveToLogin = () => router.push('/login')
  const onClickMoveToSignup = () => router.push('/signup')
  
  const onClickLogout = () => {
    // logoutUser()
    localStorage.removeItem("refreshToken")
    setUserInfo({})
    setAccessToken('')
    Modal.confirm({ content: "로그아웃 성공"})
    router.push('/login')
  }

  return( 
    <HeaderUI
    onClickBoards={onClickBoards}
    onClickMoveToLogin={onClickMoveToLogin}
    onClickMoveToSignup={onClickMoveToSignup}
    onClickLogout={onClickLogout}
    data={data}
    />
  )
}