import React from 'react'
import { use } from 'react';

const Cards = ({ user }) => {
  return (
    <div className='parent'>
      <div className="ptop">
        {user.images.slice(0, 5).map((img, i) => (
          <img
            key={i}
            src={img}
            alt="media"
          />
        ))}
      </div>

      <div className='center'>
        <div className='top'>
          <img src={user.profileImg} alt="profile" className='profile-img' />
          <button className='menu-btn'>...</button>
        </div>
        <h3 className='username'>{user.username}</h3>
        <p className='user-name'>{user.name}</p>
        <p className='bio'>
          {user.bio}
        </p>
      </div>

      <div className='bottom'>
        <div className='stats'>
          <h3>{user.media}</h3>
          <p>Media</p>
        </div>
        <div className='stats'>
          <h3>{user.followers}</h3>
          <p>Followers</p>
        </div>
        <div className='stats'>
          <h3>{user.following}</h3>
          <p>Follwing</p>
        </div>
      </div>
    </div>
  )
}

export default Cards