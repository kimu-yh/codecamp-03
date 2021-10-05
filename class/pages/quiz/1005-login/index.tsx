import {gql, useMutation} from "@apollo/client"
import { useState, useContext } from "react";
import { GlobalContext } from "../../_app"
import { useRouter } from 'next/router'

const LOGIN_USER =  gql`
  mutation loginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      accessToken
    }
  }
`

export default function QuizLoginPage() {
  const router = useRouter()
  const { setAccessToken } = useContext(GlobalContext)
  const [inputs, setInputs] = useState({
    email: '', password: '', name: ''})
  const [loginUser] = useMutation(LOGIN_USER)

  function onChangeInputs(e) {
    setInputs(
    {...inputs, [e.target.type]: e.target.value}
    )
  }
  async function onClickLogin() {
    const result = await loginUser({variables: {...inputs}})
    localStorage.setItem("accessToken", result.data?.loginUser.accessToken)
    setAccessToken(result.data?.loginUser.accessToken)
    router.push('/quiz/1005-login-success')
  }

  return (
    <div>
      이메일: <input type="email" 
      onChange={onChangeInputs} /><br />
      비밀번호: <input type="password"
      onChange={onChangeInputs} /><br />
      <button onClick={onClickLogin}>로그인하기!!!</button>
    </div>
  )
}