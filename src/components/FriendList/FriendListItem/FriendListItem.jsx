import clsx from 'clsx';
import styles from './FriendListItem.module.css';

export default function FriendListItem({ avatar, name, isOnline }) {
  return (
    <div>
      <img src={avatar} alt={name} width="48" />
      <p>{name}</p>

      <p
        className={clsx(
          styles.status,
          isOnline ? styles.online : styles.offline,
        )}
      >
        {isOnline ? 'Online' : 'offline'}
      </p>
    </div>
  );
}
