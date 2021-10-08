import {ApolloClient, ApolloProvider, InMemoryCache, ApolloLink } from '@apollo/client'
import '../styles/globals.css'
import 'antd/dist/antd.css'
import Layout from '../src/components/layout'
import { Global } from '@emotion/react'
import { GlobalStyles } from '../src/commons/styles/globalStyles'
import { createUploadLink } from "apollo-upload-client"
import { useState, createContext, useEffect } from "react"

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
    const accessToken = localStorage.getItem("accessToken") || ""
    setAccessToken(accessToken)
  }, [])

  const uploadLink = createUploadLink({
    uri: "http://backend03.codebootcamp.co.kr/graphql",
    headers: { authorization: `Bearer ${accessToken}`}
  })

  const client = new ApolloClient({
    link: ApolloLink.from([uploadLink as unknown as ApolloLink]),
    cache: new InMemoryCache()
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
