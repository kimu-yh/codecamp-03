import { useState } from "react"

export default function StatePrevPage() {
  const [count, setCount] = useState(0)

  function onClickButton() {
    // setCount((prev) => prev + 1)
    setCount((qwerqwe) => {
      const aaa = 234;
      let bbb =  32;
      // 아무말 쓰기
      
      return qwerqwe + 1 // 얘도 함수니까 중괄호쓰고 return쓰고 그 앞에 로직 쓸 수 있음
    })
  }

  return (
    <>
    <div>{count}</div>
    <button onClick={onClickButton}>+1</button>
    </>
  )
}