import { 
  InputWrapper, 
  TextWrapper,
  InputText,
  SubmitBtn,
  BtnWrapper,
  TextLength,
  ReviewWrapper,
  PencilIcon,
  Review,
 } from "./QnAWrite.styles"

export default function QnAWriteUI(props) {
  return (
    <div>
      <InputWrapper>
      {!props.isEdit && (
        <ReviewWrapper>
          <PencilIcon src="/images/pencil.png" alt="pencil" />
          <Review>문의하기</Review>
        </ReviewWrapper>
      )}
        <TextWrapper>
          <InputText onChange={props.onChangeContents}
          defaultValue={props.data?.contents}
          placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 
          유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다.">
          </InputText>
          <BtnWrapper>
            <TextLength>{props.contents.length}/100</TextLength>
            <SubmitBtn id={props.data?._id}
              onClick={props.isEdit 
                ? props.onClickUpdateQuestion 
                : props.onClickSubmitQuestion}
              isYellow={Boolean(props.isEdit)}
            >
              {props.isEdit? "수정하기" : "문의하기"}
            </SubmitBtn>
          </BtnWrapper>
        </TextWrapper>
      </InputWrapper>
     
    </div>
  )
}
