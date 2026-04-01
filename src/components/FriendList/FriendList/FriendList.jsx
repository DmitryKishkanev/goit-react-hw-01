import FriendListItem from '../FriendListItem';
import styles from './FriendList.module.css';

export default function FriendList({ friends }) {
  return (
    <ul className={styles.friedsList}>
      {friends.map(friend => (
        <li className={styles.friedsItem} key={friend.id}>
          <FriendListItem
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
          />
        </li>
      ))}
    </ul>
  );
}
