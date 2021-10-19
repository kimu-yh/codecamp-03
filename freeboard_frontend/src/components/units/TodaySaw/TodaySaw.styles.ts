import styled from '@emotion/styled'

export const S = {

  Wrapper: styled.div`
    display: flex;
    flex-direction: column;
    width: 196px;
    padding: 20px;
    position: fixed;
    right: 70px;
    bottom: 0px;
    border: 1px solid #BDBDBD;
    background-color: white; 
  `,
  Title: styled.div`
    font-size: 18px;
    font-weight: 700;
    text-align: center;
  `,
  Box: styled.div`
    margin-top: 20px;
    border: 1px solid #BDBDBD;
    position: relative;
    padding: 10px;
  `,
  Image: styled.img`
    margin-top: 30px;
    width: 130px;
    height: 130px;
    text-align: center;
  `,
  PickWrapper: styled.div`
    width: 35px;
    display: flex;
    flex-direction: row;
    position: absolute;
    right: 10px;
    top: 10px;
  `,
  PickCount: styled.span`
    margin-left: 8px;
    font-size: 12px;
  `,
  Pick: styled.img`
    width: 20px;
  `,
  Name: styled.div`
    margin-top: 12px;
    font-size: 12px;
  `,
  Remarks: styled.div`
    font-size: 12px;
    font-weight: 400;
    color: #4F4F4F;
  `,
  Price: styled.div`
    margin-top: 4px;
    font-weight: 700;
    font-size: 16px;
  `,
  Tags: styled.div`
    width: 128px;
    font-size: 10px;
    color: #BDBDBD;
    margin-top: 8px;
  `,

}