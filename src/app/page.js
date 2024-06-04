import Image from "next/image";
import classes from "./page.module.scss";
import Video from "next-video";
import Link from "next/link";
import { DRImg, MapsImg, creativeImg } from "../images/images";

import { HomeUsersCarousel, ReviewsCarousel } from "./carousel";
import { CalendarIcon, StarIcon } from "../assets/assets";
import { fonts } from "./layout";
// import { motion } from "framer-motion";
export default function Home() {
  return (
    <div className={classes.home}>
      <div>
        <div className={classes.hero}>
          <video
            width="1200"
            height="720"
            autoPlay
            muted
            loop
            className={classes.video}
          >
            <source src="assets/hero.mp4" type="video/mp4" />
          </video>
          <div className={classes.title}>
            <div>
              Get a Confidence-Boosting <br />
              Smile
            </div>
            <a
              className={"link"}
              href="https://www.appointnow.com/?p=4763&amp;o=100&amp;rnd=638394456738193959&amp;culture=en-US"
              target="_blank"
            >
              <span className="icon">
                <CalendarIcon />
              </span>
              {"Book Appt."}
            </a>
          </div>
        </div>
      </div>
      <div>
        <div className={classes.section1}>
          <div className={classes.title}>
            <div>OraCare</div>
            <div>DENTISTRY</div>
          </div>

          <div className={classes.subtitle}>
            WHERE DIGITAL DENTISTRY LEADS THE WAY
          </div>

          <div className={classes.description}>
            <p>
              Welcome to OraCare Dentistry at Plano, Texas, where we seek to
              educate you about the causes of dental diseases, provide you with
              long-term oral wellness, and help you reach your smile goals. Our
              modern dental practice, located in Plano, Texas, is home to the
              latest equipment and dental technology, like Laser dentistry,
              iTero® digital impression scanner, Planmeca Viso® G7 CBCT,
              Overjet, BIOLASE® Epic X™ soft tissue laser, HYDRIM Instrument
              Washer, and printers. Along with Dr. Savitha Bathini, our team is
              excited about getting to know you and working with you. Schedule
              your consultation with us today.
            </p>
          </div>
          <Link href="/about-us" className={"link"}>
            About US
          </Link>
        </div>
      </div>
      <div>
        <DrData />
      </div>
      <div>
        <HomeUsersCarousel />
      </div>
      <div>
        <div className={classes.section5}>
          <div className={classes.title + " " + fonts.pacifico.className}>
            Creative smiles for you!
          </div>
          <Image src={creativeImg} />
        </div>
      </div>
      <div>
        <div className={classes.section4}>
          <div className={classes.title}>Our Patient Reviews</div>
          <div className={classes.subtitle}>WHAT PEOPLE ARE SAYING</div>

          <ReviewsCarousel />

          <div className={classes.stars}>
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon /> <span className={classes.rating}>5</span>
            <span>Average Rating</span>
          </div>
        </div>
      </div>
      <div>
        <div className={classes.section3}>
          <div>
            <div className={classes.title}>Call Us</div>
            <div className={classes.subtitle}>CONTACT INFORMATION</div>
            <div className={classes.details}>
              <div>
                <b>ADDRESS</b>
              </div>
              <div>
                7000 Preston Rd <br />
                Ste 400
                <br /> Plano, TX 75024
              </div>
              <div>
                <b>PHONE</b>
              </div>
              <div>
                <a href="tel:+14697728905" className={"link"} target="_self">
                  469-293-4444
                </a>
              </div>
            </div>
          </div>
          <Image src={MapsImg} className={classes.mapImg} />
        </div>
      </div>
    </div>
  );
}

export const DrData = ({ link = true }) => {
  return (
    <div className={classes.section2}>
      <div>
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
            teeth whitening. From a young age, the desire to help people is what
            led her to pursue a career as a dentist. With her strong
            determination and compassion for others, Dr. Bathini is dedicated to
            providing the highest quality of dental care for all who come to see
            her.
          </p>
        </div>

        {link && (
          <Link href="/dr-savitha-bathini" className={"link"}>
            MEET DR. BATHINI
          </Link>
        )}
      </div>
      <Image src={DRImg} className={classes.img} />
    </div>
  );
};
