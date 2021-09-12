import { 
  InputWrapper, 
  TextWrapper,
  CommentsWrapper,
  InfoWrapper,
  InputWriter,
  InputPw,
  InputText,
  SubmitBtn,
  BtnWrapper,
  TextLength,
  Profile,
  ShowWrapper,
  InfoShowWrapper,
  ShowWriter, 
  ShowStar, 
  ShowText, 
  ShowDate,
  FixDelWrapper,
  Fix, 
  Delete,
 } from "./Comments.styles"

export default function CommentsUI(props) {

  return (
    <div>
      <InputWrapper>
        <InfoWrapper>
          <InputWriter type="text" placeholder="작성자" onChange={props.onChangeWriter} />
          <InputPw type="password" placeholder="비밀번호" onChange={props.onChangePw} />
        </InfoWrapper>
        <TextWrapper>
          <InputText onChange={props.onChangeText} 
          placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 
          유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다.">
          </InputText>
          <BtnWrapper>
            <TextLength >{props.text.length}/100</TextLength>
            <SubmitBtn>등록하기</SubmitBtn>
          </BtnWrapper>
        </TextWrapper>
      </InputWrapper>
      <CommentsWrapper>
        {/* 불러온 댓글을 보여주는 공간, 달리는 게시물의 보드id를 받아와야 함 */}
        <Profile alt="default profile" src="/images/avatar.png" />
        <ShowWrapper>
          <InfoShowWrapper>
            <ShowWriter>노원두</ShowWriter>
            <ShowStar>★★★★☆</ShowStar>
          </InfoShowWrapper>
          <ShowText>제가 원두커피를 안먹는 것은 아닙니다.하지만 자신을 먹는 것이란 비판은 어쩔 수 없지요</ShowText>
          <ShowDate>2021.09.10</ShowDate>
        </ShowWrapper>
        <FixDelWrapper>
          <Fix alt="pencil image" src="/images/fix.png" onClick={props.onClickUpdateComment} />
          <Delete alt="delete image" src="/images/ex.png" onClick={props.onClickDeleteComment} />
        </FixDelWrapper>
      </CommentsWrapper>

    </div>
  )
}