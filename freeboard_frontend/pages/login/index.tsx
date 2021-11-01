import { gql, useMutation } from "@apollo/client";
import { useContext, useState } from 'react';
import { useRouter } from 'next/router'
import { GlobalContext } from "../_app";
import styled from '@emotion/styled';


const Wrapper = styled.div`
  width: 500px;
  display: flex;
  flex-direction: column;
  margin: auto;
`
const Email = styled.input`
  width: 400px;
  height: 50px;
  margin: 20px;
  text-align: center;
  background-color: #ebefdf;
  border: none;
  border-radius: 10px;
`
const Password = styled.input`
  width: 400px;
  height: 50px;
  margin: 20px;
  text-align: center;
  background-color: #ebefdf;
  border: none;
  border-radius: 10px;
`
const Button = styled.button`
  margin: 20px;
  width: 400px;
  height: 50px;
  background-color: #c5efe4;
  border: none;
  border-radius: 10px;
  cursor: pointer;
`

const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      accessToken 
    }
  }
`

export default function Login() {
  const { setAccessToken } = useContext(GlobalContext)
  const router = useRouter()
  const [userInput, setUserInput] = useState({
    email: '',
    password: '',
  })
  const [loginUser] = useMutation(LOGIN_USER)

  function onChangeUserInput(event) {
    setUserInput({...userInput, [event.target.name]: event.target.value})

  }

  async function onClickLogin() {
    const result = await loginUser({variables: {...userInput}})
    // localStorage.setItem("accessToken", result.data?.loginUser.accessToken)
    setAccessToken(result.data?.loginUser.accessToken)
    localStorage.setItem("refreshToken", "true")
    router.push('/mypage')
  }


  return(
    <Wrapper>
      <Email name="email" type="email" onChange={onChangeUserInput}
      placeholder="이메일을 입력해주세요" />
      <Password name="password" type="password" onChange={onChangeUserInput}
      placeholder="비밀번호를 입력해주세요" />
      <Button onClick={onClickLogin}>로그인하기</Button>
    </Wrapper>
  )
}