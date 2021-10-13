import {gql, useQuery} from '@apollo/client'
import styled from '@emotion/styled'
import { useRouter } from "next/router"

const FETCH_BOARDS = gql`
  query fetchBoards{
    fetchBoards{
      _id
      writer
      title
    }
  }
`
const Span = styled.span`
  margin-right: 10px;
`


export default function BasketPage() {
  const router = useRouter()
  const { data } = useQuery(FETCH_BOARDS)

  const onClickBasket = (el) => (event) => {
    const baskets = JSON.parse(localStorage.getItem("baskets")) || []

    // ["철수", "영희", "훈이"].map(el => el + '어린이') // 철수어린이, 영희어린이, 훈이어린이

    // 이미 담았는지 체크 (중복 담기 방지)
    let isExist = false // 스위치 변수
    baskets.forEach((basketEl) => {
      if (el._id === basketEl._id) isExist = true
    })
    if (isExist) {
      alert('이미 장바구니에 담겨 있습니다!')
      return;
    }

    // 아폴로가 넣어주는 __typename값 제거
    const newEl = {...el}
    delete newEl.__typename;
    baskets.push(newEl)

    // console.log("담기:", el);
    localStorage.setItem("baskets", JSON.stringify(baskets))
  }
   
  function onClickLogin () {
    alert('로그인 성공!')
    const baskets = JSON.parse(localStorage.getItem("baskets")) || []
    if (baskets.length) {
      const result = confirm('장바구니에 담긴 상품이 있습니다. 장바구니로 이동할까요?')
      if (result) router.push('/27-03-basket-loggedIn')
    }
  }


  return (
    <>
    { data?.fetchBoards.map((el, index) => (
      <div key={el._id}>
        <Span>{index}</Span>
        <Span>{el.writer}</Span>
        <Span>{el.title}</Span>
        <button onClick={onClickBasket(el)}>장바구니 담기</button>
      </div>
    ))}
     <button onClick={onClickLogin}>로그인하기</button>
    </>
  )
}