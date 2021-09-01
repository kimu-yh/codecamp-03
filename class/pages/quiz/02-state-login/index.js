import { useState } from "react";
import {
  Wrapper, LogoWrapper, Logo, Rectangle, Title, InputWrapper, Email, Password,
  LoginBtn, SignupWrapper, KakaoLoginBtn, Kakaologo, Error
} from '../../../styles/stateLogin'

export default function StateLoginPage() {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [password, setPassword] = useState('');
  const [pwError, setPwError] = useState('');

  function onChangeEmail(event) {
    setEmail(event.target.value);
  }

  function onChangePassword(event) {
    setPassword(event.target.value);
  }

  function onClickLogin() {
    if (email === '' || !email.includes('@')) {
      setEmailError("이메일 주소를 다시 확인해주세요.")
    } else {
      setEmailError('')
    }
    if (password === '' || password.length < 8 || password.length > 16) {
      setPwError("8~16자의 영문, 숫자, 특수 문자만 사용 가능합니다.")
    } else {
      setPwError('')
    }
  }

  return (
    <Wrapper>
      <LogoWrapper>
        <Logo alt="Eats Road Logo" src="/eatsLogo.png" />
        <Rectangle alt="shadow image" src="/rectangle.png" />
      </LogoWrapper>
      <Title>잇츠로드</Title>
      <InputWrapper>
        <Email 
          type="email" 
          placeholder="simplelife@gmail.com"
          onChange={onChangeEmail}
        />
        <Error>{emailError}</Error>
        <Password 
          type="password" 
          placeholder="●●●●●●●●"
          onChange={onChangePassword}
        />
        <Error>{pwError}</Error>
      </InputWrapper>
      <LoginBtn onClick={onClickLogin}>로그인</LoginBtn>
      <SignupWrapper>
        이메일 찾기 &nbsp;&nbsp;| &nbsp;&nbsp;비밀번호 찾기&nbsp;&nbsp; | &nbsp;&nbsp;회원가입
      </SignupWrapper>
      <KakaoLoginBtn>카카오톡으로 로그인</KakaoLoginBtn>
      <Kakaologo alt="kakao logo" src="/kakao.png" />
    </Wrapper>
  )
}