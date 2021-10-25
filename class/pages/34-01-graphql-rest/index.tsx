import axios from "axios"


export default function GraphqlRestPage() {

  const onClickRequest = async () => {
    // graphql은 mutation이든 fetch(query)든 항상 post 이다. post 가 데이터를 넣어서 보낼 수 있기 때문이다. 
   const result =  await axios.post("http://backend03.codebootcamp.co.kr/graphql", {
      query: `
        mutation createBoard { 
          createBoard(
            createBoardInput: {
              writer: "adele",
              password: "123",
              title: "I am the queen!", 
              contents: "yes i am the hero"
            }
          ) {
            _id
            writer
          }
        }`
    })
    console.log("오늘", result)
    
  }

  return (
    // JSX이다. html아 아니라 
    <div>
      <button onClick={onClickRequest}>click to requeste graphql by Axios</button>
    </div>  
  )
}