import { gql, useApolloClient, useMutation } from "@apollo/client"
import axios from "axios"
import { useContext } from "react"
import { useForm } from "react-hook-form"
import { GlobalContext } from "../_app"

const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      accessToken 
    }
  }
`
const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      name
      email
      picture
    }
  }
`

export default function UseApoloClientPage() {
  const { setAccessToken, setUserInfo, userInfo } = useContext(GlobalContext)
  const { handleSubmit, register } = useForm()
  const [loginUser] = useMutation(LOGIN_USER)
  const client = useApolloClient()

  async function onClickLogin(data) {
    const result = await loginUser({
      variables: {
        email: data.myEmail,
        password: data.myPassword
      }
    })
    const accessToken = result.data.loginUser.accessToken
    // accessToken, userInfo
    // const result =  await axios.get("koreajson.com") // client.query와 비교해보기
    const resultUserInfo =  await client.query({
      query: FETCH_USER_LOGGED_IN,
      context: {
        headers: {
          authorization: `Bearer ${accessToken}`
        }
      }
    })
    const userInfo =  resultUserInfo.data.fetchUserLoggedIn 
    setAccessToken(accessToken)
    setUserInfo(userInfo)
  }

  return (
    <>
    {userInfo.email ? (
      `${userInfo.name}님 환영합니다`
      ) : ( 
    <form onSubmit={handleSubmit(onClickLogin)}>
      이메일: <input type="text" {...register("myEmail")} />
      비밀번호: <input type="text" {...register("myPassword")} />
      <button>로그인하기</button> 
      {/* <button type="button" onClick={myOnClickFunction}>로그인하기</button> */}
    </form>
    )}
    </>
  )
}