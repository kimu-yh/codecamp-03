import { useMutation, useQuery } from '@apollo/client';
import { useRouter } from 'next/router';
import { useState } from 'react'
import CommentsUI from './Comments.presenter'
import { 
  FETCH_BOARD_COMMENTS, 
  CREATE_BOARD_COMMENT,
  UPDATE_BOARD_COMMENT,
  DELETE_BOARD_COMMENTS
 } from './Comments.queries'


export default function Comments() {
  const [ writer, setWriter ] = useState('')
  const [ pw, setPw ] = useState('')
  const [ text, setText ] = useState('')
  const [ star, setStar ] = useState('')
  const [ boardCommentId, setBoardCommentId ] = useState('')
  const router = useRouter();
  const [ createBoardComment ] = useMutation(CREATE_BOARD_COMMENT)
  const [ upcateBoardComment ] = useMutation(UPDATE_BOARD_COMMENT)
  const [ deletedBoardComment ] = useMutation(DELETE_BOARD_COMMENTS)

  console.log("router.asPath:" , router.asPath.slice(8))
  const { data } = useQuery(FETCH_BOARD_COMMENTS, {
    variables: { boardId: router.asPath.slice(8) } 
  })

  const onChangeWriter = e => setWriter(e.target.value)
  const onChangePw = e => setPw(e.target.value)
  const onChangeText = e => {
    setText(e.target.value);
    e.target.value.length > 100 
    && alert("글자수는 100자 이내로 제한됩니다")
  }
  const onChangeStar = e => setStar(e.target.value)


  async function onClickSubmitComment() {
    try {
      const result = await createBoardComment({
        variables: {
          boardId: router.asPath.slice(8),
          createBoardCommentInput: {
            writer: writer,
            password: pw, 
            contents: text,
            rating: star
          }
        }
      })
      setBoardCommentId(result.data.createBoardComment._id)
    } catch(error) {
      alert(error.message)
      
    }
  }

  async function onClickUpdateComment() {
    try { 
      const result = await upcateBoardComment({
        variables: {
          boardCommentId: boardCommentId,
          updateBoardCommentInput: {
            contents: text
            // rating: 
          }
        }
      })

    } catch(error) {
      console.log(error.message)
    }
  }

  function onClickDeleteComment() {
    
  }


  return <CommentsUI 
    onChangeWriter={onChangeWriter}
    onChangePw={onChangePw}
    onChangeText={onChangeText}
    onChangeStar={onChangeStar}
    // onClickSubmitComment={onClickSubmitComment}
    onClickUpdateComment={onClickUpdateComment}
    onClickDeleteComment={onClickDeleteComment}
    writer={writer}
    pw={pw}
    text={text}
    star={star}
    />
}