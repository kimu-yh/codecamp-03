export default function HofPage() {
  // function onClickName(event) {
  //   alert(`${event.target.id}번째 입니다`)
  // }

  const onClickName2 = (index) => () => {
    alert(`${index + 1}번째 입니다`)
  }
  return (
    <>
      <div>HOF 연습 페이지입니다</div>
      {['철수', '영희', '순희'].map((el, index) => (
        <div key={String(index)} onClick={onClickName2(index)}>{el}입니다</div>
      ))}
    </>
  )
}