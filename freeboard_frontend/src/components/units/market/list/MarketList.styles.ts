import styled from "@emotion/styled";
import { SearchOutlined } from '@ant-design/icons';
import { DatePicker, Space } from 'antd';

const { RangePicker } = DatePicker;
interface Iprops {
  isMatched: boolean;
}

export const S = {
  Challendar: styled(RangePicker)`
  width: 440px;
  height: 52px;
  margin-left: 42px;
  padding: 14px 19px;
  font-size: 14px;
  text-align: center;
  `,
  SpaceTag: styled(Space)`
  direction: vertical;
  size: 12;
  `,
  Container: styled.div`
    margin: auto;
    width: 1200px;
  `,
  SearchIcon: styled(SearchOutlined)`
  position: absolute;
  left: 10px;
  font-size: 20px;
  margin-left: 20px;
  `,
  SearchTitle: styled.input`
  background-color: #F2F2F2;
  border-radius: 10px;
  width: 710px;
  height: 52px;
  font-size: 20px;
  border: none;
  padding: 14px 10px 14px 50px;
  `,
  MyWord: styled.span`
   color: ${(props: Iprops) => props.isMatched ? 
   "blue" : "black"}
  `,
  SearchWrapper: styled.div`
  margin: 10px 0px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 7px;
  position: relative;
  `,
  BestWrapper: styled.div`
    display: flex;
    flex-direction: row;
  `,
  Title: styled.div`
    margin: 40px;
    text-align: center;
    height: 42px;
    font-size: 36px;
    font-weight: 700;
  `,
  NavBar: styled.div`
    margin-top: 80px;
    height: 50px;
  `,
  Onsale: styled.span`
    width: 100px;
    height: 40px;
    font-size: 18px;
    margin-left: 20px;
    margin-right: 20px;
    :hover {
      font-weight: 700;
      font-size: 20px;
    }
    cursor: pointer;
  `,
  OnPage: styled.span`
    width: 100px;
    height: 40px;
    margin-right: 20px;
    font-weight: 700;
    font-size: 20px;
    border-bottom: 1px solid black;
  `,
  Soldout: styled.span`
    height: 27px;
    font-size: 18px;
    margin-left: 20px;
  `,
  ProductList: styled.div`
    width: 100%;
    border-bottom: 1px solid gray;
    padding: 20px 0px;
    display: flex;
    justify-content: space-between;
    position: relative;
  `,
  InfoLeft: styled.div`
    display: flex;
    flex-direction: row;
  `,
  ProductName: styled.div`
    margin-top: 28px;
    height: 36px;
    font-size: 24px;
  `,
  ColumnWrapper: styled.div`
    display: flex;
    flex-direction: column;
  `,
  ProductImage: styled.img`
    width: 160px;
    height: 160px;
    margin-right: 20px;
  `,
  Remarks: styled.div`
    margin-top: 4px;
    height: 24px;
    font-size: 16px;
  `,
  Tags: styled.div`
    margin-top: 8px;
    color: #BDBDBD;
    font-size: 16px;
  `,
  LineWrapper: styled.div`
    margin-bottom: 28px;
    display: flex;
    flex-direction: row;
  `,
  SellerImage: styled.img`
    width: 20px;
    height: 20px;
    border-radius: 50%;
  `,
  Seller: styled.span`
    margin-left: 6px;
    height: 24px;
    font-size: 16px;
  `,
  Pick: styled.img`
    width: 20px;
    margin-left: 22px;
  `,
  PickCount: styled.span`
    font-size: 16px;
    margin-left: 6px;
  `,
  Price: styled.div`
    font-size: 24px;
    font-weight: 700;
    margin: auto 20px;
  `,
  ButtonWrapper: styled.div`
    display: flex;
    flex-direction: row;
  `,
  ListWrapper: styled.div`
    height: 1004px;
    width: 1240px;
    overflow: auto;
  `,

}