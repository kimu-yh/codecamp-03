import { useRouter } from "next/dist/client/router"

export default function DynamicRoutingPage() {
  const router = useRouter()
  const onClickMove1 = () => router.push('/05-04-dynamic-routed/1')
  const onClickMove2 = () => router.push('/05-04-dynamic-routed/2')
  const onClickMove3 = () => router.push('/05-04-dynamic-routed/3')


  return (
    <>
      <button onClick={onClickMove1}>move to board 01</button>
      <button onClick={onClickMove2}>move to board 02</button>
      <button onClick={onClickMove3}>move to board 03</button>
    </>
  )
}