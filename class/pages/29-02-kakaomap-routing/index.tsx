import { useRouter } from "next/router"



export default function KakaomapRoutingPage() {
  const router = useRouter()

  function onClickKakaomap() {
    router.push('/29-03-kakaomap-routed')
  }

  return (
    <button onClick={onClickKakaomap}>카카오맵 페이지로 이동하기!</button>

  )
}