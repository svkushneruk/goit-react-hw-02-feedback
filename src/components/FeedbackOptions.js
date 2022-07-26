import css from 'components/FeedbackOptions.module.css';

export const FeedbackOptions = ({ onLeaveFeedback }) => {
  return (
    <ul className={css.list}>
      <li className={css.list__item}>
        <button
          className={css.list__btn}
          type="button"
          onClick={onLeaveFeedback}
        >
          Good
        </button>
      </li>
      <li className={css.list__item}>
        <button
          className={css.list__btn}
          type="button"
          onClick={onLeaveFeedback}
        >
          Neutral
        </button>
      </li>
      <li className={css.list__item}>
        <button
          className={css.list__btn}
          type="button"
          onClick={onLeaveFeedback}
        >
          Bad
        </button>
      </li>
    </ul>
  );
};
