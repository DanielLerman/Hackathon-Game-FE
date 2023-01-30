import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import Games from './components/Games';
import GameContextProvider from "./Contextprovider";

function App() {
  return(
    <>
    <GameContextProvider>
    <Routes>
    <Route
    path="/"
    index
    element={<Home/>}
  />  
   <Route
    path="/dashboard"
    index
    element={<Dashboard/>}
  /> 
   <Route
    path="/games"
    index
    element={<Games/>}
  /> 
  </Routes>
  </GameContextProvider>
  </>
  ) ;
}

export default App;
