import React, { useState} from 'react';
import { useNavigate } from 'react-router-dom';

const Username = ({ socket }) => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState('');


  const handleSubmit = async (e) => {
    e.preventDefault();
    localStorage.setItem('userName', userName);
    socket.emit('newUser', {userName, socketID: socket.id });
    navigate(`/Games`);
  };



  return (    
  <>

    <form className="home__container" onSubmit={handleSubmit}>
      <h2 className="home__header">Please choose a username!</h2>
      <label htmlFor="username">Username</label>
      <input
        type="text"
        minLength={6}
        name="username"
        id="username"
        className="username__input"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
        required
      />
      <button className="home__cta">Join game</button>
    </form>
    </>
  );
};

export default Username;