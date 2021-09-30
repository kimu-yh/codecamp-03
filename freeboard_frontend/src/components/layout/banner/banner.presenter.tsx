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
    slide: "div",
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    pauseOnHover: true,
    centerMode: true
  }

  return (
    <Wrapper>
      <Slider {...settings}>
        <div>
          <SliderItem src="/images/one.webp" />
        </div>
        <div>
          <SliderItem src="/images/two.webp" />
        </div>
        <div>
          <SliderItem src="/images/three.webp" />
        </div>
        <div>
          <SliderItem src="/images/four.webp" />
        </div>
        <div>
          <SliderItem src="/images/five.webp" />
        </div>
        <div>
          <SliderItem src="/images/six.webp" />
        </div>
        <div>
          <SliderItem src="/images/seven.webp" />
        </div>
        <div>
          <SliderItem src="/images/eight.webp" />
        </div>
        <div>
          <SliderItem src="/images/nine.webp" />
        </div>
        <div>
          <SliderItem src="/images/ten.webp" />
        </div>
        <div>
          <SliderItem src="/images/eleven.webp" />
        </div>
        <div>
          <SliderItem src="/images/twelve.webp" />
        </div>
      </Slider>
    </Wrapper>
  )
}