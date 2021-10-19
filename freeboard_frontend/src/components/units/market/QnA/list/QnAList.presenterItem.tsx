import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import QnAWrite from "../write/QnAWrite.container"
import { FETCH_USEDITEM_QUESTIONS, DELETE_USEDITEM_QUESTION, DELETE_USEDITEM_QUESTION_ANSWER } from "../QnA.queries"
import {
  CommentsWrapper,
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
  Star
} from "./QnAList.styles"


export default function QnAListUIItem(props) {
  const router = useRouter()
  const [isEdit, setIsEdit] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  const [ deleteUseditemQuestion ] = useMutation(DELETE_USEDITEM_QUESTION)
  const [ deleteUseditemQuestionAnswer ] = useMutation(DELETE_USEDITEM_QUESTION_ANSWER)

  const onClickUpdateOpen = () => setIsEdit(true)
  const onToggleModal = () => setIsOpen(prev => !prev)

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
      onToggleModal()
    } catch(error) {
      alert(error.message)
    }
  }

  return (
    <>
       { !isEdit && (
      <CommentsWrapper key={props.data?._id}>
        <Profile alt="default profile" src="/images/avatar.png" />
        <ShowWrapper>
          <ShowText>{props.data?.contents}</ShowText>
          <ShowDate>{props.data?.createdAt.slice(0, 10)}</ShowDate>
        </ShowWrapper>
        <FixDelWrapper>
          <Fix alt="pencil image" src="/images/fix.png" onClick={onClickUpdateOpen} />
          <Delete alt="delete image" src="/images/ex.png" onClick={onClickDeleteQuestion} />
        </FixDelWrapper>
      </CommentsWrapper>
    ) }
    { isEdit && (
      <QnAWrite
        isEdit={isEdit}
        setIsEdit={setIsEdit}
        data={props.data}
       />
    ) }
    </>
  )
}