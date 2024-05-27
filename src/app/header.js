"use client";
import { useEffect, useState } from "react";
import classes from "./layout.module.scss";
import { CalendarIcon } from "../assets/assets";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Header = () => {
  const [atTop, setAttop] = useState();
  const pathName = usePathname();

  console.log(pathName);
  useEffect(() => {
    window.onscroll = () => setAttop(window.pageYOffset === 0 ? true : false);

    return () => (window.onscroll = null);
  });

  return (
    <div
      className={
        classes.header +
        (atTop && pathName == "/" ? ` ${classes.headerTop}` : "")
      }
    >
      <div className={classes.actions}>
        <a href="tel:+14697728905" className={"link"} target="_self">
          469-772-8905
        </a>

        <a
          className={"link"}
          href="https://www.appointnow.com/?p=4763&amp;o=100&amp;rnd=638394456738193959&amp;culture=en-US"
          target="_blank"
        >
          <CalendarIcon />
          Book Appt.
        </a>
      </div>
      <div className={classes.links}>
        <Link href="/">Home</Link>
        <Link href="/dr-savitha-bathini">DR. SAVITHA BATHINI</Link>
        <Link href="/about-us">About</Link>
      </div>
    </div>
  );
};
