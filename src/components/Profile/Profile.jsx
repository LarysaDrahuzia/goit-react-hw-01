import css from './Profile.module.css';

export default function Profile({
  user: { username, tag, location, image, stats },
}) {
  return (
    <div>
      <div className={css.user}>
        <img src={image} alt={username} />
        <p className={css.username}>{username}</p>
        <p className={tag}>{tag}</p>
        <p className={location}>{location}</p>
      </div>

      <ul className={css.stats}>
        <li className={css.followers}>
          <span className={css.nick}>Followers</span>
          <span className={css.numb}>{stats.followers}</span>
        </li>
        <li className={css.stats}>
          <span className={css.nick}>Views</span>
          <span className={css.numb}>{stats.views}</span>
        </li>
        <li className={css.stats}>
          <span className={css.nick}>Likes</span>
          <span className={css.numb}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}
