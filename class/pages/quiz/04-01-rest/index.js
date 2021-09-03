import axios from "axios"

export default function QuizRestPage() {
  async function getRestAPI() {
    const result =  await axios.get('https://koreanjson.com/users')
    console.log(result)
    console.log(result.data)
  }

  return (
    <button onClick={getRestAPI}>REST API 요청!</button>
    
  )
  
}