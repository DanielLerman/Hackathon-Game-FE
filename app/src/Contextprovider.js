import { createContext, useContext,useState} from "react";

export const GameContext = createContext();

export function useGameContext() {
    return useContext(GameContext);
  }

function GameContextprovider({ children }) {
  const [user, setUser]=useState({nickName:'',email:'',password:''});
  const [userInfo, setUserInfo]=useState({nickName:'',email:'',password:'',repassword:''});

   

  const valueToShere={
    setUserInfo,
    userInfo

   
  }


  return (
    <GameContext.Provider value={valueToShere}>
    {children}
  </GameContext.Provider>
  )
}

export default GameContextprovider