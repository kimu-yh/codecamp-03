import LoginProfile from "../../../commons/loginProfile/loginProfile";
import SubmitButton from  '../../../Button/SubmitButton'
import { S } from "../detail/MarketDetail.styles";


export default function MarketDetailUI(props) {
  
  return (
    <S.Container>
      <S.Header>
        <LoginProfile />
        <S.Date></S.Date>
        <S.IconWrapper>
            <S.LinkIcon src="/images/link.png" alt="link icon" />
            <ShowAddress 
              placement="topRight" 
              color={'cyan'}
              title={`${props.data?.fetchBoard.boardAddress?.address} ${props.data?.fetchBoard.boardAddress?.addressDetail}`}>
              <S.LocationIcon src="/images/location.png" alt="location icon" />
            </ShowAddress>
          </S.IconWrapper>
      </S.Header>
      <S.LineExpression></S.LineExpression>
      <S.ProductTitle></S.ProductTitle>
      <S.ProductPrice></S.ProductPrice>
      <Images></Images>
      <S.Explanations></S.Explanations>
      <S.Hr />
      <S.Map />
      <S.Hr />
      <SubmitButton name="목록으로" />
      <SubmitButton name="수정하기"/>
    </S.Container>
  
  )
}