import { SliderItem, Wrapper } from "./banner.styles"
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

export default function BannnerUI() {
  const settings = {
    dots: true, 
    infinite: true,
    speed: 500,
    slidesToShow: 1, 
    slidesToScroll: 1,
  }
  return (
    <Wrapper>
      <Slider {...settings}>
        <div>
          <SliderItem src="/images/scene01.png" />
        </div>
        <div>
          <SliderItem src="/images/scene02.png" />
        </div>
        <div>
          <SliderItem src="/images/scene03.png" />
        </div>
        <div>
          <SliderItem src="/images/scene04.png" />
        </div>
        <div>
          <SliderItem src="/images/scene05.png" />
        </div>
        <div>
          <SliderItem src="/images/scene06.png" />
        </div>
      </Slider>
    </Wrapper>
  )
}