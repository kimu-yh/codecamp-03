import { useContext, useState } from "react"
import { gql, useMutation } from "@apollo/client"
import { GlobalContext } from "../_app"
import { useRouter } from 'next/router'

const LOGIN_USER = gql`
  mutation loginUserExample($email: String!, $password: String!) {
    loginUserExample(email: $email, password: $password) {
      accessToken
    }
  }
`

export default function LoginPage() {
  const router = useRouter()
  const { setAccessToken } = useContext(GlobalContext)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loginUserExample] = useMutation(LOGIN_USER)
 
  function onChangeEmail(e) {
    setEmail(e.target.value)
  }
  function onChangePassword(e) {
    setPassword(e.target.value)
  }
  async function onClickLogin() {
    const result = await loginUserExample({
      variables: {
        email, // email: email 
        password
      }
    })
    // console.log(result.data?.loginUserExample.accessToken)
    // localStorage.setItem("accessToken", "result.data?.loginUserExample.accessToken")
    localStorage.setItem("refreshToken", "true")

    setAccessToken(result.data?.loginUserExample.accessToken)
    router.push('/32-02-login-success')
  }

  return (
    <>
    이메일: <input type="text" onChange={onChangeEmail} /><br />
    비밀번호: <input type="password" onChange={onChangePassword} /><br />
    <button onClick={onClickLogin}>로그인하기</button>
    </>
  )
}