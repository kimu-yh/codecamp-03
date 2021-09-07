import { gql } from "@apollo/client";

export const FETCH_BOARDS = gql`
  query{
    fetchBoards{
      _id
      writer
      title
      contents
      likeCount
      images
      createdAt
    }
  }
`

export const DELETE_BOARD = gql`
  mutation deleteBoard($boardId: ID!){
    deleteBoard(boardId: $boardId){
      message
    }
  }
`