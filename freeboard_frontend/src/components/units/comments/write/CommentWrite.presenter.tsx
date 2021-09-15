import { 
  InputWrapper, 
  TextWrapper,
  InfoWrapper,
  InputWriter,
  InputPw,
  InputText,
  SubmitBtn,
  BtnWrapper,
  TextLength,
  Star,
  ReviewWrapper,
  PencilIcon,
  Review,
 } from "./CommentWrite.styles"

export default function CommentWriteUI(props) {
  return (
    <div>
      <InputWrapper>
      {!props.isEdit && (
        <ReviewWrapper>
          <PencilIcon src="/images/pencil.png" alt="pencil" />
          <Review>댓글</Review>
        </ReviewWrapper>
      )}
        <InfoWrapper>
          <InputWriter type="text" placeholder="작성자" 
            onChange={props.onChangeWriter}
            defaultValue={props.data?.writer}
            readOnly={Boolean(props.data?.writer)}
          />
          <InputPw type="password" placeholder="비밀번호" onChange={props.onChangePw} />
          <Star onChange={props.onChangeStar} value={props.star} />
        </InfoWrapper>
        <TextWrapper>
          <InputText onChange={props.onChangeText}
          defaultValue={props.data?.contents}
          placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 
          유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다.">
          </InputText>
          <BtnWrapper>
            <TextLength>{props.text.length}/100</TextLength>
            <SubmitBtn id={props.data?._id}
              onClick={props.isEdit? props.onClickUpdateComment : props.onClickSubmitComment}
              isYellow={Boolean(props.isEdit)}
            >
              {props.isEdit? "수정하기" : "등록하기"}
            </SubmitBtn>
          </BtnWrapper>
        </TextWrapper>
      </InputWrapper>
     
    </div>
  )
}