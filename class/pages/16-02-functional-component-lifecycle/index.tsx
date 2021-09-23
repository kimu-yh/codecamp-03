import { useEffect, useState, useRef } from 'react'
import { useRouter } from 'next/router'

export default function FunctionalComponentLifecyclePage() {
  const router = useRouter()
  const inputRef = useRef<HTMLInputElement>()
  const [ count, setCount ] = useState(0)
  // const [state, setState] = useState({count: 0})

  // componentDidMount 와 동일
  useEffect(()=> {
    console.log("컴포넌트 마운트 완료")
    inputRef.current.focus();

    // componentWillUnmount 와 동일
    return () => {
      console.log("잘가요~~")
    }

  }, []) // dependency array 의존성배열. useEffect에 의존성 배열이 있으면 처음 한 번만 실행되는 didMouont가 됨. 그 다음부터는 의존성 배열에 의해서 재실행

  // componentDidUpdate 와 동일
  useEffect(()=> {
    console.log("컴포넌트 수정 완료") // 처음 한 번은 무조건 실행
  }, [count]) // 그 다음부터는 의존성 배열 안에 있는 값이 변경될 때마다 실행

  // setState와 useEffect
  useEffect(() => {
    setCount(prev => prev + 1)
  }, [])

  // setState와 useEffect의 dependency-array: 아래처럼 하면 무한으로 카운트가 증가함 (안눌러도)
  // useEffect(() => {
  //   setCount(prev => prev + 1)
  // }, [count]) 

  function onClickCount() {
    setCount(prev => prev + 1)
  }

  function onClickMove() {
    router.push('/')
  }

  return (
    <div> 
      현재카운트: {count}
      <button onClick={onClickCount}>count increase!!</button>
      <button onClick={onClickMove}>page move!!</button>
      <input type="text" ref={inputRef} />
    </div>
  )

}