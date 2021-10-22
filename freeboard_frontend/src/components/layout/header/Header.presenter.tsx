import { 
Wrapper, InnerWrapper, InnerLogo, InnerButton, Logout, ButtonWrapper
} from "./Header.styles"
import LoginProfile from "../../commons/loginProfile"

export default function HeaderUI(props) {
  console.log("111" , props?.data)
  return (
    <Wrapper>
      <InnerWrapper>
      <InnerLogo onClick={props.onClickBoards}>🏖 쉬는 시간 🌴</InnerLogo>
     
        { process.browser && localStorage.getItem("refreshToken") 

        ? ( <ButtonWrapper>
        <LoginProfile src={props.data?.fetchUserLoggedIn?.picture} name={props.data?.fetchUserLoggedIn?.name}/>
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