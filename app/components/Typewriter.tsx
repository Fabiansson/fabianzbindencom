"use client";
import { useEffect, useState } from "react";
import clsx from "clsx";

interface TypewriterProps {
  text: string;
}

export default function Typewriter(props: TypewriterProps) {
  const [text, setText] = useState("");
  const [showCaret, setShowCaret] = useState(true);

  useEffect(() => {
    typewrite(props.text, 200, 500, 50);
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setShowCaret((prevShow) => !prevShow);
    }, 500);

    return () => clearInterval(intervalId);
  }, []);

  function typewrite(
    text: string,
    minTypeSpeed: number,
    maxTypeSpeed: number,
    initDelay: number
  ) {
    let str = "";
    let typeSpeed = 0;

    text.split("").forEach((c) => {
      typeSpeed += Math.random() * (maxTypeSpeed - minTypeSpeed) + minTypeSpeed;
      setTimeout(() => {
        str += c;
        setText(str);
      }, initDelay + typeSpeed);
    });
  }

  return (
    <div className="text-cdark before:content-['>\a0'] text-6xl">
      {text}
      <span
        className={clsx(
          "blink-caret relative top-0.5 inline-block w-3 h-14 bg-black ml-0.5",
          { invisible: showCaret }
        )}
      ></span>
    </div>
  );
}
