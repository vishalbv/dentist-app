"use client";
import Slider from "react-slick";
import { _1Img, _2Img, _3Img, _4Img, _5Img, _6Img } from "../images/images";
import Image from "next/image";
import classes from "./carousel.module.scss";

export const Carousel = ({ extraSettings, children }) => {
  const images = [
    { title: "Preventive", img: _1Img },
    { title: "Restorative", img: _2Img },
    { title: "Endodontics", img: _3Img },
    { title: "Oral Surgery", img: _4Img },
    { title: "Periodontics", img: _5Img },
    { title: "Cosmetic Dentistry", img: _6Img },
  ];

  var settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    ...extraSettings,
  };
  return (
    <div className={classes.root}>
      <Slider {...settings}>{children}</Slider>
    </div>
  );
};

export const HomeUsersCarousel = ({}) => {
  const images = [
    { title: "Preventive", img: _1Img },
    { title: "Restorative", img: _2Img },
    { title: "Endodontics", img: _3Img },
    { title: "Oral Surgery", img: _4Img },
    { title: "Periodontics", img: _5Img },
    { title: "Cosmetic Dentistry", img: _6Img },
  ];

  return (
    <Carousel>
      {images.map((img, k) => (
        <div key={k} className={classes.img}>
          <Image src={img.img} className={classes.image} />
          <h2>{img.title}</h2>
        </div>
      ))}
    </Carousel>
  );
};

export const ReviewsCarousel = ({}) => {
  const reviews = [
    {
      title:
        "They deserve more than 5 stars. I love everything about this place 💕",
    },
    {
      title:
        "Very friendly staff and a welcoming environment. Great experience overall!",
    },
    {
      title:
        "Everyone here is super professional and very welcoming! Having a lot of anxiety going into the appointment, they were very reassuring and patient along the way. Definitely would recommend this practice to anyone!",
    },
    {
      title:
        "Dr. Bathini and her staff are the BEST! She is extremely thorough, has amazing bedside manner, and you truly feel cared for. Her office is immaculately clean and she uses really state of the art technology to take images and x-rays of your mouth. She also spent a lot of time TEACHING me about my mouth and proper brushing technique. Her staff is also very warm, and kind. They offered me water while I was waiting and made me feel very comfortable before seeing the doctor. I only come to Plano a few times a year, but I wish I lived here because I would go to her all of the time!",
    },
  ];
  const extraSettings = {
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
    speed: 2000,
    autoplaySpeed: 2000,
    autoplay: true,
    arrows: null,
  };

  return (
    <Carousel extraSettings={extraSettings}>
      {reviews.map((review, k) => (
        <div key={k} className={classes.review}>
          {review.title}
        </div>
      ))}
    </Carousel>
  );
};
