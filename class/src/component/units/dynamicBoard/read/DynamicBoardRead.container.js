import { useQuery } from "@apollo/client"
import { useRouter } from "next/dist/client/router"
import { FETCH_BOARD } from "./DynamicBoardRead.queries"
import DynamicBoardReadUI from "./DynamicBoardRead.presenter"

export default function DynamicBoardReadPage() {
  const router = useRouter()

  const { data } = useQuery(FETCH_BOARD, {
    variables: { number: Number(router.query.number) }
  });

  console.log(data)

  return (
    <DynamicBoardReadUI 
      router={router}
      data={ data }
    /> 
  )
}