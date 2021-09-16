import { useRouter } from "next/router";
import NavigationUI from "./Navigation.presenter";

export default function Navigation() {
  const router = useRouter()
  const onClickMenu = e => router.push(e.target.id)

  return <NavigationUI 
    onClickMenu={onClickMenu} />
}