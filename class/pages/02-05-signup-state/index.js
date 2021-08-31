import { useState } from "react"
import styled from '@emotion/styled'

export default function SignupStatePage() {
  const [email, setEmail] = useState('')
  const [emailError, setEmailError] = useState('')
  const [password1, setPassword1] = useState('')
  const [password2, setPassword2] = useState('')
  const [pwError, setPwError] = useState('')

  function onChangeEmail(event) {
    setEmail(event.target.value)
  }

  function onChangePassword1(event) {
    setPassword1(event.target.value)
  }

  function onChangePassword2(event) {
    setPassword2(event.target.value)
  }

  function onClickSignup() {
    if (!email.includes('@')) {
      setEmailError("@가 없습니다!")
      // alert("@가 없습니다!")
    }

    if (password1 !== password2) {
      // alert("비밀번호가 서로 다릅니다!")
      setPwError("비밀번호가 서로 다릅니다!")
    }
  }

  const ErrorMessage = styled.div`
    font-size: 14px;
    color: red;
    font-family: Nanum Myeongjo;
  `

  return (
    <div>
      이메일: <input type="text" onChange={onChangeEmail} /><br />
      <ErrorMessage>{emailError}</ErrorMessage> 
      {/* emotion으로 글자색, 글자크기 변경하기 */}
      비밀번호: <input type="password" onChange={onChangePassword1} /><br />
      비밀번호확인: <input type="password" onChange={onChangePassword2} /><br />
      <ErrorMessage>{pwError}</ErrorMessage> 
      <button onClick={onClickSignup}>회원가입하기</button>
    </div>
  )

}