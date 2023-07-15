import React, { useContext } from "react";
import "./Level.css";
import { SlideContext } from "../contexts/SlideContext";
import levelLogo from "../images/38 1.png";
import levelArrow1 from "../images/Group 12.png";
import levelArrow2 from "../images/Group 11.png";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

function Level() {
  const { level, handleLevel, handleReset } = useContext(SlideContext);

  return (
    <div className="mainBody">
      <div className="row row1">
        <div className="col1">
          <Link
            to={level > 1 ? "/" : "/slide"}
            onClick={() => level > 1 && handleLevel(1)}
          >
            <button className="levelButton">
              <img className="levelImg" src={levelLogo} alt="" />
            </button>
          </Link>

          <p className="leveltext">
            Level 1{" "}
            <span className={level >= 2 ? "completeTick" : "disabledTick"}>
              <Icon icon="mdi:tick-circle" color="green" />
            </span>
          </p>
        </div>
        <div className={level === 1 ? "col2 arrow" : "col2"}>
          <img src={levelArrow1} alt="" />
        </div>
      </div>
      <div className={level < 2 ? "disabledRow row2" : "row row2"}>
        <div className={level === 2 ? "col2 arrow" : "col2"}>
          <img src={levelArrow2} alt="" />
        </div>
        <div className="col1">
          <Link
            to={level > 2 ? "/" : "/slide"}
            onClick={() => level > 2 && handleLevel(2)}
          >
            <button className="levelButton">
              <img className="levelImg" src={levelLogo} alt="" />
            </button>
          </Link>
          <p className="leveltext">
            Level 2{" "}
            <span className={level >= 3 ? "completeTick" : "disabledTick"}>
              <Icon icon="mdi:tick-circle" color="green" />
            </span>
          </p>
        </div>
      </div>
      <div className={level < 3 ? "disabledRow row3" : "row row3"}>
        <div className="col1">
          <Link
            to={level > 3 ? "/" : "/slide"}
            onClick={() => level > 3 && handleLevel(3)}
          >
            <button className="levelButton">
              <img className="levelImg" src={levelLogo} alt="" />
            </button>
          </Link>
          <p className="leveltext">
            Level 3
            <span className={level >= 4 ? "completeTick" : "disabledTick"}>
              <Icon icon="mdi:tick-circle" color="green" />
            </span>
          </p>
        </div>
        <div className={level === 3 ? "col2 arrow" : "col2"}>
          <img src={levelArrow1} alt="" />
        </div>
      </div>
      <div className={level < 4 ? "disabledRow row4" : "row row4"}>
        <div className={level === 4 ? "col2 arrow" : "col2"}>
          <img src={levelArrow2} alt="" />
        </div>
        <div className="col1">
          <Link
            to={level > 4 ? "/" : "/slide"}
            onClick={() => level > 4 && handleLevel(4)}
          >
            <button className="levelButton">
              <img className="levelImg" src={levelLogo} alt="" />
            </button>
          </Link>
          <p className="leveltext">
            Level 4
            <span className={level >= 5 ? "completeTick" : "disabledTick"}>
              <Icon icon="mdi:tick-circle" color="green" />
            </span>
          </p>
        </div>
      </div>
      <div className={level < 5 ? "disabledRow row5" : "row row5"}>
        <div className="col1">
          <Link
            to={level > 5 ? "/" : "/slide"}
            onClick={() => level > 5 && handleLevel(5)}
          >
            <button className="levelButton">
              <img className="levelImg" src={levelLogo} alt="" />
            </button>
          </Link>
          <p className="leveltext">
            Level 5
            <span className={level === 6 ? "completeTick" : "disabledTick"}>
              <Icon icon="mdi:tick-circle" color="green" />
            </span>
          </p>
        </div>
      </div>
      <button className="resetButton" onClick={handleReset}>
        Reset Game
      </button>
    </div>
  );
}

export default Level;
