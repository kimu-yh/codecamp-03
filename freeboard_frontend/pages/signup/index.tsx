import { useState } from 'react';
import styled from '@emotion/styled';
import { gql, useMutation } from "@apollo/client";
import { Modal } from 'antd'
import router from 'next/router';


const Wrapper = styled.div`
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
const Name = styled.input`
  margin: 20px;
  width: 400px;
  height: 50px;
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

const CREATE_USER = gql`
  mutation createUser($createUserInput: CreateUserInput!) {
    createUser(createUserInput:$createUserInput) {
      _id
    }
  }
`

export default function Login() {

const [userInput, setUserInput] = useState({
  email: '',
  password: '',
  name: '',
})
const [createUser] = useMutation(CREATE_USER)

function onChangeUserInput(event) {
  setUserInput({...userInput, [event.target.name]: event.target.value})
  console.log(userInput)
}

async function onClickSignup() {
  if (!/\w+@\w+\.\w+/.test(userInput.email)) {
    Modal.error({ content: "이메일형식이 올바르지 않습니다." })
    return;
  }
  if (!/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(userInput.password)) {
    Modal.error({ content: "패스워드는 8자리 이상, 하나이상의 문자와 숫자와 특수문자의 조합입니다." })
    return;
  }
  if (!/^(?=.*[ㄱ-ㅎㅏ-ㅣ가-힣|0-9])[ㄱ-ㅎㅏ-ㅣ가-힣|0-9]{3,10}$/.test(userInput.name)) {
    Modal.error({ content: "닉네임은 한글로 3글자 이상 10글자 이하, 문자와 숫자 사용이 가능합니다" })
    return;
  }

  const result = await createUser({
    variables: {createUserInput: {...userInput}}
  })
  result.data.createUser._id && router.push('/login')
  }



  return(
    <Wrapper>
      <Email name="email" type="email" onChange={onChangeUserInput}
      placeholder="이메일을 입력해주세요" />
      <Password name="password" type="password" onChange={onChangeUserInput}
      placeholder="비밀번호를 입력해주세요" />
      <Name name="name" type="name" onChange={onChangeUserInput}
      placeholder="닉네임을 입력해주세요" />
      <Button onClick={onClickSignup}>회원가입하기</Button>
    </Wrapper>
  )
}