import React from 'react';
import propTypes from 'prop-types';
import Notification from '../notification/Notification';
export default function Statistic({
  goodFeedback,
  badFeedback,
  neutralFeedback,
  total,
  positivePercentage,
}) {
  return total === 0 ? (
    <Notification message="No feedback given" />
  ) : (
    <div>
      <p>Statistics</p>
      <ul className="statisticList">
        <li className="statisticItem">
          Good: <span className="goodFeedback">{goodFeedback}</span>
        </li>
        <li className="statisticItem">
          Neutral: <span className="neutralFeedback">{neutralFeedback}</span>
        </li>
        <li className="statisticItem">
          Bad: <span className="badFeedback">{badFeedback}</span>
        </li>
        <li className="statisticItem">
          Total: <span className="totalFeedback">{total}</span>
        </li>
        <li className="statisticItem">
          Positive feedback:
          <span className="positiveFeedback">{positivePercentage}% </span>
        </li>
      </ul>
    </div>
  );
}
Statistic.propTypes = {
  good: propTypes.number,
  neutral: propTypes.number,
  bad: propTypes.number,
  total: propTypes.number,
  positivePercentage: propTypes.number,
};
