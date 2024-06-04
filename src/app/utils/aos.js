"use client";
import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

export default function AOSComponent({ children }) {
  useEffect(() => {
    AOS.init({
      duration: 600,
      delay: 300,
    });
  }, []);

  return <>{children}</>;
}
