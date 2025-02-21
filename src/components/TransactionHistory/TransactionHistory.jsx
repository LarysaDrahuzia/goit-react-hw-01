import css from './TransactionHistory.module.css';

const TransactionHistory = ({ items }) => {
  return (
    <table className={css.table}>
      <thead className={css.title}>
        <tr className={css.row}>
          <th className={css.col}>Type</th>
          <th className={css.col}>Amount</th>
          <th className={css.col}>Currency</th>
        </tr>
      </thead>

      <tbody className={css.transactionData}>
        {items.map(({ id, type, amount, currency }) => {
          return (
            <tr className={css.row} key={id}>
              <td className={css.type}>{type}</td>
              <td className={css.amount}>{amount}</td>
              <td className={css.currency}>{currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default TransactionHistory;
