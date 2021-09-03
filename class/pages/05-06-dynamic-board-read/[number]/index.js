import { useRouter } from "next/dist/client/router"

export default function DynamicBoardReadPage() {
  const router = useRouter()
  
  return (
    <>
      <div>This is board detail page!!!</div>
      <div>board no: {router.query.number}</div>
      <div>board writer: </div>
      <div>board title: </div>
      <div>board contents: </div>
    </>
  )
}