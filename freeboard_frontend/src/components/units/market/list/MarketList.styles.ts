import styled from "@emotion/styled";

export const S = {

  Container: styled.div`
    margin: auto;
    width: 1200px;
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
    height: 52px;
    padding-bottom: 40px;
    border-bottom: 1px sold gray;
  `,
  Onsale: styled.span`
    height: 27px;
    font-size: 18px;
    margin-right: 20px;
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
  `
}