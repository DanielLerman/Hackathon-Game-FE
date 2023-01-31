import { createContext, useContext,useState} from "react";

export const GameContext = createContext();

export function useGameContext() {
    return useContext(GameContext);
  }

function GameContextprovider({ children }) {
  const [user, setUser]=useState({userName:'',email:'',password:''});

   

  const valueToShere={
   
  }


  return (
    <GameContext.Provider value={valueToShere}>
    {children}
  </GameContext.Provider>
  )
}

export default GameContextprovider