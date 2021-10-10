import { 
Wrapper, InnerWrapper, InnerLogo, InnerButton,
} from "./Header.styles"
import LoginProfile from "../../commons/loginProfile/loginProfile"

export default function HeaderUI(props) {
  return (
    <Wrapper>
      <InnerWrapper>
      <InnerLogo onClick={props.onClickBoards}>🏖 쉬는 시간 🌴</InnerLogo>
      <div>
        {
        props.accessToken 
        ? <LoginProfile src={props.userInfo.picture} name={props.userInfo.name}/>
        : ( 
        <>
        <InnerButton onClick={props.onClickMoveToLogin}>로그인</InnerButton>
        <InnerButton onClick={props.onClickMoveToSignup}>회원가입</InnerButton>
        </>)
        }
      </div>
      </InnerWrapper>
    </Wrapper>
  )
}