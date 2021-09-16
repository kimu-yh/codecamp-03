import styled from "@emotion/styled"
import { useRouter } from "next/router"
import LayoutHeader from "./header/LayoutHeader.container"
import LayoutFooter from "./footer/LayoutFooter.container"

const Wrapper = styled.div``
 
const Body = styled.div`

`
const SidebarWrapper = styled.div`
  display: flex;
`
const Sidebar = styled.div`
  width: 300px;
  background-color: yellow;
`

const HIDDEN_FOOTER = ["/13-01-layout-hidden"]

export default function Layout(props) {
  const router = useRouter();
  console.log(router)
  const isHiddenFooter = HIDDEN_FOOTER.includes(router.pathname)

   return (
    <Wrapper>
       {/* <Header>여기는 헤더 영역입니다</Header> */}
       <LayoutHeader />
       <SidebarWrapper>
          <Sidebar>여기는 사이드바영역입니다.</Sidebar>
          <Body>{props.children}</Body>
        </SidebarWrapper>
       {/* <Footer>여기는 푸터 영역입니다.</Footer> */}
       {!isHiddenFooter && <LayoutFooter />}
     </Wrapper>
   )
}