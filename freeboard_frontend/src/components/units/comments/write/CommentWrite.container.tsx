import { useMutation } from '@apollo/client';
import { useRouter } from 'next/router';
import { useState } from 'react'
import CommentWriteUI from './CommentWrite.presenter'
import { FETCH_BOARD_COMMENTS, CREATE_BOARD_COMMENT, UPDATE_BOARD_COMMENT,  } from './CommentWrite.queries'


export default function CommentWrite(props) {
  const [ writer, setWriter ] = useState('')
  const [ pw, setPw ] = useState('')
  const [ text, setText ] = useState('')
  const [ star, setStar ] = useState(3)
  
  const router = useRouter();
  const [ createBoardComment ] = useMutation(CREATE_BOARD_COMMENT)
  const [ updateBoardComment ] = useMutation(UPDATE_BOARD_COMMENT)

  const onChangeWriter = e => setWriter(e.target.value)
  const onChangePw = e => setPw(e.target.value)
  const onChangeText = e => {
    setText(e.target.value);
    e.target.value.length > 100 
    && alert("글자수는 100자 이내로 제한됩니다")
  }
  const onChangeStar = value => setStar(value)

  async function onClickSubmitComment() {
    try {
      await createBoardComment({
        variables: {
          boardId: String(router.query.boardId),
          createBoardCommentInput: {
            writer: writer,
            password: pw, 
            contents: text,
            rating: star
          }
        }, 
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: { boardId: String(router.query.boardId) }
          }
        ]
      })
      
    } catch(error) {
      alert(error.message)
      
    }
  }

  async function onClickUpdateComment(event) {
    if (!text) {
      alert("내용이 수정되지 않았습니다.");
      return;
    }
    if (!pw) {
      alert("비밀번호가 입력되지 않았습니다.")
    }
    
    try { 
      await updateBoardComment({
        variables: {
          boardCommentId: event.target.id,
          password: pw,
          updateBoardCommentInput: {
            contents: text,
            rating: star
          }
        },
        refetchQueries: [
          {
          query: FETCH_BOARD_COMMENTS,
          variables: { boardId: router.query.boardId }
          }
        ]
      })
     props.setIsEdit?.(false);
    } catch(error) {
      alert(error.message)
    }
  }

  return <CommentWriteUI 
    onChangeWriter={onChangeWriter}
    onChangePw={onChangePw}
    onChangeText={onChangeText}
    onChangeStar={onChangeStar}
    onClickSubmitComment={onClickSubmitComment}
    onClickUpdateComment={onClickUpdateComment}
    data={props.data}
    isEdit={props.isEdit}
    text={text}
    star={star}
    />
}