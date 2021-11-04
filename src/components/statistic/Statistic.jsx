import React from "react";
import propTypes from "prop-types";

export default function Statistic({good, bad,neutral,total,positivePercentage }) {
    return (
        <div>
            <p>Statistics</p>
            <ul className="statisticList">
                <li className="statisticItem">Good: <span className="goodFeedback">{good}</span></li>
                <li className="statisticItem">Neutral: <span className="neutralFeedback">{neutral}</span></li>
                <li className="statisticItem">Bad: <span className="badFeedback">{bad}</span></li>
                <li className="statisticItem">Total: <span className="totalFeedback">{total}</span></li>
                <li className="statisticItem">Positive feedback: <span className="positiveFeedback">{positivePercentage}%</span></li>
            </ul>
        </div>
       
    )
}
Statistic.propTypes = {
  good: propTypes.number,
  neutral: propTypes.number,
  bad: propTypes.number,
  total: propTypes.number,
  positivePercentage: propTypes.number,
};