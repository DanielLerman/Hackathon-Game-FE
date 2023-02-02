import React, { useContext } from "react";
import "../HomeStyle.css";
import { GameContext } from "../Contextprovider";
import ModalWindow from "./ModalWindow";

function Home() {
  const { handleClickTest } = useContext(GameContext);

  return (
    <div className="background d-flex justify-content-center flex-column">
      <svg viewBox="0 0 100 140">
        <defs>
          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="2" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 5 -2"
              result="gooey"
            />
            <feComposite in="SourceGraphic" in2="gooey" operator="atop" />
          </filter>
        </defs>
        <rect id="box" x="10" y="0" width="80" height="0">
          <animate
            attributeName="height"
            from="0"
            to="85"
            dur="2s"
            fill="freeze"
            begin="1s"
          />
          <animate
            attributeName="y"
            from="105"
            to="20"
            dur="2s"
            fill="freeze"
            begin="1s"
          />
        </rect>
        <g>
          <path class="glass" d="M0 0 L0 140 L100 140 L100 0"></path>
          <rect class="glass" x="0" y="110" width="100" height="30" />
        </g>
      </svg>
      <div className="welcome-title align-self-center fw-bold">
        <span className="">Shots </span>
        <span className="">O'clock</span>
      </div>
      <ModalWindow />
    </div>
  );
}

export default Home;
