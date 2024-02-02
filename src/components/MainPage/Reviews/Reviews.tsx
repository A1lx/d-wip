import "./reviews.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { ReviewsItem } from "./ReviewsItem";

export const Reviews = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section id="reviews" className="reviews">
      <span className="reviews-title">ОТЗЫВЫ</span>
      <Slider {...settings}>
        <ReviewsItem/>
        <ReviewsItem/>
        <ReviewsItem/>
        <ReviewsItem/>
        <ReviewsItem/>
      </Slider>
    </section>
  )
}