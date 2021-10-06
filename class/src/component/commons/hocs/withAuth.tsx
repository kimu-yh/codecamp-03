import { useRouter } from "next/router"
import { useContext, useEffect } from "react"
import { GlobalContext } from "../../../../_app"


export const withAuth = (Component) => (props) => {
  const router = useRouter()
  const { accessToken } = useContext(GlobalContext)
  

  useEffect(() => {
    if (!accessToken) {
      alert('로그인이 필요합니다')
      router.push("/23-01-login")
    }
  }, [])
  

  return <Component {...props} />
}