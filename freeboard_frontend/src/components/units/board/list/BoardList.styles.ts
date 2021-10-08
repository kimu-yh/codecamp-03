import { SearchOutlined } from '@ant-design/icons';
import styled from "@emotion/styled";
import { DatePicker, Space } from 'antd';

const { RangePicker } = DatePicker;
export const Challendar = styled(RangePicker)`
  width: 440px;
  height: 52px;
  margin-left: 42px;
  padding: 14px 19px;
  font-size: 14px;
  text-align: center;
`
export const SpaceTag = styled(Space)`
  direction: vertical;
  size: 12;
`

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
  align-content: center;
  padding: 20px 0 30px 0;
`;

export const Page = styled.span`
  margin: 20px auto;
  padding: 20px 10px 10px 10px;
  cursor: pointer;
  font-size: 15px;
`

export const Button = styled.button`
  margin-left: 300px;
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
`

export const SearchWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 7px;
  position: relative;
`

export const SearchTitle = styled.input`
  background-color: #F2F2F2;
  border-radius: 10px;
  width: 710px;
  height: 52px;
  font-size: 20px;
  border: none;
  padding: 14px 10px 14px 50px;
`
export const SearchIcon = styled(SearchOutlined)`
  position: absolute;
  left: 10px;
  font-size: 20px;
  margin-left: 20px;
`

interface Iprops {
  isMatched: boolean;
}

export const MyWord = styled.span`
  color: ${(props: Iprops) => props.isMatched ? 
  "red" : "black"}
`