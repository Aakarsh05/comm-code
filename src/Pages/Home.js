import React from 'react';

const Home = () => {
  return (
    <div className="homePageWrapper">
      <div className="formWrapper">
          <img className='homePageLogo' src='/logo.png' alt = "logo"/>
          <h4 className='mainLabel'>Paste Invitation Room ID</h4>

          <div className="inputGroup">
              <input type="text" className='inputBox' placeholder='Room ID' />
              <input type="text" className='inputBox' placeholder='USERNAME' />
              <button className='btn joinBtn'> Join </button>
          </div>

          <span className='createInfo'>
              If you Don't have an Invite then create &nbsp; 
              <a href="" className='createNewBtn'>
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
