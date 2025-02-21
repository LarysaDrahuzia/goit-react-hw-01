import css from './Profile.module.css';

const Profile = ({ username, tag, location, image, stats }) => {
  return (
    <div className={css.container}>
      <div className={css.user}>
        <img className={css.image} src={image} alt={username} />
        <p className={css.username}>{username}</p>
        <p className={tag}>@{tag}</p>
        <p className={location}>{location}</p>
      </div>

      <ul className={css.stats}>
        <li>
          <span className={css.nick}>Followers</span>
          <span className={css.numb}>{stats.followers}</span>
        </li>
        <li>
          <span className={css.nick}>Views</span>
          <span className={css.numb}>{stats.views}</span>
        </li>
        <li>
          <span className={css.nick}>Likes</span>
          <span className={css.numb}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
