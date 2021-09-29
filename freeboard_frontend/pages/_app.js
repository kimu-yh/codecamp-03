import {ApolloClient, ApolloProvider, InMemoryCache, ApolloLink } from '@apollo/client'
import '../styles/globals.css'
import 'antd/dist/antd.css'
import Layout from '../src/components/layout'
import { Global } from '@emotion/react'
import { GlobalStyles } from '../src/commons/styles/globalStyles'
import { createUploadLink } from "apollo-upload-client"

function MyApp({ Component, pageProps }) {
  const uploadLink = createUploadLink({
    uri: "http://backend03.codebootcamp.co.kr/graphql"
  })

  const client = new ApolloClient({
    link: ApolloLink.from([uploadLink]),
    cache: new InMemoryCache()
  })

  return (
    <ApolloProvider client={client}>
      <Global styles={GlobalStyles} />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
  )
}

export default MyApp
