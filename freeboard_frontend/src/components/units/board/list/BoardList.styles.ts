import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 1200px;
  margin: 100px;
`;

export const TableTop = styled.div`
  border-top: 2px solid gray;
  margin-top: 20px;
`;

export const TableBottom = styled.div`
  border-bottom: 2px solid gray;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  height: 52px;
  line-height: 52px;
  border-bottom: 1px solid gray;

  :hover {
    color: blue;
  }
`;

export const ColumnHeaderBasic = styled.div`
  width: 10%;
  text-align: center;
`;

export const ColumnHeaderTitle = styled.div`
  width: 70%;
  text-align: center;
`;

export const ColumnBasic = styled.div`
  width: 10%;
  text-align: center;
`;

export const ColumnTitle = styled.div`
  width: 70%;
  text-align: center;
  cursor: pointer;

  :hover {
    color: blue;
  }
`;


export const Footer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding-top: 50px;  
`;

export const Page = styled.span`
  margin: 10px auto;
  padding: 10px;
  cursor: pointer;
  font-size: 15px;
`

export const Button = styled.button`
  margin-left: 200px;
  margin-bottom: 50px;
  width: 171px;
  height: 52px;
  border-radius: 15px;
  border: none;
  cursor: pointer;
  background-color: #9ea395;
  color:#fffff8;
  :hover {
    background-color: #4f4f4f;
    color: #cfd4c5;
    font-size: 16px;
  }
`;
