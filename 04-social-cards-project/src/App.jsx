import React from 'react'
import Cards from './components/Cards'
import influencers from './components/InfData';

const App = () => {

  return (
    <div>
    <h1 className='heading'>Influencers</h1>
    <div className='cards-containe'>
      {influencers.map((user) => (
        <Cards 
          key={user.id} 
          user={user}
          images={user.images}
          profile={user.profileImg}
          username={user.username}
          name={user.name}
          bio={user.bio}
          media={user.media}
          followers={user.followers}
          following={user.following}
        />
      ))}
    </div>
    </div>
  )
}

export default App