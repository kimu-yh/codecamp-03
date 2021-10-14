import { 
Wrapper, InnerWrapper, InnerLogo, InnerButton, Logout, ButtonWrapper
} from "./Header.styles"
import LoginProfile from "../../commons/loginProfile"

export default function HeaderUI(props) {
  return (
    <Wrapper>
      <InnerWrapper>
      <InnerLogo onClick={props.onClickBoards}>🏖 쉬는 시간 🌴</InnerLogo>
     
        {
        props.accessToken 
        ? ( <ButtonWrapper>
        <LoginProfile src={props.userInfo.picture} name={props.userInfo.name}/>
        <Logout onClick={props.onClickLogout} /> 
        </ButtonWrapper>)
        : ( <ButtonWrapper>
        <InnerButton onClick={props.onClickMoveToLogin}>로그인</InnerButton>
        <InnerButton onClick={props.onClickMoveToSignup}>회원가입</InnerButton>
        </ButtonWrapper>)
        }
   
      </InnerWrapper>
    </Wrapper>
  )
}