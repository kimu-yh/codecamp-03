import { gql } from "@apollo/client"

export const FETCH_BOARD = gql`
#graphql에서의 주석처리
  query fetchBoard($number: Int) {
    fetchBoard(number: $number) {
      writer
      title
      contents
    }
  }
`