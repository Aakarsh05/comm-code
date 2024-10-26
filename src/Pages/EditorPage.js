import React, { useState } from 'react'
import Client from '../Componenets/Client';
import Editor from '../Componenets/Editor';

const EditorPage = () => {

  const [clients,setClients] = useState([
    {socketId: 1,username: "Akki V"},
    {socketId: 2,username: "Raj A"},
    {socketId: 3,username: "Vats H"}
  ]);

  return (
    <div className='mainWrap'>
        <div className='aside'>
            <div className='asideInner'>
              <div className='logo'>
                  <img className='logoImage' src='/logo.png' alt='logo' />
              </div>
              <h3>Connected</h3>
              <div className='clientsList'>
                  {
                    clients.map((client) => (
                      <Client key={client.socketId} 
                      username = {client.username}/>
                    ))
                  }
              </div>
            </div>
            <button className="btn copyBtn">Copy Room ID</button>
            <button className='btn leaveBtn'>Leave</button>
        </div>
        <div className='editorWrap'>
          <Editor/>
        </div>
    </div>
  )
}

export default EditorPage
