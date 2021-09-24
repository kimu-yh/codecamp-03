import { createConnection } from "typeorm";
import { ApolloServer, gql } from "apollo-server";

const typeDefs = gql`
  type Query {
    fetchBoard: String!
  }

  type Mutation {
    createBoard: Int
  }
`;

const resolvers = {
  Query: {
    fetchBoard: () => {
      // 데이터 베이스에서 해당하는 데이터 꺼내서 브러우저에 던져주기 (응답주기)
      return { writer: "", title: "" };
    },
  },
  Mutation: {
    createBoard: () => {
      // 데이터 베이스에 데이터 입력하기
      return { message: "성공했습니다", number: 3 };
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

createConnection({
  type: "postgres",
  database: "postgres",
  username: "postgres",
  password: "postgres2021",
  port: 5017,
  host: "34.64.221.225",
  entities: [__dirname + "/*.postgres.ts"],
  logging: true,
  synchronize: true,
}).then(() => {
  // 연결 성공시 실행
  console.log("접속 완료!!!");
  server.listen({ port: 4000 });
});
