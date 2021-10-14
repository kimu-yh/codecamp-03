import { S } from "./TodaySaw.styles"



export default function TodaySawUI() {
  const TodaySawList = []

  return  (
    <S.Wrapper>
      <S.Title>오늘 본 상품</S.Title>
      { 
        <S.Box>
          <S.Image src=""
          />
          <S.PickWrapper>
            <S.Pick src="/images/heartFull.png" />
            <S.PickCount></S.PickCount>
          </S.PickWrapper>
          <S.Name></S.Name>
          <S.Remarks></S.Remarks>
          <S.Price></S.Price>
          <S.Tags></S.Tags>
          
        </S.Box>
      }
    </S.Wrapper>
  )
}