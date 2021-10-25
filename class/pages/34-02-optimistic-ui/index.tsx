import { gql, useMutation, useQuery } from '@apollo/client'

const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      _id
      likeCount
    }
  }
`
const LIKE_BOARD = gql`
  mutation likeBoard($boardId: ID!) {
    likeBoard(boardId: $boardId)
  }
`

export default function OptimisticUIPage() {
  const [likeBoard] = useMutation(LIKE_BOARD)
  const {data} = useQuery(FETCH_BOARD, {
    variables: {
      boardId: "6170dfbfb55052002a93d148"
    }
  })

  const onClickLike = () => {
    likeBoard({
      variables: {
        boardId: "6170dfbfb55052002a93d148"}, 
        // 아래는 레페치 될 때까지 기다려야 함
        // refetchQueries: [{
        //   query: FETCH_BOARD,
        //   variables: {
        //     boardId: "6170dfbfb55052002a93d148"
        //   }
        // }]

        // 실제 응답이 아닌데, 요청이 성공했다 치고 낙관적으로 응답을 미리 받을래
        // 옵티미스틱 응답의 카운트를 먼저 가져와서 data.likeBoard 값을 보여주고 진짜 페치보드한 값이 도착하면 다시 덮어씌움
        optimisticResponse: {
          likeBoard: data?.fetchBoard.likeCount + 1, 
        }, 
        update(cache, {data}) {
          cache.writeQuery({
            query: FETCH_BOARD, 
            variables: {
              boardId: "6170dfbfb55052002a93d148"
            }, 
            data: {
              fetchBoard: {
                _id: "6170dfbfb55052002a93d148",
                __typename: "Board", 
                likeCount: data.likeBoard, 
              }
            }
        
          })
        }
    })
  }

  return(
    <div>
      <div>좋아요 갯수: {data?.fetchBoard.likeCount}</div>
      <button onClick={onClickLike}>좋아요 올리기!</button>
    </div>
  )
}