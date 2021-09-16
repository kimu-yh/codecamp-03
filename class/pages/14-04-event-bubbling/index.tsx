
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


const Row = styled.div`
  display: flex;
`

const Column = styled.div`
  margin: 20px;
`


export default function EventBubblingPage() {
  const { data } = useQuery(FETCH_BOARDS)
  
  const onClickRow = (e) => {
    alert("click!!");
    alert(e.currentTarget.id)
  }
  return (
    <>
      <h1>이벤트 버블링</h1>
      <div>{data?.fetchBoards.map(el => (
          <Row key={el._id} id={el._id} onClick={onClickRow}>
            <Column>{el.writer}</Column>
            <Column>{el.title}</Column>
            <Column>{el.createdAt}</Column>
          </Row>
      ))}
      </div>
    </>
  )
}