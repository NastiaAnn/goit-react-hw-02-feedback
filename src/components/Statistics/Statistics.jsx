import css from '../Statistics/Statistics.module.css';
// import PropTypes from 'prop-types';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <div className={css.statistics}>
      {/* {total === 0 && <p>You have {unreadMessages.length} unread messages.</p>} */}
      <p className={css.statistic_text}>Good: {good}</p>
      <p className={css.statistic_text}>Neutral: {neutral}</p>
      <p className={css.statistic_text}>Bad: {bad}</p>
      <p className={css.statistic_text}>Total: {total}</p>
      <p className={css.statistic_text}>
        Positive Percentage: {positivePercentage}
      </p>
    </div>
  );
};
