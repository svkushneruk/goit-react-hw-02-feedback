import css from 'components/FeedbackOptions.module.css';

export const FeedbackOptions = ({ onLeaveFeedback, options }) => {
  return (
    <ul className={css.list}>
      {options.map(option => {
        return (
          <li className={css.list__item} key={option}>
            <button
              className={css.list__btn}
              type="button"
              onClick={() => onLeaveFeedback(option)}
            >
              {option}
            </button>
          </li>
        );
      })}
    </ul>
  );
};
