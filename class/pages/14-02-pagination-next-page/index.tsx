import { useQuery, gql } from "@apollo/client"
import { useState } from 'react'
import styled from "@emotion/styled"

const FETCH_BOARDS = gql`
query fetchBoards($page: Int) {
  fetchBoards(page: $page){
   _id
    writer
    title
    createdAt
  }
}
`

const Page = styled.span`
  margin: 10px;
  cursor: pointer;
`

export default function PaginationNextPage() {
  const [startPage, setStartPage] = useState(1);
  const { data, refetch } = useQuery(FETCH_BOARDS, {
    variables: { page: startPage }
  })
  const onClickPage = (event) => {
    refetch({ page: Number(event.target.id) })
  }
 
  const onClickPrevPage = () => setStartPage(prev => prev - 10)
  const onClickNextPage = () => setStartPage(prev => prev + 10)

  return (
    <>
      <h1>페이지네이션(다음페이지)</h1>
      <div>{data?.fetchBoards.map(el => (
          <div key={el._id}>제목: {el.title}</div>
      ))}
      </div>
      <br />
      <span onClick={onClickPrevPage}>이전</span>
      { new Array(10).fill(1).map((_, index) => 
        <Page 
        key={startPage + index} 
        onClick={onClickPage} 
        id={String(startPage + index)}>
        {startPage + index}
        </Page>
      )
      }
       {/* { [1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map(el, index => 
        <Page key={startPage + index} onClick={onClickPage} id={String(startPage + index)}>
          {startPage + index}</Page>
        )} */}
        <span onClick={onClickNextPage}>다음</span>
    </>
  )
}