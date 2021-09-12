import { gql } from "@apollo/client";

export const FETCH_BOARD_COMMENTS = gql`
  query fetchBoardComments($boardId: ID!) {
    fetchBoardComments(boardId: $boardId) {
      _id
      writer
      contents
      rating
      createdAt
      updatedAt
    }
  }
}
`

export const CREATE_BOARD_COMMENT = gql`
  mutation createBoardComment($createBoardCommentInput: CreateBoardCommentInput!, $boardId: ID!){
    createBoardComment(createBoardCommentInput: $createBoardCommentInput,
    boardId: $boardId) {
      _id
      writer
      contents
      rating
      createdAt
      updatedAt
    }
  }
`

export const UPDATE_BOARD_COMMENT = gql`
  mutation updateBoardComment(
    $updateBoardCommentInput: UpdateBoardCommentInput!,
    $boardCommentId: ID!
  ) {
    updateBoardComment(
      updateBoardCommentInput: $updateBoardCommentInput,
      boardCommentId: $boardCommentId
      ) {
        _id
        writer
        contents
        rating
        createdAt
        updatedAt
      }
  }
`

export const DELETE_BOARD_COMMENTS = gql`
  mutation deleteBoardComment(
    $boardCommentId: ID!
    ) {
      deleteBoardComment(
        boardCommentId:$boardCommentId
        ) {
          ID
      }
    }
`
