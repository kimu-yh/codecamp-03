import { S } from "./TodaySaw.styles"

export default function TodaySawUI(props) {
 
  return  (
    <S.Wrapper>
      { props.close 
      ? 
        <S.OpenButton onClick={props.onClickClose} >오늘 본 상품 열기</S.OpenButton>
      
      : (
      <> 
      <S.CloseButton onClick={props.onClickClose}>닫기</S.CloseButton>
      <S.Title>오늘 본 상품</S.Title>
      { process.browser && JSON.parse(sessionStorage.getItem("todaySaw"))?.slice(-3).map(el=>(
        <S.Box key={el._id} onClick={() => props.onClickMoveToDetail(el)}>
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
      </>
    )}
    </S.Wrapper>
  )
}