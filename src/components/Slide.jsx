import React, { useContext } from "react";
import { SlideContext } from "../contexts/SlideContext";
import option from "../images/align-justify.png";
import "./Slide.css";
import { Icon } from "@iconify/react";

function Slide() {
  const {
    current,
    prevSlide,
    nextSlide,
    finishSlide,
    handleClick,
    optionView,
    closeButton,
    homeButton,
    slides,
    finish,
  } = useContext(SlideContext);
  const slide = slides[current];

  return (
    <div className="mainDiv">
      <div>
        <div className="optionPart">
          <button onClick={handleClick} className="optionButton">
            <img src={option} alt="Option" style={{ width: "25px" }} />
          </button>
          <div className={`optionList ${optionView && "optionList2"}`}>
            <button onClick={closeButton} className="optionListButton">
              <Icon icon="material-symbols:close" width="24" />
            </button>
            <button onClick={homeButton} className="optionListButton">
              <Icon icon="ri:home-line" width="24" />
            </button>
          </div>
        </div>
        <div className="slidePart">
          <img src={slide.image} alt={`Slide ${slide.id}`} />
        </div>
        <div className="buttonPart">
          <button
            className={`slideButton1 ${current === 0 && "disabledButton"}`}
            onClick={prevSlide}
          >
            Back
          </button>
          {finish ? (
            <button className="slideButton2" onClick={finishSlide}>
              Finish
            </button>
          ) : (
            <button className="slideButton2" onClick={nextSlide}>
              Next
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Slide;
