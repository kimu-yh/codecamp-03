import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import QnAWrite from "../write/QnAWrite.container"
import { FETCH_USEDITEM_QUESTIONS, DELETE_USEDITEM_QUESTION, DELETE_USEDITEM_QUESTION_ANSWER,
FETCH_USEDITEM_QUESTION_ANSWERS
} from "../QnA.queries"
import {
  CommentsWrapper,
  Profile,
  ShowWrapper,
  ShowText,
  ShowDate,
  FixDelWrapper,
  Fix,
  Delete,
  Answer, 
  Arrow,
  AnswerWrapper, 
  AnswerWriteWrapper
} from "./QnAList.styles"


export default function QnAListUIItem(props) {
  const router = useRouter()
  const [isEdit, setIsEdit] = useState(false)
  const [isAnswer, setIsAnswer] = useState(false)

  const [ deleteUseditemQuestion ] = useMutation(DELETE_USEDITEM_QUESTION)
  const [ deleteUseditemQuestionAnswer ] = useMutation(DELETE_USEDITEM_QUESTION_ANSWER)

  const { data: Adata } = useQuery(FETCH_USEDITEM_QUESTION_ANSWERS, {
    variables: {useditemQuestionId: props?.id }
  })
  console.log(Adata)

  const onClickUpdateOpen = () => setIsEdit(true)

  const onClickAnswer = () => setIsAnswer(true)

  async function onClickDeleteQuestion() {
    try {
      await deleteUseditemQuestion ({
        variables: {
          useditemQuestionId: props.data?._id
        }, 
        refetchQueries: [
          {
            query: FETCH_USEDITEM_QUESTIONS,
            variables: { useditemId: router.query.marketId }
          }
        ]
      })
    } catch(error) {
      alert(error.message)
    }
  }

  async function onClickDeleteQuestionAnswer() {
    try {
      console.log("dd" , props.data?._id)
      await deleteUseditemQuestionAnswer ({
        variables: {
          useditemQuestionAnswerId: props.data?._id
        }, 
        refetchQueries: [
          {
            query: FETCH_USEDITEM_QUESTION_ANSWERS,
            variables: { useditemQuestionId: props.data?._id }
          }
        ]
      })
    } catch(error) {
      alert(error.message)
    }
  }

  console.log("aa",  props)

  return (
    <>
    { isEdit ?
    (
      <QnAWrite
      isEdit={isEdit}
      setIsEdit={setIsEdit}
      data={props.data}
       />
    ) 
    : (
      <>
      <CommentsWrapper key={props.Qdata?._id}>
        <Profile alt="default profile" 
        src={ props.data?.user.picture ? `https://storage.googleapis.com/${props.data?.user.picture}` :
          "/images/avatar.png"} />
        <ShowWrapper>
          <ShowText>{props.data?.contents}</ShowText>
          <ShowDate>{props.data?.createdAt.slice(0, 10)}</ShowDate>
        </ShowWrapper> 
        <FixDelWrapper>
          <Fix alt="pencil image" src="/images/fix.png" onClick={onClickUpdateOpen} />
          <Delete alt="delete image" src="/images/ex.png" onClick={onClickDeleteQuestion} />
          <Answer src="/images/answer.png" 
            onClick={onClickAnswer} />
        </FixDelWrapper>
      </CommentsWrapper>

      {isAnswer && (
          <QnAWrite 
            data={props?.data}
            isAnswer={isAnswer}
            setIsAnswer={setIsAnswer}
          />
      )}

      {Adata?.fetchUseditemQuestionAnswers?.map( el => 
        (  
        <CommentsWrapper key={el._id}>
        <Arrow src="/images/reArrow.png" />
        <AnswerWrapper>
          <Profile alt="default profile" 
          src={el.user.picture ? `https://storage.googleapis.com/${el.user.picture}` : "/images/avatar.png"} />
          <ShowText>{el?.contents}</ShowText>
          <ShowDate>{el?.createdAt.slice(0, 10)}</ShowDate>
        </AnswerWrapper>
        <FixDelWrapper>
          <Fix alt="pencil image" src="/images/fix.png" onClick={onClickUpdateOpen} />
          <Delete alt="delete image" src="/images/ex.png" onClick={onClickDeleteQuestionAnswer} />
          <Answer src="/images/answer.png" onClick={onClickAnswer} />
        </FixDelWrapper>
      </CommentsWrapper>
          
        )
      )}
      </>
    ) }
    </>
  )
}