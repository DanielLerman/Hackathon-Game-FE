import { createContext, useContext} from "react";

export const GameContext = createContext();

export function useGameContext() {
    return useContext(GameContext);
  }

function GameContextprovider({ children }) {
    const handleClickTest = () => {
    alert("HELLOOOO!!")    
    };


  return (
    <GameContext.Provider value={{handleClickTest}}>
    {children}
  </GameContext.Provider>
  )
}

export default GameContextprovider