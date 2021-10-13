import { useEffect, useState } from "react"
import styled from "@emotion/styled"


const Span = styled.span`
  margin-right: 10px;
`
// 로그인된 유저만 올 수 있는 페이지
export default function BasketLoggedInPage() {

  const [basketItems, setBasketItems] = useState([])

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("baskets")) || []
    setBasketItems(items)
  }, [])

  
  return (
    <>
      <div>비회원으로 담은 장바구니</div>
      {basketItems.map((el, index)=> (
        <div key={el._id}>
          <Span>{index}</Span>
          <Span>{el.writer}</Span>
          <Span>{el.title}</Span>
        </div>

      ))}
     
    </>
  )
}