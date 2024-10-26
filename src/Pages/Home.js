import React, { useState } from 'react';
import {v4 as uuidV4} from 'uuid';
import toast from 'react-hot-toast';
import {useNavigate, userNavigate} from 'react-router-dom';

const Home = () => {

  const navigate = useNavigate();
  const [roomId, setRoomId] = useState('');
  const [userId, setUsername] = useState('');

  const createNewRoom = (e) => {
    e.preventDefault();
    const id = uuidV4();
    setRoomId(id);
    toast.success(`RoomID ${id} created`);
    // console.log(id);
  };

  const joinRoom = (e) => {
    if(!roomId || !userId) 
    {
      toast.error(`RoomID and Username is Required`);
      return;
    }

    // Redirect back to the Default.
    navigate(`/editor/${roomId}`, {
      state: {
        userId,
      },
    })
  };

  const handleInputEnter = (e) => {
      console.log('event',e.code);
      if(e.code == 'Enter')
      {
        joinRoom();
      }
  };

  return (
    <div className="homePageWrapper">
      <div className="formWrapper">
          <img className='homePageLogo' src='/logo.png' alt = "logo"/>
          <h4 className='mainLabel'>Paste Invitation Room ID</h4>

          <div className="inputGroup">
              <input type="text" className='inputBox' placeholder='Room ID' onChange = {(e) => setRoomId(e.target.value)} value={roomId} onKeyUp={handleInputEnter}/>
              <input type="text" className='inputBox' placeholder='USERNAME' onChange = {(e) => setUsername(e.target.value)} value={userId} onKeyUp={handleInputEnter}/>
              <button className='btn joinBtn' onClick={joinRoom}> Join </button>
          </div>

          <span className='createInfo'>
              If you Don't have an Invite then create &nbsp; 

          <a onClick={createNewRoom}  // Pass the function without calling it
          href=""
          className='createNewBtn'>
          new Room
          </a>
          </span>
      </div>
      <footer>
        <h4>Built with Passion</h4>
      </footer>
    </div>
  );
};

export default Home;
