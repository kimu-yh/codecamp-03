import styled from '@emotion/styled'

export const S = {

  Form: styled.form`
    display: flex;
    flex-direction: column;
    margin: 80px 102px;
    width: 996px;
  `,

  Title: styled.h1`
    height: 53px;
    margin: auto;
    font-weight: 700;
    font-size: 36px;
  `,

  Label: styled.label`
    height: 24px;
    font-size: 20px;
  `,

  LineInput: styled.input`
    margin-top: 16px;
    width: 100%;
    height: 52px;
    border: 1px solid gray;
  `,

  LocationWrapper: styled.div`
    margin-top: 40px;
    display: flex;
    flex-direction: row;
  `,

  MapWrapper: styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 24px;
  `,
  
  Map: styled.div`
    margin-top: 16px;
    width: 384px;
    height: 252px;
    border: 1px solid black;
  `,

  LocationInfoWrapper: styled.div`
    height: 292px;
  `,

  GpsWrapper: styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
  `,

  Gps: styled.input`
    margin-top: 16px;
    margin-right: 20px;
    width: 108px;
    height: 52px;
    border: 1px solid black;
    font-size: 18px;
    padding-left: 15px;
  `,

  LocationImage: styled.img`
    margin-top: 16px;
    margin-right: 20px;
    width: 20px;
    height: 26px; 
  `,

  AddressWrapper: styled.div`
    width: 588px;
    margin-top: 30px;
  `,

  PhotoWrapper: styled.div`
    margin-top: 40px;
  `,

  ImageWrapper: styled.div`
    margin-top: 16px;
    margin-right: 24px;
    width: 180px;
    height: 180px;
  `,

  ImagesWrapper: styled.div`
    display: flex;
    flex-direction: row;
  `,

  RadioButtonWrapper: styled.div`
    margin-top: 40px;
    
  `  
  
}

