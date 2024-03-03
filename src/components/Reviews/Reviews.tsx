import "./reviews.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { ReviewsItem } from "./ReviewsItem/ReviewsItem";

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
      <h2 className="reviews-title">ОТЗЫВЫ</h2>
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