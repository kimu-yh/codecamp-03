import { useMutation, useQuery } from '@apollo/client';
import { useRouter } from 'next/router';
import { useState } from 'react'
import QnAWriteUI from './QnAWrite.presenter'
import { CREATE_USEDITEM_QUESTION, 
  UPDATE_USEDITEM_QUESTION, 
  CREATE_USEDITEM_QUESTION_ANSWER,
  UPDATE_USEDITEM_QUESTION_ANSWER,
  FETCH_USEDITEM_QUESTIONS,
  FETCH_USEDITEM_QUESTION_ANSWERS
 } from '../QnA.queries'
import { Modal } from 'antd';


export default function QnAWrite(props) {  
  
  const [ contents, setContents ] = useState('')
  const router = useRouter();
  const [ createUseditemQuestion ] = useMutation(CREATE_USEDITEM_QUESTION)
  const [ updateUseditemQuestion ] = useMutation(UPDATE_USEDITEM_QUESTION)
  const [ createUseditemQuestionAnswer ] = useMutation(CREATE_USEDITEM_QUESTION_ANSWER)
  const [ updateUseditemQuestionAnswer ] = useMutation(UPDATE_USEDITEM_QUESTION_ANSWER)
  const { data: Adata } = useQuery(FETCH_USEDITEM_QUESTION_ANSWERS, {
    variables: {
      useditemQuestionId: props.data?._id
    }
  })
  
  const onChangeContents = e => {
    setContents(e.target.value);
    e.target.value.length >= 100 
    && Modal.error({content: "글자수는 100자 이내로 제한됩니다"})
  }

  async function onClickSubmitQuestion(e) {
    try {
      await createUseditemQuestion({
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
              useditemId: String(router.query.marketId) 
            }
          }
        ]
      })
      Modal.confirm({content: "질문을 등록합니다~!"})
      
    } catch(error) {
      Modal.error({content: error.message})
    }
  }
  
  async function onClickSubmitAnswer() {
    
    try {
      await createUseditemQuestionAnswer({
        variables: {
          useditemQuestionId: props.data._id,
          createUseditemQuestionAnswerInput: {
            contents,
          }
        }, 
        
        refetchQueries: [
          {
            query: FETCH_USEDITEM_QUESTION_ANSWERS,
            variables: { 
              useditemQuestionId: props.data._id,
            }
          }
        ]
      })
      Modal.confirm({content: "답변을 등록합니다~!"})
      props.setIsAnswer(false)
    } catch(error) {
      Modal.error({content: error.message})
    }
  }

  async function onClickUpdateQuestion(event) {
    
    if (!contents) {
      Modal.error({content: "내용이 수정되지 않았습니다."})
      return;
    }
    
    try { 
      await updateUseditemQuestion({
        variables: {
          useditemQuestionId: props.data._id,
          updateUseditemQuestionInput: {
            contents
          }
        },
        refetchQueries: [
          {
          query: FETCH_USEDITEM_QUESTIONS,
          variables:{ 
            useditemId: String(router.query.marketId) 
          }
          }
        ]
      })
     props.setIsEdit?.(false);
     Modal.confirm({content: "질문을 수정합니다~!"})
    } catch(error) {
     Modal.error({content: error.message})
    }
  }

  const onClickUpdateAnswer = async (event) => {
   
    if (!contents) {
      Modal.error({content: "내용이 수정되지 않았습니다."})
      return;
    }
    
    try { 
      await updateUseditemQuestionAnswer({
        variables: {
          useditemQuestionAnswerId: props.answerId, 
          updateUseditemQuestionAnswerInput: {
            contents
          }
        },
        refetchQueries: [
          {
          query: FETCH_USEDITEM_QUESTION_ANSWERS, 
          variables:{ 
            useditemQuestionId: props.data._id, 
          }
          }
        ]
      })
     props.setIsAnswer?.(false);
     props.setIsEdit?.(false)
     Modal.confirm({content: "답변을 수정합니다~!"})

    } catch(error) {
     Modal.error({content: error.message})
    }
  }

  return <QnAWriteUI 
    onChangeContents={onChangeContents}
    onClickSubmitQuestion={onClickSubmitQuestion}
    onClickUpdateQuestion={onClickUpdateQuestion}
    onClickSubmitAnswer={onClickSubmitAnswer}
    onClickUpdateAnswer={onClickUpdateAnswer}
    data={props.data}
    isEdit={props.isEdit}
    contents={contents}
    isAnswer={props.isAnswer}
    answerId={props.answerId}
    answerIndex={props.answerIndex}
    Adata={props.Adata}
    />
}