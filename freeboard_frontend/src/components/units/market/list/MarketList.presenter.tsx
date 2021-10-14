import BestProduct from '../../BestProduct'
import SubmitButton  from '../../../Button/SubmitButton'
import { S } from './MarketList.styles'

export default function MarketListUI(props) {

  return(
    <S.Container>
      <S.Title>베스트 상품</S.Title>
      <S.BestWrapper >
        { props.best?.fetchUseditemsOfTheBest.map((el) => (
          <BestProduct key={el._id}
          bestImages={el.images[0]}
          bestName={el.name}
          bestRemarks={el.remarks}
          bestPrice={el.price}
          bestPickedCount={el.pickedCount}
          onClick={props.onClickMoveToMarketDetailandSetTS}
        />
        ))
        }
      </S.BestWrapper>
      <S.NavBar>
        <S.Onsale>판매중 상품</S.Onsale>
        <S.Onsale>판매된 상품</S.Onsale>
      </S.NavBar>
    { props.data?.fetchUseditems.map((el, index) => (
       <S.ProductList key={el._id} id={el._id} onClick={props.onClickMoveToMarketDetailandSetTS}>
       <S.InfoLeft>
         <S.ProductImage src={`https://storage.googleapis.com/${el.images[0]}`} />
         <S.ColumnWrapper>
           <S.ProductName>{el.name}</S.ProductName>
           <S.Remarks>{el.remarks}</S.Remarks>
           <S.Tags>{el.tags.join(' ,')}</S.Tags>
           <S.LineWrapper>
             <div>
               <S.SellerImage src={ el.seller.picture ? 
                 `https://storage.googleapis.com/${el.seller.picture}` 
                : "/images/avatar.png" }  />
               <S.Seller>{el.seller.name}</S.Seller>
             </div>
             <div>
               <S.Pick src={"/images/heartFull.png"} />
               <S.PickCount>{el.pickedCount}</S.PickCount>
             </div>
           </S.LineWrapper>
         </S.ColumnWrapper>
       </S.InfoLeft>
       <S.Price>{el.price}원</S.Price>
     </S.ProductList>

    ))}
    <S.ButtonWrapper>
      <SubmitButton name="상품등록하기" onClick={props.onClickMoveToMarketNew} />
    </S.ButtonWrapper>
    </S.Container>
  )
}