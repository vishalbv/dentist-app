"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  //   const data = await getData();

  const [state, setState] = useState(0);
  const [loc, setLoc] = useState(0);
  const [speed, setSpeed] = useState(1);
  const [score, setScore] = useState([]);
  const [direction, setDirection] = useState(true);
  const middleRef = useRef();

  const readyBana = () => {
    setTimeout(() => {
      if (loc > window.innerHeight && direction) {
        setDirection((direction) => false);
      } else if (loc <= 0 && !direction) {
        setDirection((direction) => true);
      }
      console.log(loc, direction);
      setLoc((loc) => (direction ? loc + 1 : loc - 1));
    }, 1);
  };
  useEffect(() => {
    if (state == 0) {
      readyBana();
    }
    if (state == 1) {
      setTimeout(() => {
        setLoc(1);
        setState(0);
        setDirection((direction) => true);
      }, 2000);
    }
  }, [loc, state, direction]);

  //   useEffect(() => {}, [state]);
  console.log(middleRef?.current?.height);

  return (
    <div
      className="flex min-h-screen flex-col items-center justify-between"
      onClick={() => {
        setState(state + 1);
        setTimeout(() => {}, 500);
        const redpointLoc = window.innerHeight / 2;
        const point = Math.abs(loc - redpointLoc);
        if (point < 8) {
          setScore((s) => [...s, 10]);
        } else if (point < 30) {
          setScore((s) => [...s, 8]);
        } else if (point < 70) {
          setScore((s) => [...s, 5]);
        }
        console.log(loc, redpointLoc, "pppppp", Math.abs(loc - redpointLoc));
        console.log(middleRef);
      }}
    >
      {/* {data.map((i) => (
        <div>{i?.title}</div>
      ))} */}

      <div className="billubana-wrapper">
        <div className="score">{score.reduce((acc, i) => i + acc, 0)}</div>
        {state == 1 && <div className="last-score">{score.at(-1)} +</div>}
        <div className="billubana">
          <div></div>
          <div
            ref={middleRef}
            className={`middle  ${state == 1 ? "farwordAnim" : ""}`}
            style={{ position: "relative", top: loc }}
          >
            <div className="bana"></div>
          </div>
          <div className="right">
            <div className="redpoint"></div>
            <div className="board"></div>
            <div className="backbone"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

// async function getData() {
//   const res = await fetch("https://jsonplaceholder.typicode.com/todos");
//   // The return value is *not* serialized
//   // You can return Date, Map, Set, etc.

//   if (!res.ok) {
//     // This will activate the closest `error.js` Error Boundary
//     throw new Error("Failed to fetch data");
//   }
//   console.log("llll");

//   return res.json();
// }
