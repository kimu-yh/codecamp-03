import { Line } from './DynamicBoardRead.styles'

export default function DynamicBoardReadUI(props) {

  return (
    <>
      {/* html에서의 주석처리 */}
      <div>This is board detail page!!!</div>
      <Line>board no: {props.router.query.number }</Line>
      <Line>board writer: {props.data?.fetchBoard?.writer}</Line>
      <Line>board title: {props.data?.fetchBoard?.title}</Line>
      <Line>board contents: {props.data?.fetchBoard?.contents}</Line>

      {/* <div>board writer: {data ? data.fetchBoard.writer: "loading..."} </div>
      <div>board title: {data ? data.fetchBoard.title: "loading..."}</div>
      <div>board contents: {data ? data.fetchBoard.contents: "loading..."}</div> */}
    </>
  )
}