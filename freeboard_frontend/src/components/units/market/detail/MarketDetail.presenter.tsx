import SubmitButton from  '../../../Button/SubmitButton'
import Avatar from '../../../commons/avatar'
import { S } from "../detail/MarketDetail.styles";
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Dompurify from "dompurify"
import KakaomapPage from '../../../commons/kakaomap';
import { HeartOutlined, HeartFilled } from '@ant-design/icons'


export default function MarketDetailUI(props) {
  const settings = {
    dots: true, 
    infinite: true,
    speed: 500,
    slidesToShow: 1, 
    slidesToScroll: 1,
    slide: "div",
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    pauseOnHover: true,
    centerMode: true
  }
  
  console.log(props)

  return (
    <S.Container>
      <S.Header>
      <Avatar 
        user={props.user}
        writer={props.writer}
        date={props.date} />    
        <S.IconWrapper>
         {/* 컴포넌트로 빼기  */}
        </S.IconWrapper>
      </S.Header>
      <S.PickWrapper id={props.data?.fetchUseditem._id} onClick={props.onClickPick}>
          <S.Pick>
            {
              props.picked || (props.dataIpicked?.fetchUseditemsIPicked.map(e => e._id).includes(props.marketId))
              ? <HeartFilled /> 
              : <HeartOutlined />
            }
          </S.Pick>
          <S.PickCount>{props.data?.fetchUseditem.pickedCount}</S.PickCount>
      </S.PickWrapper>
      <S.Remarks>{props.data?.fetchUseditem.remarks}</S.Remarks>
      <S.ProductTitle>{props.data?.fetchUseditem.name}</S.ProductTitle>
      <S.ProductPrice>{props.data?.fetchUseditem.price} 원</S.ProductPrice>
      <S.Images>
        <Slider {...settings}>
          { props.data?.fetchUseditem.images.map((el) => (
          <div key={el}>
            <S.SliderItem src={ el 
              ? `https://storage.googleapis.com/${el}`
              : "/images/noImages.png"
            } />
          </div>
          ))}
        </Slider>
      </S.Images>
      { process.browser && 
      <S.Contents dangerouslySetInnerHTML={{
        __html: Dompurify.sanitize(props.data?.fetchUseditem.contents)}}></S.Contents>
      }
      <S.Tags>{props.data?.fetchUseditem.tags.map(e => '#'+ e).join(' ')}</S.Tags>
      <S.Hr />
      <S.Map>
        <KakaomapPage/>
      </S.Map> 
      <S.Hr />
      <S.ButtonWrapper>
        <SubmitButton name="목록으로" onClick={props.onClickMoveToList}/>

        { props.data?.fetchUseditem.seller._id === props.loginData?.fetchUserLoggedIn._id
        ? ( <>
            <SubmitButton name="수정하기" onClick={props.onClickMoveToEdit}/>
            <SubmitButton name="삭제하기" onClick={props.onClickDelete}/>
            </>
          )
        : <SubmitButton name="구매하기" onClick={props.onClickBuy}/>
        }
      </S.ButtonWrapper>
    </S.Container>
  
  )
}