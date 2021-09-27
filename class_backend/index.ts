import { createConnection } from "typeorm";
import { ApolloServer, gql } from "apollo-server";
import Board from "./Board.postgres";
import Product from "./Product.postgres"

// 이름은 리턴이 아니어도 무방하고 createBoard가 리턴해줄 타입을 만들어 주는 것임
const typeDefs = gql`
  input CreateBoardInput {
    writer: String
    title: String
    age: Int
  }

  input UpdateBoardInput {
    number: Int!
    writer: String
    title: String
    age: Int
  }

  input CreateProductInput {
    seller: String
    name: String
    detail: String
    price: Int
  }

  input UpdateProductInput {
    number: Int!
    seller: String
    name: String
    detail: String
    price: Int
  }

  type Return {
    message: String
    number: Int
  }

  type Board {
    writer: String
    title: String
    age: Int
    number: Int
  }

  type Product {
    seller: String
    detail: String
    name: String
    price: Int
    number: Int
  }

  type Query {
    fetchBoard(number: Int): Board
    fetchBoards: [Board]
    fetchProduct(number: Int): Product
    fetchProducts: [Product]
  }

  type Mutation {
    # 주석입니다 createBoard(writer: String, title: String, age: Int): Return
    createBoard(createBoardInput: CreateBoardInput!): Return
    updateBoard(upcateBoardInput: UpdateBoardInput!): Return
    deleteBoard: Return

    createProduct(createProductInput: CreateProductInput!): Return
    updateProduct(updateProductInput: UpdateProductInput!): Return
    deleteProduct(number: Int!): Return
  }
`;

const resolvers = {
  Query: {
    fetchBoard: async (_: any, args: any) => {
      // 데이터 베이스에서 해당하는 데이터 꺼내서 브러우저에 던져주기 (응답주기)
      const result = await Board.findOne({
        where: { number: args.number, deletedAt: null },
      });
      return result;
    },

    fetchBoards: async () => {
      const result = await Board.find({ 
        where: { deletedAt: null } 
      }); // [{...}, {...}]
      return result;
    },

    fetchProduct: async (_: any, args: any) => {
      const result = await Product.findOne({
        where: { number: args.number, deletedAt: null}
      })
      return result;
    },

    fetchProducts: async () => {
      const result = await Product.find({
        where: { deletedAt: null}
      })
      return result;
    }
  },
  Mutation: {
    createBoard: async (_: any, args: any) => {
      // 데이터 베이스에 데이터 입력하기
      // const result = await Board.insert({
      //   title: args.title,
      //   writer: args.writer,
      //   age: args.age,
      // });
      const result = await Board.insert({
        ...args.createBoardInput,
        // title: args.createBoardInput.title,
        // writer: args.createBoardInput.writer,
        // age: args.createBoardInput.age,
      });
      console.log(result);
      return { message: "성공했습니다", number: result.identifiers[0].number };
    },

    updateBoard: async (_: any, args: any) => {
      await Board.update({ number: 3 }, { writer: "영희" }); // 조건, 변경할 값
      return { message: "수정 완료!!" };
    },

    // 중요한 데이터를 이런 식으로 삭제하지는 않는다
    // deletedAt이라는 컬럼 추가해서 날짜와 시간이 추가되었으면 그 시간에 삭제되었다는 의미
    deleteBoard: async () => {
      // await Board.delete({ number: 4 });

      await Board.update({ number: 5 }, { deletedAt: new Date() });
      return { message: "삭제 완료!" };
    },

    createProduct: async (_: any, args: any) =>  {
      await Product.insert({
        ...args.createProductInput
      })
      return { message: "상품 등록 완료!!" }
    },

    updateProduct: async (_: any, args: any) => {
      await Product.update({ number: args.updateProductInput.number }, {...args.updateProductInput}); // 조건, 변경할 값
      return { message: "상품 수정 완료!!" };
    },

    deleteProduct: async (_: any, args: any) => {
      await Product.update({ number: args.number }, { deletedAt: new Date() });
      return { message: "상품 삭제 완료!" };
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
