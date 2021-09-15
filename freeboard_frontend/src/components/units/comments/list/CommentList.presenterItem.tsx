import { useRouter } from "next/router";
import { useState } from "react";
import { useMutation } from "@apollo/client";
import CommentWrite from "../write/CommentWrite.container"
import { FETCH_BOARD_COMMENTS, DELETE_BOARD_COMMENTS } from "./CommentList.queries";
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
} from "./CommentList.styles"

export default function CommentListUIItem(props) {
  const router = useRouter()
  const [isEdit, setIsEdit] = useState(false)
  const [ deletedBoardComment ] = useMutation(DELETE_BOARD_COMMENTS)
  const onClickUpdateOpen = () => setIsEdit(true)

  async function onClickDeleteComment() {
    const myPw = prompt("비밀번호를 입력해주세요.");
    try {
      await deletedBoardComment({
        variables: {
          password: myPw,
          boardCommentId: props.data?._id
        }, 
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: { boardId: router.query.boardId }
          }
        ]
      })
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
          <InfoShowWrapper>
            <ShowWriter>{props.data?.writer}</ShowWriter>
            <ShowStar><Star onChange={props.onChangeStar} value={props.data.rating} /></ShowStar>
          </InfoShowWrapper>
          <ShowText>{props.data?.contents}</ShowText>
          <ShowDate>{props.data?.createdAt.slice(0, 10)}</ShowDate>
        </ShowWrapper>
        <FixDelWrapper>
          <Fix alt="pencil image" src="/images/fix.png" onClick={onClickUpdateOpen} />
          <Delete alt="delete image" src="/images/ex.png" onClick={onClickDeleteComment} />
        </FixDelWrapper>
      </CommentsWrapper>
    ) }
    { isEdit && (
      <CommentWrite
        isEdit={isEdit}
        setIsEdit={setIsEdit}
        data={props.data}
       />
    ) }
    </>
  )
}