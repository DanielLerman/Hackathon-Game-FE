import React, { useState} from 'react';
import { useNavigate } from 'react-router-dom';
import '../ChooseName.css'

const Username = ({ socket }) => {
  const navigate = useNavigate();
  const [player, setPlayer] = useState({username:"", score:""});


  const handleSubmit = async (e) => {
    e.preventDefault();
    localStorage.setItem('userName', player);
    socket.emit('newUser', {player, socketID: socket.id });
    
    navigate(`/Games`);
  };
  const handleChange = e => {
    setPlayer({ ...player, [e.target.id]: e.target.value });
};



  return (    
  <>

    <form className="home__container background d-flex flex-column align-items-center" onSubmit={handleSubmit} >
      <h2 className="home__header chooseName-title p-2 my-5">Please choose a nickName!</h2>
      <label htmlFor="username" className='nickName-lable my-2'>nickName</label>
      <input
      placeholder='*'
        type="text"
        minLength={6}
        name="username"
        id="username"
        className="username__input rounded-pill border border-danger border-3 p-1 "
        value={player.username}
        onChange={handleChange}
        required
      />
      <button className="home__cta rounded-pill my-5  joinGame-btn">Join Game</button>
    </form>
    </>
  );
};

export default Username;