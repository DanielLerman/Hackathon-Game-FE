import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import Games from './components/Games';
import GameContextProvider from "./Contextprovider";
import IO from 'socket.io-client';

const socket = IO.connect('http://localhost:4000');

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
    element={<Games socket={socket}/>}
  /> 
  </Routes>
  </GameContextProvider>
  </>
  ) ;
}

export default App;
