import SubmitButton  from '../../../Button/SubmitButton'
import { S } from './MarketList.styles'
import InfiniteScroll from "react-infinite-scroller"
import { useRouter } from 'next/router'


export default function MarketListPageUI(props) {
  const router = useRouter()
  const onClickMoveToMarketDetail = (e) => {
    router.push(`/markets/${e.currentTarget.id}`)
  }
  const onClickMoveToMarkets = () => {
    router.push("/markets")
  }

  return(
    <S.Container>

      <S.NavBar>
        {router.pathname === "/markets/sold" && 
        <S.OnPage id={"fetchUseditems"}>판매된 상품</S.OnPage>
        } 
        {router.pathname === "/markets/ibought" && 
        <S.OnPage id={"fetchUseditemsIBought"}>내가 산 상품</S.OnPage>
        }
        {router.pathname === "/markets/ipicked" && 
        <S.OnPage id={"fetchUseditemsIPicked"}>내가 찜한 상품</S.OnPage>
        }
        </S.NavBar>
        
      <S.ListWrapper>
        <InfiniteScroll
              pageStart={0}
              loadMore={props.onLoadMore}
              hasMore={true}
              useWindow={false}
            >
              {props.data?.map((el, index) => (
                <S.ProductList key={el._id + index} id={el._id} onClick={onClickMoveToMarketDetail}>
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
           
            </InfiniteScroll>
          </S.ListWrapper>
      <S.ButtonWrapper>
        <SubmitButton name="돌아가기" onClick={onClickMoveToMarkets} />
      </S.ButtonWrapper>
    </S.Container>
  )
}