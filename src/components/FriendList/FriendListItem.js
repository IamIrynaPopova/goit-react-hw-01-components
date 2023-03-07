import PropTypes from 'prop-types';
import css from './FriendList.module.css';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className={css.item}>
      <span className={isOnline ? css.status : css.isOffline}>{isOnline}</span>
      <img className={css.avatar} src={avatar} alt={name} width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
};

FriendListItem.prototype = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string,
  isOnline: PropTypes.bool.isRequired,
};
