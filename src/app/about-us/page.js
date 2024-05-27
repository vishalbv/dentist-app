import Image from "next/image";
import Video from "next-video";
import classes from "./page.module.scss";
import { AboutImg, AboutImg1, AboutImg2, AboutImg3 } from "../../images/images";

export default function AboutUS() {
  const images = [
    { title: "Services", img: AboutImg1 },
    { title: "office", img: AboutImg2 },
    { title: "contact", img: AboutImg3 },
  ];

  return (
    <div className={classes.root}>
      <div
        style={{ backgroundImage: `url(${AboutImg.src})` }}
        className={classes.hero}
      >
        <div>
          <div className={classes.title}>ABOUT US</div>
        </div>
      </div>
      <div className={classes.section1}>
        <div className={classes.title}>LEARN ABOUT US</div>
        <div className={classes.description}>
          <p>
            OraCare Dentistry is a modern dental practice in Plano, TX that
            specializes in preventive, restorative, cosmetic, and sedation
            dentistry services, along with endodontics, oral surgery, and
            periodontics. We utilize the most advanced digital dentistry tools
            and sterilization equipment, including iTero® digital impression
            scanner, Planmeca Viso® G7 CBCT, Overjet, BIOLASE® Epic X soft
            tissue laser, Hydrim Instrument Washer, and printers. Our goal is to
            optimize your dental health and enhance your smile. Our practice is
            led by Dr. Savitha Bathini who prefers to take an educational
            approach to ensure you have the knowledge you need to prevent oral
            diseases and feel confident in your treatment plan. With her
            multicultural background, Dr. Bathini can speak several languages,
            which enables her to communicate effectively and provide
            compassionate care to a vast variety of people. Individuals of all
            ages are welcome to contact us today to schedule an appointment.
          </p>
        </div>
      </div>
      <div className={classes.section2}>
        <div className={classes.title}>LEARN MORE</div>
        <div className={classes.description}>
          {images.map((i, k) => (
            <div key={k}>
              <Image src={i.img} className={classes.img} />
              <div className={classes.subtitle}>{i.title}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
