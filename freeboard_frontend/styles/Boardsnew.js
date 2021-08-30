import styled from '@emotion/styled';

export const Wrapper = styled.div`
  margin: auto auto;
  height: 100vh;
  width: 1200px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  padding: 65px;
`

export const Title = styled.h1`
  text-align: center;
  font-size: 36px;
  margin: 40px auto;
`

export const SubTitle = styled.div`
  font-size: 16px;
  font-family: Noto Sans CJK KR;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
`

export const Content = styled.textarea`
  width: 100%;
  height: 480px;
  resize: none;
  font-family: Noto Sans CJK KR;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
  color: rgb(117, 117, 117);
  padding: 10px;
`

export const Item = styled.div`
  width: 996px;
  padding: 20px 0;
`

export const Input = styled.input`
  width: 100%;
  height: 52px;
  border: 1px solid rgb(117, 117, 117);
  box-sizing: border-box;
  padding: 10px;
  font-size: 16px;
  font-family: Noto Sans CJK KR;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
  color: #BDBDBD;
  margin-bottom: 10px;
`
export const Box = styled.div`
  width: 78px;
  height: 78px;
  background-color: #BDBDBD;
  color: #4F4F4F;
  font-size: 14px;
  text-align: center;
  padding: 20px 20px 20px 17px;
`

export const BoxWrap = styled.div`
  width: 282px;
  display: flex;
  justify-content: space-between;
`

export const RegisterBtn = styled.button`
  width: 179px;
  height: 52px;
  background-color: #FFD600;
  font-family: Noto Sans CJK KR;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: center;
  border: none;
  margin: 20px auto;
  padding: 18px;
`

export const Postbox = styled.input`
  width: 77px;
  height: 52px;
  color: rgb(117, 117, 117);
  font-size: 16px;
  padding: 14px;
  text-align: center;
  margin-bottom: 10px;
`

export const PostboxSearch = styled.button`
  width: 124px;
  height: 52px;
  margin: 0 0 10px 10px;
  padding: 14px;
  background-color: black;
  color: white;
  font-size: 16px;
  border: none;
`

export const Radio = styled.input`
  margin-top: 10px;
  background-color: #FFD600;
  /* &:checked + Radio {
  &::after { color: #FFD600 
  }
} */
`

