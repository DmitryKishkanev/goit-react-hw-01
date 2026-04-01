import userData from '@/userData.json';
import friends from '@/friends.json';
import Profile from '../Profile';
import FriendList from '../FriendList/FriendList';
import style from 'components/App/App.module.css';

export default function App() {
  return (
    <div className={style.app}>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
    </div>
  );
}
