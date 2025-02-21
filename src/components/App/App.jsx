import Profile from '../Profile/Profile';
import userData from '../../userData.json';
import friends from '../../friends.json';
import FriendList from '../FriendList/FriendList';
import transactions from '../../transactions.json';
import TransactionHistory from '../TransactionHistory/TransactionHistory';
import css from './App.module.css';

const App = () => {
  return (
    <>
      <h2 className={css.title}>Social network profile</h2>
      <Profile
        username={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <h2 className={css.title}>Friends list</h2>
      <FriendList friends={friends} />

      <h2 className={css.title}>Transaction history</h2>
      <TransactionHistory items={transactions} />
    </>
  );
};

export default App;
