import {useState} from "react"

export default function SecurityNumber() {
  const [securityNum, setSecurityNum] = useState('000000');
  
  function onChangeNum() {
    let randomNum = String(Math.floor(Math.random()*1000000)).padStart(6, '0')
    setSecurityNum( randomNum );
  }

  return (
    <div>
      <div>{securityNum}</div>
      <button onClick={onChangeNum}>인증번호전송</button>
    </div>
  )
}