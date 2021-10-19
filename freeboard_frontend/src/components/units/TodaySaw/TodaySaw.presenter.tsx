import { S } from "./TodaySaw.styles"

export default function TodaySawUI(props) {
 
  return  (
    <S.Wrapper>
      <S.Title>오늘 본 상품</S.Title>
      {JSON.parse(sessionStorage.getItem("todaySaw"))?.slice(-3).map(el=>(
        <S.Box key={el._id} onClick={props.onClickMoveToDetail}>
          <S.Image src={`https://storage.googleapis.com/${el.images[0]}`}
          />
          <S.PickWrapper>
            <S.Pick src="/images/heartFull.png" />
            <S.PickCount>{el.pickedCount}</S.PickCount>
          </S.PickWrapper>
          <S.Name>{el.name}</S.Name>
          <S.Remarks>{el.remarks}</S.Remarks>
          <S.Price>{el.price} 원</S.Price>
          <S.Tags>#{el.tags?.join(" #")}</S.Tags>
        </S.Box>
      ))}
    </S.Wrapper>
  )
}