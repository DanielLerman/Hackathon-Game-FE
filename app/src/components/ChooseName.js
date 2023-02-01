import React, { useState} from 'react';
import { useNavigate } from 'react-router-dom';
import '../ChooseName.css'

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
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
        required
      />
      <button className="home__cta rounded-pill my-5  joinGame-btn">Join Game</button>
    </form>
    </>
  );
};

export default Username;