import { useQuery, gql } from '@apollo/client'
import { useRouter } from 'next/router'
import BoardWrite from '../../../../src/components/units/board/write/BoardWrite.container'

export const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      writer
      title
      contents
      createdAt
      youtubeUrl
      boardAddress {
        zipcode
        address
        addressDetail
      }
    }
  }
`;

export default function BoardEditPage() {
  const router = useRouter();
  const { data } = useQuery(FETCH_BOARD, {
    variables: {
      boardId: String(router.query.boardId)
    }
  })
  
  return <BoardWrite isEdit={true} data={data}/>
}
