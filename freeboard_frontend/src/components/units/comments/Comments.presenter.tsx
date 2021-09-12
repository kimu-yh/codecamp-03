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
 } from "./Comments.styles"

export default function CommentUI() {

  return (
    <div>
      <InputWrapper>
        <InfoWrapper>
          <InputWriter type="text" placeholder="작성자" />
          <InputPw type="password" placeholder="비밀번호" />
        </InfoWrapper>
        <TextWrapper>
          <InputText >개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 
          유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다.
          </InputText>
          <BtnWrapper>
            <TextLength>{}/100</TextLength>
            <SubmitBtn>등록하기</SubmitBtn>
          </BtnWrapper>
        </TextWrapper>
      </InputWrapper>
      <CommentsWrapper>
        {/* 불러온 댓글을 보여주는 공간, 달리는 게시물의 보드id를 받아와야 함 */}
        <Profile></Profile>
      </CommentsWrapper>

    </div>
  )
}