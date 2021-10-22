import {ApolloClient, ApolloProvider, InMemoryCache, ApolloLink } from '@apollo/client'
import '../styles/globals.css'
import 'antd/dist/antd.css'
import Layout from '../src/components/layout'
import { Global } from '@emotion/react'
import { GlobalStyles } from '../src/commons/styles/globalStyles'
import { createUploadLink } from "apollo-upload-client"
import { useState, createContext, useEffect } from "react"
import { getAccessToken } from "../src/components/commons/libraries/getAccessToken";
import { onError } from "@apollo/client/link/error"

export const GlobalContext = createContext(null)

function MyApp({ Component, pageProps }) {
  const [accessToken, setAccessToken] = useState("")
  const [userInfo, setUserInfo] = useState({})

  const value = {
    accessToken,
    setAccessToken,
    userInfo, 
    setUserInfo
  }

  useEffect(() => {
    // refreshToken적용하면 아래 네 줄 필요 없음
    // const accessToken = localStorage.getItem("accessToken") || ""
    // const userInfo = localStorage.getItem("userInfo") || {}
    // setAccessToken(accessToken)
    // setUserInfo(userInfo)
    if (localStorage.getItem("refreshToken")) getAccessToken(setAccessToken)
  }, [])

  // 액세스토큰이 한시간마다 만료되도 그 오류가 UNAUTHENTICATED라면 리프레시 토큰을 조회해서 액세스토큰을 갱신하여 실패한 쿼리를 다시 실행해주는 코드
  const errorLink = onError(
    ({graphQLErrors, operation, forward}) => {
      if (graphQLErrors) {
        for (const err of graphQLErrors) {
          if (err.extensions?.code === "UNAUTHENTICATED") {
           
            operation.setContext({ // 실행하려다가 토큰만료로 실패한 쿼리
              headers: {
                ...operation.getContext().headers, // 기존의 헤더 정보를 가져옴
                authorization: `Bearer ${getAccessToken(setAccessToken)}`
              }
            })

            return forward(operation) // 다시해줄 작업 (아까 그 쿼리 다시 날리기)

          }
        }
      }
    }
  )

  const uploadLink = createUploadLink({
    uri: "https://backend03.codebootcamp.co.kr/graphql",
    headers: { authorization: `Bearer ${accessToken}`}, 
    credentials: "include", 
  })

  const client = new ApolloClient({
    link: ApolloLink.from([errorLink, uploadLink as unknown as ApolloLink]),
    cache: new InMemoryCache(),
  })

  return (
    <GlobalContext.Provider value={value}>
      <ApolloProvider client={client}>
        <Global styles={GlobalStyles} />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ApolloProvider>
    </GlobalContext.Provider>
  )
}

export default MyApp
