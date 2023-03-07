import React from 'react';
import { UserProfile } from './UserProfile/User';
import { Statistics } from './Statistics/Statistics';
import user from './UserProfile/user.json';
import data from './Statistics/data.json';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
        backgroundColor: '#c2c1c1'
      }}
    >
      <p> Tast 1</p>
      {
        <UserProfile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
      }
      
      {<Statistics title="Upload stats" stats={data} />}
     
    </div>
  );
};
