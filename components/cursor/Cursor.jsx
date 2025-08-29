import React, { useEffect, useRef } from "react";
import "./Cursor.css";

const Cursor = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    let mouseX = 0, mouseY = 0;

    const onMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      cursor.style.left = `${mouseX - 10}px`;
      cursor.style.top = `${mouseY - 10}px`;

      if (Math.random() > 0.6) createTrail(mouseX, mouseY);
      if (Math.random() > 0.85) createSparkle(mouseX, mouseY);
    };

    const onMouseDown = () => {
      cursor.classList.add("click");
      for (let i = 0; i < 3; i++) {
        setTimeout(() => createSparkle(mouseX, mouseY), i * 50);
      }
    };

    const onMouseUp = () => cursor.classList.remove("click");

    // Only trigger hover for elements with "cursor-hover" class
    const onMouseOver = (e) => {
      if (e.target.classList.contains("cursor-hover")) {
        cursor.classList.add("hover");
      }
    };

    const onMouseOut = (e) => {
      if (e.target.classList.contains("cursor-hover")) {
        cursor.classList.remove("hover");
      }
    };

    const createTrail = (x, y) => {
      const trail = document.createElement("div");
      trail.className = "cursor-trail";
      trail.style.left = `${x - 4}px`;
      trail.style.top = `${y - 4}px`;
      document.body.appendChild(trail);

      setTimeout(() => {
        trail.style.opacity = "0";
        setTimeout(() => document.body.removeChild(trail), 300);
      }, 100);
    };

    const createSparkle = (x, y) => {
      for (let i = 0; i < 6; i++) {
        const sparkle = document.createElement("div");
        sparkle.className = "sparkle";
        sparkle.style.left = `${x + (Math.random() - 0.5) * 40}px`;
        sparkle.style.top = `${y + (Math.random() - 0.5) * 40}px`;

        const size = Math.random() * 4 + 2;
        sparkle.style.width = `${size}px`;
        sparkle.style.height = `${size}px`;

        const sparkleColors = ["#db7093", "#c71585", "#dda0dd", "#f0e68c"];
        sparkle.style.background = sparkleColors[Math.floor(Math.random() * sparkleColors.length)];

        document.body.appendChild(sparkle);
        setTimeout(() => document.body.removeChild(sparkle), 1000);
      }
    };

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mousedown", onMouseDown);
    document.addEventListener("mouseup", onMouseUp);
    document.addEventListener("mouseover", onMouseOver);
    document.addEventListener("mouseout", onMouseOut);

    document.body.style.cursor = "none";

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mousedown", onMouseDown);
      document.removeEventListener("mouseup", onMouseUp);
      document.removeEventListener("mouseover", onMouseOver);
      document.removeEventListener("mouseout", onMouseOut);
      document.body.style.cursor = "default";
    };
  }, []);

  return <div className="cursor" ref={cursorRef}></div>;
};

export default Cursor;
