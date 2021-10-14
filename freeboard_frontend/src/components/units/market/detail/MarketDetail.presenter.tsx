import SubmitButton from  '../../../Button/SubmitButton'
import Avatar from '../../../commons/avatar'
import { S } from "../detail/MarketDetail.styles";
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Dompurify from "dompurify"

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
  console.log("data", props.data?.fetchUseditem)
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
      <S.Remarks>{props.data?.fetchUseditem.remarks}</S.Remarks>
      <S.ProductTitle>{props.data?.fetchUseditem.name}</S.ProductTitle>
      <S.ProductPrice>{props.data?.fetchUseditem.price}</S.ProductPrice>
      <S.Images>
        <Slider {...settings}>
          { props.data?.fetchUseditem.images.map((el) => (
          <div key={el}>
            <S.SliderItem src={`https://storage.googleapis.com/${el}`} />
          </div>
          ))}
        </Slider>
      </S.Images>
      { process.browser && 
      <S.Contents dangerouslySetInnerHTML={{
        __html: Dompurify.sanitize(props.data?.fetchUseditem.contents)}}></S.Contents>
      }
      <S.Tags>{props.data?.fetchUseditem.tags}</S.Tags>
      <S.Hr />
      <S.Map src="/images/mapImage.png"/>
      <S.Hr />
      <S.ButtonWrapper>
        <SubmitButton name="목록으로" onClick={props.onClickMoveToList}/>
        <SubmitButton name="수정하기" onClick={props.onClickMoveToEdit}/>
        <SubmitButton name="삭제하기" onClick={props.onClickDelete}/>
      </S.ButtonWrapper>
    </S.Container>
  
  )
}