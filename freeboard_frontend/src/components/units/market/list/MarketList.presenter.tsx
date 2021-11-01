import BestProduct from '../../BestProduct'
import SubmitButton  from '../../../Button/SubmitButton'
import { S } from './MarketList.styles'
import TodaySaw from '../../TodaySaw/TodaySaw.container'
import InfiniteScroll from "react-infinite-scroller"
import { useState } from 'react'


export default function MarketListUI(props) {
  const [close, setClose] = useState(false)
  console.log(props)
  return(
    <S.Container>
      <S.Title>베스트 상품</S.Title>
      <S.BestWrapper >
        { props.best?.fetchUseditemsOfTheBest.map((el) => (
          <BestProduct key={el._id}
          id={el._id}
          bestImages={el.images.filter(e => e)}
          bestName={el.name}
          bestRemarks={el.remarks}
          bestPrice={el.price}
          bestPickedCount={el.pickedCount}
          onClick={props.onClickMoveToMarketDetailandSetTS(el)}
        />
        ))
        }
      </S.BestWrapper>
        <S.NavBar>
          <S.Onsale id={"fetchUseditems"}
          onClick={props.onClickItemsSelling}>판매중 상품</S.Onsale>
          <>|</>
          <S.Onsale id={"fetchUseditems"}
          onClick={props.onClickItemsSold}>판매된 상품</S.Onsale>
          <>|</>
          <S.Onsale id={"fetchUseditemsIBought"}
          onClick={props.onClickItemsIbought}>내가 산 상품</S.Onsale>
          <>|</>
          <S.Onsale id={"fetchUseditems"}
          onClick={props.onClickMyItems}>내가 올린 상품</S.Onsale>
          <>|</>
          <S.Onsale id={"fetchUseditemsIPicked"}
          onClick={props.onClickIPicked}>내가 찜한 상품</S.Onsale>
        </S.NavBar>
            <S.ListWrapper>
        <InfiniteScroll
              pageStart={0}
              loadMore={props.onLoadMore}
              hasMore={true}
              useWindow={false}
            >
              {props.data?.map((el, index) => (
              <S.ProductList key={el._id + index} id={el._id} onClick={props.onClickMoveToMarketDetailandSetTS(el)}>
                <S.InfoLeft>
                  <S.ProductImage src={el.images?.length  
                    ? `https://storage.googleapis.com/${el.images?.filter(e => e)[0]}`
                    : "/images/noImages.png"
                  } />
                  <S.ColumnWrapper>
                    <S.ProductName>{el.name}</S.ProductName>
                    <S.Remarks>{el.remarks}</S.Remarks>
                    <S.Tags>#{el.tags?.join(' #')}</S.Tags>
                    <S.LineWrapper>
                      <div>
                        <S.SellerImage src={ el.seller?.picture ? 
                          `https://storage.googleapis.com/${el.seller.picture}` 
                          : "/images/avatar.png" }  />
                        <S.Seller>{el.seller?.name}</S.Seller>
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
            <TodaySaw close={close} setClose={setClose} />
            </InfiniteScroll>
          </S.ListWrapper>
    <S.ButtonWrapper>
      <SubmitButton name="상품등록하기" onClick={props.onClickMoveToMarketNew} />
    </S.ButtonWrapper>
    </S.Container>
  )
}