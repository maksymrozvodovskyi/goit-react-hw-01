import css from './App.module.css';

import userData from '../../userData.json';
import friends from '../../friends.json';

import Profile from '../Profile/Profile';
import FriendList from '../FriendList/FriendList';

const { username, tag, location, avatar, stats } = userData;

export default function App() {
  return (
    <div className={css.container}>
      <Profile
        name={username}
        tag={tag}
        location={location}
        image={avatar}
        stats={stats}
      />
      <FriendList friends={friends} />
    </div>
  );
}
