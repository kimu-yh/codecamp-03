import Head from 'next/head'
import { gql, request } from 'graphql-request'

export default function MarketPage(props) {

  return (
    <>
    <Head>
      <meta property="og:title" content={props.fetchUseditem.name} />
      <meta property="og:description" content={props.fetchUseditem.remarks} />
      <meta property="og:image" content={props.fetchUseditem.images[0]} />
    </Head>
    <div>마켓페이지 입니다</div>
    </>
  )
}

const FETCH_USEDITEM = gql`
  query fetchUseditem($useditemId: ID!) {
    fetchUseditem(useditemId: $useditemId) {
      name
      remarks
      images
    }
  }
`

// 이것은 next.js에 내장된 이름으로 우리가 변경할 수 없다.
export const getServerSideProps = async (context) => {
  // 1. graphql 여기서 데이터를 요청한다
  // 2. 요청받은 데이터를 페이지로 넘겨준다
  // 여기는 use로 시작하는 훅을 사용못함 서버환경이기 때문에.
  // 서버사이드 환경이라서 아폴로 클라이언트 사용 못함 =>graphql request 사용 
  // 두 개 한 번에 설치 yarn add graphql-request graphql
  // context를 사용함

  const result = await request("http://backend03.codebootcamp.co.kr/graphql", FETCH_USEDITEM, {
    useditemId: context.query.useditemId
  })
  

  return {
    props: {
      fetchUseditem: result.fetchUseditem, 

    }
  }
}