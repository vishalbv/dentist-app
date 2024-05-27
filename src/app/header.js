"use client";
import { useEffect, useState } from "react";
import classes from "./layout.module.scss";
import { CalendarIcon } from "../assets/assets";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Header = () => {
  const [atTop, setAttop] = useState(true);
  const [opened, setOpened] = useState(false);
  const pathName = usePathname();
  const width = useWidth();
  const isMobile = width && width < 1000;
  console.log(pathName);
  useEffect(() => {
    window.onscroll = () => setAttop(window.pageYOffset < 30 ? true : false);
    setAttop(window.pageYOffset < 30 ? true : false);
    return () => (window.onscroll = null);
  });
  console.log(isMobile);
  useEffect(() => {
    if (opened) document.body.classList.add("nav-opened");
    else document.body.classList.remove("nav-opened");
  }, [opened]);

  useEffect(() => {
    setOpened(false);
  }, [pathName]);

  useEffect(() => {
    if (isMobile) document.body.classList.add("mobile-view");
    else document.body.classList.remove("mobile-view");
  }, [isMobile]);
  return (
    <div
      className={
        classes.header +
        (atTop && pathName == "/"
          ? ` ${classes.headerTop + " header_at_top"}`
          : "")
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
          <span className="icon">
            <CalendarIcon />
          </span>
          {!isMobile && "Book Appt."}
        </a>
        {isMobile && (
          <HumberBerg onClick={() => setOpened(!opened)} opened={opened} />
        )}
      </div>
      {isMobile !== undefined &&
        (!isMobile ? (
          <div className={classes.links}>
            <Link href="/">Home</Link>
            <Link href="/dr-savitha-bathini">DR. SAVITHA BATHINI</Link>
            <Link href="/about-us">About</Link>
          </div>
        ) : (
          <div className={classes.links_mobile + " links_mobile"}>
            <Link href="/">Home</Link>
            <Link href="/dr-savitha-bathini">DR. SAVITHA BATHINI</Link>
            <Link href="/about-us">About</Link>
          </div>
        ))}
    </div>
  );
};

const HumberBerg = ({ onClick, opened }) => {
  return (
    <svg
      id="hamburger"
      className={opened && "hamburger-expanded"}
      viewbox="0 0 40 40"
      onClick={onClick}
    >
      <g
        stroke="#fff"
        stroke-width="4"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path id="top-line" d="M10,10 L40,10 Z"></path>
        <path id="middle-line" d="M10,20 L40,20 Z"></path>
        <path id="bottom-line" d="M10,30 L40,30 Z"></path>
      </g>
    </svg>
  );
};

const useWidth = () => {
  const [width, setWidth] = useState(undefined);
  const handleResize = () => setWidth(window.innerWidth);
  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return width;
};
