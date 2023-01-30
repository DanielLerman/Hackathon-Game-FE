import React, { useContext } from "react";
import { GameContext } from '../Contextprovider';

function Home() {
    const {  handleClickTest} = useContext(GameContext);

  return (
    <div onClick={handleClickTest}>Home</div>
  )
}

export default Home