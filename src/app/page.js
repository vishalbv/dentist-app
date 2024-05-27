import Image from "next/image";
import classes from "./page.module.scss";
import Video from "next-video";
import Link from "next/link";
import { DRImg, creativeImg } from "../images/images";

import { HomeUsersCarousel, ReviewsCarousel } from "./carousel";
import { StarIcon } from "../assets/assets";
import { metadata } from "./layout";

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
          <div className={classes.title}>Get a Confidence-Boosting Smile</div>
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
              Welcome to OraCare Dentistry, where we seek to educate you about
              the causes of dental diseases, provide you with long-term oral
              wellness, and help you reach your smile goals. Our modern dental
              practice, located in Plano, TX, is home to the latest equipment
              and dental technology, like Laser dentistry, iTero® digital
              impression scanner, Planmeca Viso® G7 CBCT, Overjet, BIOLASE® Epic
              X™ soft tissue laser, HYDRIM Instrument Washer, and printers.
              Along with Dr. Savitha Bathini, our team is excited about getting
              to know you and working with you. Schedule your consultation with
              us today.
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
          <div className={classes.title + " " + metadata.pacifico.className}>
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
            <StarIcon /> <span>5</span>
            <span>Average Rating</span>
          </div>
        </div>
      </div>
      <div>
        <div className={classes.section3}>
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
                469-772-8905
              </a>
            </div>
          </div>
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
      <Image src={DRImg} />
    </div>
  );
};
