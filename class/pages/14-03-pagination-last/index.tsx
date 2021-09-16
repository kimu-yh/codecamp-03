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
const FETCH_BOARDS_COUNT = gql`
  query fetchBoardsCount{
    fetchBoardsCount
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
  const { data: dataBoardsCount } = useQuery(FETCH_BOARDS_COUNT)
  const lastPage = Math.ceil(dataBoardsCount?.fetchBoardsCount / 10)

  const onClickPrevPage = () => {
    if (startPage === 1) return;
    setStartPage(prev => prev - 10)
  }
  const onClickNextPage = () => {
    if(startPage + 10 > lastPage) return;
    setStartPage(prev => prev + 10)
  } 

  return (
    <>
      <h1>페이지네이션(마지막페이지)</h1>
      <div>{data?.fetchBoards.map(el => (
          <div key={el._id}>제목: {el.title}</div>
      ))}
      </div>
      <br />
      <span onClick={onClickPrevPage}>이전</span>
      { new Array(10).fill(1).map((_, index) => (
        startPage + index <= lastPage && (
          <Page key={startPage + index} 
          onClick={onClickPage} 
          id={String(startPage + index)}
          > 
          {startPage + index}
          </Page>
        )))}
        <span onClick={onClickNextPage}>다음</span>
    </>
  )
}