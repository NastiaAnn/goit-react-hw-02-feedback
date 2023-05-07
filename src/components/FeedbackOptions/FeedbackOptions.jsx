import css from '../FeedbackOptions/FeedbackOptions.module.css';
// import PropTypes from 'prop-types';

export const FeedbackOption = ({ options, onLeaveFeedback }) => {
  return (
    <div className={css.btn_set}>
      {options.map(option => (
        <button
          key={option}
          type="button"
          className={css.button}
          onClick={() => onLeaveFeedback(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
};
