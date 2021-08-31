import { useState } from "react"

export default function CounterStatePage() {
  const [count, setCount] = useState(0)

  function aaa() {
    setCount(count + 1)
  }

  return (
    <>
      <div>{count}</div>
      <div>{count}</div>
      <div>{count}</div>
      <button onClick={aaa}>increase count</button>
    </>
  )
}