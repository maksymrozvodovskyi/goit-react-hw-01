import './App.module.css';
import userData from '../../userData.json';
import Profile from '../Profile/Profile';

const { username, tag, location, avatar, stats } = userData;

export default function App() {
  return (
    <div>
      <Profile
        name={username}
        tag={tag}
        location={location}
        image={avatar}
        stats={stats}
      />
    </div>
  );
}
