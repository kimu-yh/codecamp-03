import { 
Wrapper, InnerWrapper, InnerLogo, InnerButton, Logout, ButtonWrapper
} from "./Header.styles"
import LoginProfile from "../../commons/loginProfile"

export default function HeaderUI(props) {
  
  return (
    <Wrapper>
      <InnerWrapper>
      <InnerLogo onClick={props.onClickBoards}>π μ¬λ μκ° π΄</InnerLogo>
     
        { process.browser && localStorage.getItem("refreshToken") 

        ? ( <ButtonWrapper>
        <LoginProfile 
          onClick={props.onClickMoveToMyPage}
          src={props.data?.fetchUserLoggedIn?.picture} 
          name={props.data?.fetchUserLoggedIn?.name}
          balance={props.data?.fetchUserLoggedIn?.userPoint.amount}
        />
        <Logout onClick={props.onClickLogout} /> 
        </ButtonWrapper>)

        : ( <ButtonWrapper>
        <InnerButton onClick={props.onClickMoveToLogin}>λ‘κ·ΈμΈ</InnerButton>
        <InnerButton onClick={props.onClickMoveToSignup}>νμκ°μ</InnerButton>
        </ButtonWrapper>)
        }
   
      </InnerWrapper>
    </Wrapper>
  )
}