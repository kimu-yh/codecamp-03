import { useMutation, useQuery } from "@apollo/client"
import { PostPageUI } from "./Post.presenter"
import { DELETE_BOARD, FETCH_BOARDS } from "./Post.queries"

export default function PostPage() {
  const [deleteBoard] = useMutation(DELETE_BOARD)
  const {data} = useQuery(FETCH_BOARDS)

  async function onClickDelete(event) {
    await deleteBoard({
      variables: { number: event.target.id },
      refetchQueries: [{ query:FETCH_BOARDS }]
    })
  }

  return (
    <div>
      <PostPageUI 
       data={data}
       onClickDelete={onClickDelete}
      />
    </div>
  )
}