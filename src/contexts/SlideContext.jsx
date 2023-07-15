import React, { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import firstSlide from "../images/Rectangle 7.png";
import secondSlide from "../images/Rectangle 7 (1).png";
import thirdSlide from "../images/newbg.jpg";

export const SlideContext = createContext();

export const SlideProvider = ({ children }) => {
  const slides = [
    {
      id: 1,
      image: firstSlide,
    },
    {
      id: 2,
      image: secondSlide,
    },
    {
      id: 3,
      image: thirdSlide,
    },
  ];

  const navigate = useNavigate();

  const [current, setCurrent] = useState(0);
  const [finish, setFinish] = useState(false);
  const [optionView, setOptionView] = useState(false);
  var [level, setLevel] = useState(1);

  const nextSlide = () => {
    if (current === slides.length - 2) {
      setFinish(true);
    }
    setCurrent((prev) => prev + 1);
    localStorage.setItem("slideId", current + 1);
  };

  const prevSlide = () => {
    const updatedCurrent = current - 1;
    if (updatedCurrent === slides.length - 2) {
      setFinish(false);
    }
    setCurrent(updatedCurrent);
    localStorage.setItem("slideId", updatedCurrent);
  };

  const finishSlide = () => {
    alert("Level " + level + " Complete.");
    setLevel((prev) => prev + 1);
    navigate("/");
    setCurrent(0);
    setFinish(false);
    localStorage.setItem("level", level + 1);
    localStorage.setItem("slideId", 0);
  };

  const handleClick = () => {
    setOptionView((prev) => !prev);
  };

  const handleLevel = (n) => {
    if (n <= level) {
      alert("Level already completed");
    }
  };

  const handleReset = () => {
    localStorage.setItem("slideId", 0);
    localStorage.setItem("level", 0);
    window.location.reload();
  };

  const closeButton = () => {
    setOptionView(false);
  };

  const homeButton = () => {
    navigate("/");
    setOptionView(false);
  };

  useEffect(() => {
    const lastLevel = parseInt(localStorage.getItem("level"));
    const slideId = parseInt(localStorage.getItem("slideId"));
    lastLevel ? setLevel(lastLevel) : setLevel(1);
    if (slideId && slideId === 2) {
      setCurrent(slideId);
      setFinish(true);
    } else if (slideId) {
      setCurrent(slideId);
    } else {
      setCurrent(0);
    }
  }, []);

  console.log("Current", current);

  return (
    <SlideContext.Provider
      value={{
        current,
        slides,
        nextSlide,
        prevSlide,
        finishSlide,
        handleClick,
        closeButton,
        homeButton,
        handleLevel,
        handleReset,
        optionView,
        finish,
        level,
      }}
    >
      {children}
    </SlideContext.Provider>
  );
};
