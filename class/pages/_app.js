import Layout from "../src/component/commons/layout";
import "antd/dist/antd.css";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { Global } from "@emotion/react";
import { globalStyles } from "../src/commons/styles/globalStyles";
import { initializeApp } from "firebase/app";

export const firebaseApp = initializeApp({
  apiKey: "AIzaSyAPP0Kp1JEf5xGUWdALUsMrgnLYAijHjlo",
  authDomain: "universalcutie-28322.firebaseapp.com",
  projectId: "universalcutie-28322",
  storageBucket: "universalcutie-28322.appspot.com",
  messagingSenderId: "982580033179",
  appId: "1:982580033179:web:54e54d833ba6c686b9f83e",
  measurementId: "G-861BPW30NF",
});

function MyApp({ Component, pageProps }) {
  const client = new ApolloClient({
    uri: "http://backend03.codebootcamp.co.kr/graphql",
    cache: new InMemoryCache(),
  });

  return (
    <>
      <Global styles={globalStyles} />
      <ApolloProvider client={client}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ApolloProvider>
    </>
  );
}

export default MyApp;
