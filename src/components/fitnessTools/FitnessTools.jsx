import "./fitnessTools.scss";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Kcal from "../../images/Frame 443.png";
import BMI from "../../images/Frame 444.png";
import MK from "../../images/Frame 445.png";
import GST from "../../images/Frame 446.png";

import Sam from "../../images/Frame 391.png";
import Michael from "../../images/Frame 392.png";
import John from "../../images/Frame 393.png";
import Tom from "../../images/Frame 394.png";

import Exercises from "../../images/Frame 427.png";
import Diet from "../../images/Frame 428.png";
import Workout from "../../images/Frame 429.png";
import Motivated from "../../images/Frame 430.png";
import HIIT from "../../images/Frame 431.png";
const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 576 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 576, min: 0 },
    items: 1,
  },
};

const slides = [Kcal, BMI, MK, GST];
const slides2 = [Sam, Michael, John, Tom];
const slides3 = [Exercises, Diet, Workout, Motivated, HIIT];

const FitnessTools = ({ type }) => {
  const images = type === "fitness" ? slides : slides2;
  const text = (() => {
    switch (type) {
      case "fitness":
        return {
          header1: "Our Fitness",
          header2: "Tools",
          subHeader:
            "Access a variety of tools to help you reach your fitness goals more effectively",
        };
      case "meet":
        return {
          header1: "Meet Our",
          header2: "Trainers",
          subHeader:
            "At This Part you can See Few Of The Many Positive reviews Of Our Customers.",
        };
      default:
        return {
          header1: "Fitmaker",
          header2: " Blog Posts",
          subHeader:
            "Discover essential tips to maximize your workout results and reach your fitness goals faster.",
        };
    }
  })();

  return (
    <div className="fitnessTools">
      <div className="gap-24 flex justify-center">
        <span className="text-white font-32">{text.header1}</span>
        <span className="text-red font-32">{text.header2}</span>
      </div>
      <span className="text-white font-16 flex-center">{text.subHeader}</span>
      <Carousel
        swipeable
        showDots
        responsive={responsive}
        infinite
        autoPlay
        autoPlaySpeed={2000}
        keyBoardControl
        customTransition="all .5"
        transitionDuration={1000}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass={`carousel-item-padding-40-px flex justify-between ${type}`}
      >
        {type === "blog" ? (
          <>
            <div key="0">
              <div className="slide3big">
                <img src={slides3[0]} alt="slide0" />
              </div>
            </div>
            <div key="1">
              <div className="slide3small">
                <img src={slides3[1]} alt="slide1" />
                <img src={slides3[2]} alt="slide2" />
              </div>
            </div>
            <div key="2">
              <div className="slide3small">
                <img src={slides3[3]} alt="slide3" />
                <img src={slides3[4]} alt="slide4" />
              </div>
            </div>
          </>
        ) : (
          images.map((item, index) => (
            <img
              src={item}
              key={index}
              alt={item}
              className={type === "fitness" ? "carouselItem" : "carouselItem2"}
            />
          ))
        )}
      </Carousel>
    </div>
  );
};
export default FitnessTools;
