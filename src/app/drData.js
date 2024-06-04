// "use client";
import Image from "next/image";
import classes from "./page.module.scss";
import Video from "next-video";
import Link from "next/link";
import { DRImg, MapsImg, creativeImg } from "../images/images";

import { HomeUsersCarousel, ReviewsCarousel } from "./carousel";
import { CalendarIcon, StarIcon } from "../assets/assets";
import { fonts } from "./layout";
import AOSComponent from "./utils/aos";
// import { motion } from "framer-motion";
// import ScrollAnimation from "react-animate-on-scroll";

export const DrData = ({ link = true }) => {
  return (
    <AOSComponent>
      <div className={classes.section2}>
        <div data-aos="fade-right">
          <div className={classes.title}>
            <div>Savitha Bathini</div>
          </div>
          <div className={classes.subtitle}>DOCTOR OF DENTAL SURGERY</div>

          <div className={classes.description}>
            <p>
              Dr. Savitha Bathini specializes in general dentistry, simple and
              complex tooth extractions, wisdom teeth extractions, root canal
              therapy, dentoalveolar surgery, partial and full-mouth
              rehabilitation with implants and dentures, Digital Smile Design,
              Invisalign® treatment, and cosmetic procedures like veneers and
              teeth whitening. From a young age, the desire to help people is
              what led her to pursue a career as a dentist. With her strong
              determination and compassion for others, Dr. Bathini is dedicated
              to providing the highest quality of dental care for all who come
              to see her.
            </p>
          </div>

          {link && (
            <Link href="/dr-savitha-bathini" className={"link"}>
              MEET DR. BATHINI
            </Link>
          )}
        </div>

        {/* <div data-aos="fade-left"> */}
        <Image src={DRImg} className={classes.img} data-aos="fade-left" />
        {/* </div> */}

        {/* <ScrollAnimation animateIn="fadeIn"> */}

        {/* </ScrollAnimation> */}
      </div>
    </AOSComponent>
  );
};
