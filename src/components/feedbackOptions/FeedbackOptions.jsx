import React from "react";
import PropTypes from "prop-types";
import s from './FeedbackOptions.module.css'

export default function FeedbackOptions({options, onLeaveFeedback}) {
    return (
        <ul className={s.btnList}>
            {options.map(option => {
                return (
                <li key={option}>
                    <button
                        className={s.btn}
                        type="button"
                        value={option}
                        onClick={() => onLeaveFeedback(option)}
                    >
                        {option}
                    </button>
                </li>
            )
                
            }
            )}
        </ul>
    )
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};