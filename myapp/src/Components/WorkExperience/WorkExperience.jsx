import { useRef } from "react";
import { WorkExperiences } from "../../utilis/data";
import WorkExperienceCard from "./WorkCard/WorkExperienceCard";
import styles from "./WorkExperience.module.css";
import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export default function WorkExperience() {
  const sliderRef = useRef();

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  function right() {
    sliderRef.current.slickNext();
  }
  function left() {
    sliderRef.current.slickPrev();
  }
  return (
    <section className={styles.WorkExperience_container}>
      <h5>Work Experience</h5>
      <div className={styles.WorkExperience_content}>
        <div className={styles.arrow_right} onClick={right}>
          <p>
            <FaArrowRight />
          </p>
        </div>
        <div className={styles.arrow_left} onClick={left}>
          <p>
            <FaArrowLeft />
          </p>
        </div>
        <Slider ref={sliderRef} {...settings}>
          {WorkExperiences.map((item) => (
            <WorkExperienceCard key={item.title} details={item} />
          ))}
        </Slider>
      </div>
    </section>
  );
}
