import Image from "next/image";
import Video from "next-video";
import classes from "./page.module.scss";
import {
  s1,
  s2,
  s3,
  s4,
  s5,
  s6,
  s7,
  s8,
  s9,
  s10,
  s11,
  s12,
  s13,
  s14,
  s15,
  ServiceCoverImg,
} from "../../images/services/services";

export default function AboutUS() {
  const servicesList = [
    {
      title: "Preventive",
      items: [
        {
          name: "Dental Sealants",
          description:
            "Dental sealants are offered at our Plano, TX office to block cavities from forming by keeping food from building up in the grooves of the teeth.",
          image: s2,
        },
        {
          name: "Mouth Guards",
          description:
            "If you or your teen play contact sports, like football or hockey, a mouth guard can work to guard the teeth and gums against trauma caused by injury.",
          image: s9,
        },
      ],
    },
    {
      title: "Restorative Dentistry",
      items: [
        {
          name: "Tooth-Colored Fillings",
          description:
            "Tooth-colored fillings, inlays, and onlays are used to treat cavities and crafted with composite resin that matches the color of your natural enamel.",
          image: s14,
        },
        {
          name: "Dental Veneers",
          description:
            "Dental veneers, crowns, and bridges can address a number of aesthetic dental problems, such as chips, gaps, and stains to offer a more appealing look.",
          image: s3,
        },
        {
          name: "Dentures",
          description:
            "We can replace several missing teeth with partial or complete dentures, depending on the needs and preferred results of our Plano, TX patients.",
          image: s4,
        },
      ],
    },
    {
      title: "Endodontics",
      items: [
        {
          name: "Root Canal Therapy",
          description:
            "Root canal therapy in Plano, TX may be needed to treat a damaged or diseased tooth if the infection has impacted the innermost layer of the tooth.",
          image: s11,
        },
      ],
    },
    {
      title: "Oral Surgery",
      items: [
        {
          name: "Wisdom Tooth Extractions",
          description:
            "When your wisdom teeth develop, we might recommend you have wisdom teeth extractions to preserve the health of your mouth and avoid overcrowding.",
          image: s15,
        },
        {
          name: "All-on-X Dental Implants",
          description:
            "All-on-X dental implants allow Plano, TX individuals to replace a full arch of teeth with four or more implants for a natural- looking restoration.",
          image: s1,
        },
      ],
    },
    {
      title: "Periodontal",
      items: [
        {
          name: "Scaling and Root Planing",
          description:
            "Provided at our Plano, TX office, scaling and root planing clear away accumulated tartar and plaque beneath the gumline in order to treat gum disease.",
          image: s7,
        },
        {
          name: "Grafting",
          description:
            "A bone graft replenishes bone that has been lost in your jaw due to gum disease in order to provide support for a new dental implant placement.",
          image: s5,
        },
      ],
    },
    {
      title: "Cosmetic Dentistry",
      items: [
        {
          name: "Smile Makeover",
          description:
            "Smile makeovers are an ideal method to correct numerous cosmetic issues, such as discolored or crooked teeth, creating a more attractive grin.",
          image: s12,
        },
        {
          name: "Invisalign® Treatment",
          description:
            "Invisalign treatment uses a series of removable clear aligner trays to gently shift your teeth so they have a straighter, more seamless appearance.",
          image: s8,
        },
        {
          name: "Teeth Whitening",
          description:
            "With professional-grade teeth whitening in Plano, TX, it's possible to brighten yellow or stained teeth for a brighter and more attractive appearance.",
          image: s13,
        },
      ],
    },
    {
      title: "Sedation",
      items: [
        {
          name: "Sedation Dentistry",
          description:
            "Our sedation dentistry services help patients to relax by soothing any feelings of anxiety they might experience when coming in for dental treatments.",
          image: s10,
        },
      ],
    },
  ];
  return (
    <div className={classes.root}>
      <div
        style={{ backgroundImage: `url(${ServiceCoverImg.src})` }}
        className={classes.hero}
      >
        <div>
          <div className={classes.title}>Services</div>
        </div>
      </div>
      <div className={classes.section1}>
        <div className={classes.title}>ABOUT OUR SERVICES</div>
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
        {servicesList.map((service, index) => (
          <div key={index} className={classes.serviceBlock}>
            <div className={classes.serviceTitle}>{service.title}</div>
            <div className={classes.itemsBlock}>
              {service.items.map((item, subIndex) => (
                <div key={subIndex} className={classes.itemBlock}>
                  <div className={classes.itemImage}>
                    <Image src={item.image} />
                  </div>
                  <div className={classes.itemName}>{item.name}</div>
                  <div className={classes.itemDescription}>
                    {item.description}
                  </div>
                  <div className={classes.button}>Research</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
