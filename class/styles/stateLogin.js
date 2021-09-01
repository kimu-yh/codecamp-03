import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  margin: auto;
  flex-direction: column;
  width: 640px;
  /* height: 1138px; */
  background-image: url('/background.png');
  align-items: center;

`
export const LogoWrapper = styled.div`
  margin-top: 200px;
  position: relative;
`
export const Rectangle = styled.img`
  position: relative;
  left: -42px;
  width: 63px;
  height: 17px;
  z-index: 1;
`

export const Logo = styled.img`
  position: relative;
  left: 38px;
  width: 100px;
  height: 100px;
  z-index: 2;
`

export const Title = styled.h1`
  font-family: SpoqaHanSans-Bold;
  color: white;
  font-size: 60px;
  letter-spacing: -2px;
  margin-top: 27px;
`

export const InputWrapper = styled.div`
  margin-top: 162px;
  display: flex;
  flex-direction: column;
  width: 640px;
  padding: 0 50px 0 50px;
`
export const Email = styled.input`
  background-color: transparent;
  font-size: 26px;
  color: white;
  padding-bottom: 20px;
  border: none;
  border-bottom: 1px solid white;
  ::placeholder {
    color: white;
    font-family: SpoqaHanSans;
    font-weight: 350;
  }
`
export const Password = styled.input`
  background-color: transparent;
  font-size: 26px;
  color: white;
  padding-bottom: 20px;
  margin-top: 50px;
  border: none;
  border-bottom: 1px solid white;
  ::placeholder {
    color: white;
  }
`
export const LoginBtn = styled.button`
  margin-top: 50px;
  background-color: rgba(226, 24, 97, 0.6);
  width: 540px;
  height: 76px;
  border: none;
  border-radius: 38px;
  font-size: 26px;
  color: white;
`

export const SignupWrapper = styled.div`
  margin-top: 40px;
  padding: 4px;
  color: white;
  font-size: 20px;
  font-family: SpoqaHanSans-Regular;
  letter-spacing: 0.15em;
`

export const KakaoLoginBtn = styled.button`
  background-color: transparent;
  margin-top: 61px;
  margin-bottom: 81px;
  width: 540px;
  height: 76px;
  border: 1px solid #fae100;
  border-radius: 38px;
  font-size: 26px;
  color: white;
  padding: 20px 120px 20px 180px;
`

export const Kakaologo = styled.img`
  position: relative;
  bottom: 145px;
  right: 120px;
  margin-top: 10px;
  width: 35px;
  height: 33px;
`

export const Error = styled.div`
  margin-top: 5px;
  font-size: 18px;
  color: rgb(226, 24, 97)
`