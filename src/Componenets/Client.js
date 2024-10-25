import React from 'react'
import Avatar from 'react-avatar'

const Client = ({username} ) => {
    console.log(username)  
  return (
    <div>
      <div className='client'>
            <Avatar name={username} size={50} round="20px"/>
            <span className='username'>
                {username}
            </span>
      </div>
    </div>
  )
}

export default Client
