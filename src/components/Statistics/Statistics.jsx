import css from '../Statistics/Statistics.module.css';
import { Notification } from 'components/Notification/Notification';
import PropTypes from 'prop-types';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <div className={css.statistics}>
      {total === 0 ? (
        <Notification message="There is no feedback" />
      ) : (
        <div className={css.statistics_wrap}>
          <p className={css.statistic_text}>Good: {good}</p>
          <p className={css.statistic_text}>Neutral: {neutral}</p>
          <p className={css.statistic_text}>Bad: {bad}</p>
          <p className={css.statistic_text}>Total: {total}</p>
          <p className={css.statistic_text}>
            Positive Percentage: {positivePercentage}
          </p>
        </div>
      )}
    </div>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
