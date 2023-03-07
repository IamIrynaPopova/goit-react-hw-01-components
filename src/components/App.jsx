import React from 'react';
import { UserProfile } from './UserProfile/User';
import user from './UserProfile/user.json';
import { Statistics } from './Statistics/Statistics';
import data from './Statistics/data.json';
import { FriendList } from './FriendList/FriendList';
import friends from './FriendList/friends.json';

export const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
        backgroundColor: '#c2c1c1',
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
      <p> Tast 2</p>
      {<Statistics title="Upload stats" stats={data} />}
      <p> Tast 3</p>
      {<FriendList friends={friends} />}
    </div>
  );
};
