"use client";
import { useEffect, useState } from "react";
import classes from "./layout.module.scss";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LogoIcon } from "../assets/assets";
import Image from "next/image";

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
      <div className={classes.headerContent}>
        <Link href="/">
          <Image src={LogoIcon} className={classes.logo} />
        </Link>

        <div className={classes.launchNote}>New Website launching soon ...</div>
        <div className={classes.headerRight}>
          {isMobile !== undefined && (
            <div
              className={
                !isMobile
                  ? classes.links
                  : `${classes.links_mobile + " links_mobile"}`
              }
            >
              <Link href="/">Home</Link>
              <Link href="/dr-savitha-bathini">DR. SAVITHA BATHINI</Link>
              <Link href="/services">Services</Link>
              <Link href="/about-us">About</Link>
            </div>
          )}
          <div className={classes.actions}>
            <a href="tel:+14692934444" className={"link"} target="_self">
              469-293-4444
            </a>

            {isMobile && (
              <HumberBerg onClick={() => setOpened(!opened)} opened={opened} />
            )}
          </div>
        </div>
      </div>
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
