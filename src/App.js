import React, { useState } from 'react';
import Statistic from './components/statistic/Statistic';
import FeedbackOptions from './components/feedbackOptions/FeedbackOptions';
import Section from './components/section/Section';
export default function App() {
  const [bad, setBad] = useState(0);
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const options = {
    good,
    bad,
    neutral,
  };
  const handleLeaveFeedback = e => {
    const { name } = e.currentTarget;
    switch (name) {
      case 'good':
        setGood(state => state + 1);
        break;
      case 'bad':
        setBad(state => state + 1);
        break;
      case 'neutral':
        setNeutral(state => state + 1);
        break;
      default:
        return;
    }
  };
  const totalFeedback = () => {
    return good + bad + neutral;
  };
  const countPositiveFeedbackPercentage = () => {
    return totalFeedback() ? Math.round((good / totalFeedback()) * 100) : 0;
  };
  return (
    <Section title="Please leave feedback">
      <FeedbackOptions
        options={options}
        onLeaveFeedback={handleLeaveFeedback}
      />
      <Statistic
        goodFeedback={good}
        neutralFeedback={neutral}
        badFeedback={bad}
        total={totalFeedback()}
        positivePercentage={countPositiveFeedbackPercentage()}
      />
    </Section>
  );
}
