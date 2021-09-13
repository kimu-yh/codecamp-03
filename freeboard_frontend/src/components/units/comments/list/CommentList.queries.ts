import { gql } from "@apollo/client"

export const FETCH_BOARD_COMMENTS = gql`
query fetchBoardComments($boardId: ID!) {
  fetchBoardComments(boardId: $boardId) {
    _id
    writer
    contents
    rating
    createdAt
  }
}
`

export const DELETE_BOARD_COMMENTS = gql`
  mutation deleteBoardComment(
    $password: String
    $boardCommentId: ID!
    ) {
      deleteBoardComment(
        password: $password
        boardCommentId:$boardCommentId
      ) 
    }
`
