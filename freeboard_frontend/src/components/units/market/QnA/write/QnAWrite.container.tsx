import { useMutation, useQuery } from '@apollo/client';
import { useRouter } from 'next/router';
import { useState } from 'react'
import QnAWriteUI from './QnAWrite.presenter'
import { CREATE_USEDITEM_QUESTION, UPDATE_USEDITEM_QUESTION, FETCH_USEDITEM_QUESTIONS, FETCH_USEDITEM_QUESTION_ANSWERS } from '../QnA.queries'


export default function QnAWrite(props) {
  const [ contents, setContents ] = useState('')
  
  const router = useRouter();
  const [ createUseditemQuestion ] = useMutation(CREATE_USEDITEM_QUESTION)
  const [ updateUseditemQuestion ] = useMutation(UPDATE_USEDITEM_QUESTION)
  const { data } = useQuery(FETCH_USEDITEM_QUESTIONS)

  
  const onChangeContents = e => {
    setContents(e.target.value);
    e.target.value.length >= 100 
    && alert("글자수는 100자 이내로 제한됩니다")
  }

  async function onClickSubmitQuestion() {
    try {
      const result = await createUseditemQuestion({
        variables: {
          useditemId: String(router.query.marketId),
          createUseditemQuestionInput: {
            contents,
          }
        }, 
        refetchQueries: [
          {
            query: FETCH_USEDITEM_QUESTIONS,
            variables: { 
              page: Math.ceil(data?.fetchUseditemQuestions.length / 10) + 1, 
              useditemId: String(router.query.marketId) 
            }
          }
        ]
      })
      console.log("gohome", result.data?.createUseditemQuestion._id)
    } catch(error) {
      alert(error.message)
    }
  }

  async function onClickUpdateQuestion(event) {
    if (!contents) {
      alert("내용이 수정되지 않았습니다.");
      return;
    }
    
    try { 
      await updateUseditemQuestion({
        variables: {
          useditemQuestionId: event.target.id,
          updateUseditemQuestionInput: {
            contents
          }
        },
        refetchQueries: [
          {
          query: FETCH_USEDITEM_QUESTIONS,
          variables:{ 
            page: Math.ceil(data?.fetchUseditemQuestions.length / 10) + 1, 
            useditemId: String(router.query.marketId) 
          }
          }
        ]
      })
     props.setIsEdit?.(false);

    } catch(error) {
      alert(error.message)
    }
  }

  return <QnAWriteUI 
    onChangeContents={onChangeContents}
    onClickSubmitQuestion={onClickSubmitQuestion}
    onClickUpdateQuestion={onClickUpdateQuestion}
    data={props.data}
    isEdit={props.isEdit}
    contents={contents}
    />
}