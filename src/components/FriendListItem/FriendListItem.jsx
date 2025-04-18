import css from './FriendListItem.module.css';
import clsx from 'clsx';

export default function FriendListItem({
  friends: { avatar, name, isOnline },
}) {
  return (
    <div>
      <img src={avatar} alt={name} width="48" />
      <p>{name}</p>
      <p>{isOnline}</p>
    </div>
  );
}
