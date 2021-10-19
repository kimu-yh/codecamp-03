import Layout from "../src/component/commons/layout";
import "antd/dist/antd.css";
import { ApolloClient, ApolloProvider, InMemoryCache, ApolloLink } from "@apollo/client";
import { Global } from "@emotion/react";
import { globalStyles } from "../src/commons/styles/globalStyles";
import { initializeApp } from "firebase/app";
import { createUploadLink } from "apollo-upload-client"
import { useState, createContext, useEffect } from "react";
import { onError } from "@apollo/client/link/error"
import { getAccessToken } from "../src/commons/libraries/getAccessToken";


export const firebaseApp = initializeApp({
  apiKey: "AIzaSyAPP0Kp1JEf5xGUWdALUsMrgnLYAijHjlo",
  authDomain: "universalcutie-28322.firebaseapp.com",
  projectId: "universalcutie-28322",
  storageBucket: "universalcutie-28322.appspot.com",
  messagingSenderId: "982580033179",
  appId: "1:982580033179:web:54e54d833ba6c686b9f83e",
  measurementId: "G-861BPW30NF",
});

export const GlobalContext = createContext(null)

function MyApp({ Component, pageProps }) {
  const [accessToken, setAccessToken] = useState("")
  const [userInfo, setUserInfo] = useState({})

  const value = {
    accessToken: accessToken, 
    setAccessToken: setAccessToken,
    userInfo: userInfo, 
    setUserInfo: setUserInfo
  }

  useEffect(()=> {
    // const accessToken = localStorage.getItem("accessToken") || ""
    // setAccessToken(accessToken)
    if (localStorage.getItem("refreshToken")) getAccessToken(setAccessToken)
  }, [])

  



  // operation에 방금 실패했던 쿼리 정보가 있음
  const errorLink = onError(
    ({graphQLErrors, operation, forward}) => {
      if (graphQLErrors) {
        for (const err of graphQLErrors) {
          if (err.extensions?.code === "UNAUTHENTICATED") {
           
            operation.setContext({
              headers: {
                ...operation.getContext().headers, // 기존의 헤더 정보를 가져옴
                authorization: `Bearer ${getAccessToken(setAccessToken)}`
              }
            })

            return forward(operation)

          }
        }
      }
    }
  )

  const uploadLink = createUploadLink({
    uri: "https://backend03.codebootcamp.co.kr/graphql",
    headers: { authorization: `Bearer ${accessToken}` }, 
    credentials: "include", 
  })

  const client = new ApolloClient({
    link: ApolloLink.from([errorLink, uploadLink]),
    cache: new InMemoryCache(),
  });

  return (
    <>
      <GlobalContext.Provider value={value}>
        <Global styles={globalStyles} />
        <ApolloProvider client={client}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ApolloProvider>
      </GlobalContext.Provider>
    </>
  );
}

export default MyApp;
