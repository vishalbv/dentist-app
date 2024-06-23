import classes from "./page.module.scss";

import { DrData } from "../drData";

export default function DrPage() {
  return (
    <div className={classes.root}>
      <div className={classes.hero}>
        <DrData link={false} />
      </div>

      <div className={classes.section}>
        <div className={classes.title}>Education and Training</div>
        <p>
          Dr. Bathini began her academic journey in the place where she grew up,
          Bangalore (officially known as Bengaluru), India, by graduating with a
          Bachelor of Dental Surgery from Rajiv Gandhi University of Health
          Sciences. A year later, she held an internship in oral implantology at
          IFZI GmbH in Nuremberg, Germany. After moving to the United States,
          Dr. Bathini completed a one-year residency in advanced oral surgery at
          the New York University College of Dentistry where she also ended up
          earning her doctor of dental surgery degree. As a believer in lifelong
          learning, she regularly participates in continuing education and has
          remained up to date on the latest advances in dentistry, including
          tissue bioengineering, implant dentistry, CAD/CAM, digital imaging,
          and more.
        </p>
        <p>
          Doctor of Dental Surgery, NYU College of Dentistry, NY, USA <br />
          Advanced Oral Surgery, NYU College of Dentistry, New York, USA
          <br />
          Dental XP Online Externship in Implant Dentistry, Atlanta, USA <br />
          Oral Implantology, IFZI GmbH, Nürnberg, Germany <br />
          Bachelor of Dental Surgery, The Oxford Dental College, Bangalore,
          India
        </p>
      </div>
      <div className={classes.section}>
        <div className={classes.title}>Skills and Specialties</div>
        <p>
          Dr. Bathini specializes in general dentistry, simple and complex
          extractions, wisdom teeth extractions, root canal therapy,
          dentoalveolar surgery, partial and full-mouth rehabilitation with
          implants and dentures, Digital Smile Design, Invisalign® treatment,
          and cosmetic procedures like veneers and teeth whitening. In addition
          to healthy individuals, she has successfully worked with patients who
          have systemic diseases and varying special needs. With her
          international education and background, Dr. Bathini is fluent in
          several languages, such as English, Hindi, Tamil, Telugu, and Kannada.
          Collectively, these skills enable her to communicate effectively and
          treat all patients regardless of their ethnicity or medical issues.
        </p>
      </div>
      <div className={classes.section}>
        <div className={classes.title}>Personal Life</div>
        <p>
          When she's not at her dental office, Dr. Bathini enjoys spending time
          with family, interior designing, traveling, and hiking.
        </p>
      </div>
    </div>
  );
}
