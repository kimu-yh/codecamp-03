import { useRouter } from "next/dist/client/router"

export default function DynamicRoutedPage(params) {
  const router = useRouter()

  return (
    <>
      <div>This is Page No.{router.query.aaa}</div>
      <div>Dynamic Page Move Complete!!!</div>
    </>
  )
}