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
  Arrow,
  AnswerWriteWrapper
 } from "./QnAWrite.styles"

export default function QnAWriteUI(props) {
  return (
    <div>
      <InputWrapper>
      {!props.isEdit && !props.isAnswer && (
        <ReviewWrapper>
          <PencilIcon src="/images/pencil.png" alt="pencil" />
          <Review>문의하기</Review>
        </ReviewWrapper>
      )}
      <AnswerWriteWrapper>
      {props.isAnswer &&
       <Arrow src="/images/reArrow.png" />
      }
        <TextWrapper>
          <InputText onChange={props.onChangeContents} 
            defaultValue={
              props.isEdit && !props.isAnswer && props.data?.contents ||
              props.isAnswer && props.isEdit && props.Adata.fetchUseditemQuestionAnswers[props.answerIndex].contents ||
              ""
            }
            placeholder={ 
              props.isAnswer 
              ? "답글을 등록해주세요"
              : `개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다.`
            }
          > 
          </InputText>  
          <BtnWrapper>
            <TextLength>{props.contents.length}/100</TextLength>
            <SubmitBtn 
              id={props.isAnswer? props.answerId : props.data?._id}
              onClick={
                props.isEdit && props.isAnswer && props.onClickUpdateAnswer ||
                props.isEdit && !props.isAnswer && props.onClickUpdateQuestion || 
                !props.isEdit && props.isAnswer && props.onClickSubmitAnswer ||
                !props.isEdit && !props.isAnswer &&  props.onClickSubmitQuestion
              }
              isYellow={Boolean(props.isEdit || props.isAnswer)}
            >
              {props.isEdit 
              ? "수정하기" 
              : props.isAnswer
                ? "답글등록" 
                : "문의하기"}
            </SubmitBtn>
          </BtnWrapper>
        </TextWrapper>
      
        </AnswerWriteWrapper>
      </InputWrapper>
     
    </div>
  )
}
