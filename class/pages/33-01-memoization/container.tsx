import { useCallback, useMemo, useState } from "react";
import MemoizationPresenterPage from "./presenter"

export default function MemoizationContainerPage() {
  console.log("컨테이너가 렌더링되었습니다")
  let countLet = 0
  const [countState, setCountState] = useState(0)
  const randomValue = useMemo(() => Math.random(), []) 
  console.log(randomValue) // 값을 기억
  

  const onClickCountLet = useCallback(() => {
    console.log(countLet + 1)
    countLet += 1
  }, []) // useCallback은 가급적이면 dependency array 요소가 적을 때 사용. 함수를 기억

  const onClickCountState = useCallback(() => {
    console.log(countState + 1)
    setCountState(prev => prev + 1)
  }, [])

  return (
    <>
      <div>카운트(let): {countLet}</div>
      <button onClick={onClickCountLet}>카운트(let) +1</button>

      <div>카운트(state): {countState}</div>
      <button onClick={onClickCountState}>카운트(state) +1</button>

      <MemoizationPresenterPage
      countState={countState}/>
    </>
  )
}