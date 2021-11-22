import React from 'react';
import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css';
export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <ul className={s.btnList}>
      {Object.keys(options).map(option => {
        return (
          <li key={option}>
            <button
              className={s.btn}
              type="button"
              name={option}
              onClick={onLeaveFeedback}
            >
              {option}
            </button>
          </li>
        );
      })}
    </ul>
  );
}
FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
};
