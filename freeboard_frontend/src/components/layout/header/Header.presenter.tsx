import { 
Wrapper, InnerWrapper, InnerLogo, InnerButton,
} from "./Header.styles"

export default function HeaderUI(props) {
  return (
    <Wrapper>
      <InnerWrapper>
      <InnerLogo onClick={props.onClickBoards}>🏖 쉬는 시간 🌴</InnerLogo>
      <div>
        <InnerButton onClick={props.onClickMoveToLogin}>로그인</InnerButton>
        <InnerButton onClick={props.onClickMoveToSignup}>회원가입</InnerButton>
      </div>
      </InnerWrapper>
    </Wrapper>
  )
}