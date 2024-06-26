"use client";
import { useEffect, useState } from "react";
import classes from "./layout.module.scss";

export const Footer = () => {
  return (
    <div className={classes.footer}>
      <div>
        <FooterIcons />
        <div className={classes.address}>
          7000 Preston Road Ste 400 Plano, TX 75024
        </div>
        <div>© Copyright 2024 OraCare Dentistry</div>
      </div>
    </div>
  );
};

const FooterIcons = () => {
  return (
    <div className="social-icons">
      <a
        href="https://goo.gl/maps/GRW5Z5B5P2pJUU3T6"
        target="_blank"
        className="social-icons__icon social-icons__icon--color"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
          <title>google</title>
          <g fill="#333">
            <path
              d="M45.1,20h-21v9H36c-1.9,6-6.6,8-12,8a13,13,0,1,1,8.346-22.953l6.54-6.228A21.995,21.995,0,1,0,24,46C36.131,46,47.1,38,45.1,20Z"
              fill="#333"
            />
          </g>
        </svg>
      </a>
      <a
        href="https://www.facebook.com/people/OraCare-Dentistry/100095364972500/?mibextid=LQQJ4d"
        target="_blank"
        className="social-icons__icon social-icons__icon--color"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
          <title>logo-facebook</title>
          <g fill="#333">
            <path
              d="M47,24.138A23,23,0,1,0,20.406,46.859V30.786H14.567V24.138h5.839V19.07c0-5.764,3.434-8.948,8.687-8.948a35.388,35.388,0,0,1,5.149.449v5.66h-2.9a3.325,3.325,0,0,0-3.732,2.857,3.365,3.365,0,0,0-.015.737v4.313h6.379l-1.02,6.648H27.594V46.859A23,23,0,0,0,47,24.138Z"
              fill="#333"
            />
          </g>
        </svg>
      </a>
      <a
        href="https://www.instagram.com/oracare_dentistry1/"
        target="_blank"
        className="social-icons__icon social-icons__icon--color"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
          <g fill="#333">
            <path
              d="M24,6.784c5.607,0,6.271.021,8.486.122a11.65,11.65,0,0,1,3.9.723,6.954,6.954,0,0,1,3.986,3.986,11.65,11.65,0,0,1,.723,3.9c.1,2.215.122,2.879.122,8.486s-.021,6.271-.122,8.486a11.65,11.65,0,0,1-.723,3.9,6.954,6.954,0,0,1-3.986,3.986,11.65,11.65,0,0,1-3.9.723c-2.214.1-2.878.122-8.486.122s-6.272-.021-8.486-.122a11.65,11.65,0,0,1-3.9-.723,6.954,6.954,0,0,1-3.986-3.986,11.65,11.65,0,0,1-.723-3.9c-.1-2.215-.122-2.879-.122-8.486s.021-6.271.122-8.486a11.65,11.65,0,0,1,.723-3.9,6.954,6.954,0,0,1,3.986-3.986,11.65,11.65,0,0,1,3.9-.723c2.215-.1,2.879-.122,8.486-.122M24,3c-5.7,0-6.418.024-8.658.126a15.418,15.418,0,0,0-5.1.976A10.287,10.287,0,0,0,6.525,6.525,10.287,10.287,0,0,0,4.1,10.244a15.418,15.418,0,0,0-.976,5.1C3.024,17.582,3,18.3,3,24s.024,6.418.126,8.658a15.418,15.418,0,0,0,.976,5.1,10.287,10.287,0,0,0,2.423,3.719A10.287,10.287,0,0,0,10.244,43.9a15.418,15.418,0,0,0,5.1.976c2.24.1,2.955.126,8.658.126s6.418-.024,8.658-.126a15.418,15.418,0,0,0,5.1-.976A10.749,10.749,0,0,0,43.9,37.756a15.418,15.418,0,0,0,.976-5.1C44.976,30.418,45,29.7,45,24s-.024-6.418-.126-8.658a15.418,15.418,0,0,0-.976-5.1,10.287,10.287,0,0,0-2.423-3.719A10.287,10.287,0,0,0,37.756,4.1a15.418,15.418,0,0,0-5.1-.976C30.418,3.024,29.7,3,24,3Z"
              fill="#333"
            />
            <path
              d="M24,13.216A10.784,10.784,0,1,0,34.784,24,10.784,10.784,0,0,0,24,13.216ZM24,31a7,7,0,1,1,7-7A7,7,0,0,1,24,31Z"
              fill="#333"
            />
            <circle cx="35.21" cy="12.79" r="2.52" fill="#333" />
          </g>
        </svg>
      </a>
      <a
        href="https://www.youtube.com/@OraCareDentistry"
        target="_blank"
        className="social-icons__icon social-icons__icon--color"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
          <title>logo-youtube</title>
          <g fill="#333">
            <path
              fill="#333"
              d="M47.5,14.4c0,0-0.5-3.3-1.9-4.8c-1.8-1.9-3.9-1.9-4.8-2C34.1,7.1,24,7.1,24,7.1h0c0,0-10.1,0-16.8,0.5 c-0.9,0.1-3,0.1-4.8,2c-1.4,1.5-1.9,4.8-1.9,4.8S0,18.3,0,22.2v3.6c0,3.9,0.5,7.8,0.5,7.8s0.5,3.3,1.9,4.8c1.8,1.9,4.2,1.9,5.3,2.1 c3.8,0.4,16.3,0.5,16.3,0.5s10.1,0,16.8-0.5c0.9-0.1,3-0.1,4.8-2c1.4-1.5,1.9-4.8,1.9-4.8s0.5-3.9,0.5-7.8v-3.6 C48,18.3,47.5,14.4,47.5,14.4z M19,30.2l0-13.5l13,6.8L19,30.2z"
            />
          </g>
        </svg>
      </a>
      <a
        href="https://www.tiktok.com/@oracaredentistry?lang=en"
        target="_blank"
        className="social-icons__icon social-icons__icon--color"
      >
        <svg
          version="1.1"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 0 1776.9 2019.4"
          style={{ enableBackground: "new 0 0 1776.9 2019.4" }}
          xmlSpace="preserve"
        >
          <g>
            <path
              className="st0"
              fill="#00F2EA"
              d="M731.2,810.3v-75.9c-28.1-3.7-56.5-5.6-84.9-5.8c-347.2,0-629.8,264.4-629.8,589.5
		c0,199.3,106.5,375.9,268.9,482.6c-108.7-108.8-169.2-252.3-169.1-401.3C116.2,1079,390.7,817.8,731.2,810.3"
            />
            <path
              className="st0"
              fill="#00F2EA"
              d="M747.9,1647.6c146.8,0,266.5-116,272-260.7l0.5-1291.1h237.4c-5.1-26.9-7.7-54.3-7.7-81.7H925.9l-0.6,1291.2
		c-5.4,144.6-125.2,260.6-272,260.6c-44,0-87.4-10.7-126.4-31.1C578.2,1605.6,660.4,1647.6,747.9,1647.6 M1701.1,534v-71.8
		c-87.1,0.1-172.4-25.1-245.5-72.5C1519.7,463,1605.8,513.6,1701.1,534"
            />
            <path
              className="st1"
              fill="#FF004F"
              d="M1445.9,408c-71.3-80.5-110.6-184.4-110.7-291.9h-86.6C1271.5,236.4,1342.8,341.9,1445.9,408 M645.7,1038.3
		c-150.1,0.2-271.7,120.5-271.8,269c0.3,100.3,56.5,192.2,145.7,238.1c-33.4-45.5-51.4-100.4-51.5-156.9
		c0.2-148.6,121.8-268.9,271.8-269.1c28.1,0,54.9,4.6,80.2,12.5V805.3c-26.6-3.7-53.4-5.7-80.2-5.8c-4.7,0-9.3,0.3-14,0.4v251
		C699.9,1042.6,672.9,1038.4,645.7,1038.3"
            />
            <path
              className="st1"
              fill="#FF004F"
              d="M1657.9,575.5v249.3c-161.3,0.2-318.6-49.9-449.9-143.5v651.7c0,325.5-267,590.4-595.1,590.4
		c-126.9,0-244.5-39.7-341.1-107c112.8,120.4,270.4,188.6,435.3,188.5c328.2,0,595.2-264.8,595.2-590.3V762.8
		c131.3,93.5,288.6,143.7,449.9,143.4V585.5C1720.5,585.5,1688.9,582.2,1657.9,575.5"
            />
            <path
              className="st2"
              fill="#333"
              d="M1240.6,1311.7V658.9c135.2,94,295.9,144.1,460.5,143.8V553c-96.8-20-184.6-70.5-250.8-144
		c-105.8-66.7-178.8-172.5-201.9-292.9h-242.3l-0.5,1287.2c-5.6,144.2-127.9,259.8-277.7,259.8c-89.5-0.1-173.5-42-225.6-112.5
		c-91.6-46.6-149-138.6-149.1-239c0.2-149.1,124.6-269.8,278.2-270c28.6,0,56.1,4.6,82.1,12.5V802.3
		c-329.3,7.5-594.9,269.5-594.9,590.8c0,155.4,62.2,296.9,163.6,402.5c103,70.1,224.7,107.4,349.2,107.2
		C967.3,1902.8,1240.6,1637.6,1240.6,1311.7"
            />
          </g>
        </svg>
      </a>
      <a
        href="https://twitter.com/ODentistry16866/status/1691159841513902081?s=20"
        target="_blank"
        className="social-icons__icon social-icons__icon--color"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 59.901">
          <path
            fill="#333"
            d="M8.386,4.122h8.749L55.769,55.778H47.02ZM55.449,0,35.4,21.659,19.2,0H.156l24.71,33.039L0,59.9H5.6l21.77-23.518L44.956,59.9H64L37.9,25,61.045,0Z"
          />
        </svg>
      </a>
    </div>
  );
};
