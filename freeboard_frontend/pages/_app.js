import {ApolloClient, ApolloProvider, InMemoryCache} from '@apollo/client'
import '../styles/globals.css'
import 'antd/dist/antd.css'
import Layout from '../src/components/layout'

function MyApp({ Component, pageProps }) {
  const client = new ApolloClient({
    uri: "http://backend03.codebootcamp.co.kr/graphql",
    cache: new InMemoryCache()
  })

  return (
    <ApolloProvider client={client}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
  )
}

export default MyApp
