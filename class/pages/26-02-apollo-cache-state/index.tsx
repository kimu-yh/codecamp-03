import { gql, useMutation, useQuery } from '@apollo/client'

const FETCH_BOARDS = gql`
  query fetchBoards {
    fetchBoards {
      _id
      writer
      title
      contents
    }
  }
`
const DELETE_BOARD = gql`
  mutation deleteBoard($boardId: ID!) {
    deleteBoard(boardId: $boardId) 
  }
`
const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
      writer
      title
      contents
    }
  }

`
export default function ApolloCacheStatePage() {
  const { data } = useQuery(FETCH_BOARDS) 
  const [deleteBoard] = useMutation(DELETE_BOARD)
  const [createBoard] = useMutation(CREATE_BOARD)

  const onClickDelete = (boardId) => async () => {
    // boardId
    await deleteBoard({
      variables: {
        boardId: boardId
      }, 
      update(cache, { data } ) { // 요청하고 난 응답의 결과가 data로 들어옴 (이 경우는 id)
        
        const deletedId = data.deleteBoard  // 만약 위에서 result 로 받았으면 result.data.deleteBoard 로 받아야 함. 
          // id값은 객체가 아니라서 .id로 받지 않아도 즉 꺼내지 않아도 바로 쓸 수 있음
        cache.modify({
          fields: { // 기존의 api 요청한 것들
            fetchBoards: (prev, {readField}) => {
              // 1. 기존의 fetchBoards 10개에서 지금 삭제된 id를 제외한 9개를 만들고
              // 2. 9개의 새로운 fetchBoards를 return해서 덮어씌우기
              const newFetchBoards = prev.filter(
                el => readField("_id", el) !== deletedId
              )

              return [...newFetchBoards]
            },
          },
        })
      },
    })
  }

  const onClickCreate = () => {
    createBoard({
      variables: {
        createBoardInput: {
          writer: "영희",
          password: "1234",
          title: "영희왔따",
          contents: "도우너 어서 오고",
        },
      },
      update(cache, {data}) {
        cache.modify({
          fields: {
            fetchBoards: (prev) => { // prev: 이전 것 10개
              // 추가된 createBoard 결과물과 이전의 10개를 합쳐서 11개를 돌려주기
              return [data.createBoard, ...prev] // 총 11개. 새로운 게시물이 위로 보여주기.
            }
          }
        })
      }
    })
  }
  return (
  <>
    {data?.fetchBoards.map((el) => (
      <div key={el._id}>
        <span>{el.writer}</span>
        <span>{el.title}</span>
        <span>{el.contents}</span>
        <button onClick={onClickDelete(el._id)}>delete!!</button>
      </div>
    ))}
    <button onClick={onClickCreate}>등록하기</button>
  </>
  )


}