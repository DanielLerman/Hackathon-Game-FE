import React, { useContext } from "react";
import "../HomeStyle.css";
import { GameContext } from "../Contextprovider";
import ModalWindow from "./ModalWindow";

function Home() {
    const { handleClickTest } = useContext(GameContext);

    return (
        <div className="background d-flex justify-content-center flex-column">
            <div className="welcome-title align-self-center fw-bold">
                <span className="">Shots </span>
                <span className="">O'clock</span>
            </div>
            <ModalWindow />
        </div>
    );
}

export default Home;
