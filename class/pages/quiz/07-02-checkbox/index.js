import styled from "@emotion/styled"

const Table = styled.div`
  width: 960px;
  border: 1px solid gray;
  margin: 100px auto;
  padding: 10px 20px;
`

const Row = styled.div`
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid black;
`
const Column = styled.div`
  width: 20%;
`
export default function CheckBoxListPage() {
  let List = [
    { number: "번호", title: "제목", createdAt:"작성일"},
    { number: 1, title: "9월달 시스템 점검 안내입니다", createdAt: "2020.09.19"}, 
    { number: 2, title: "안녕하세요! 공지사항 전달드립니다", createdAt: "2020.09.17"},
    { number: 3, title: "개인정보 처리방침 변경 사전 안내", createdAt: "2020.09.12"},
    { number: 4, title: "iOS 10.0 이하 지원 중단 안내", createdAt: "2020.08.10"},
    { number: 5, title: "이용약관 변경 안내", createdAt: "2020.08.01"},
    { number: 6, title: "개인정보 처리방침 변경 사전 안내", createdAt: "2020.07.19"},
  ]

  let Lists = List;

  const onClickDelete = (event) => {
    Lists = List.map((el) => (el.number !== event.target.number))
  }

  const onClickCheck = (event) => {
    if (event.target.number === "번호") {
      input.checked === "checked"
    } else {
      
    }
  }

  return (
    <Table>
      {Lists.map(el => (
        <Row key={el.number}>
          <Column><input type="checkbox" onClick={onClickCheck} /></Column>
          <Column>{el.title}</Column>
          <Column>{el.createdAt}</Column>
        </Row>
      ))}
      <button onClick={onClickDelete}>선택 삭제</button>
    </Table>
  )
}