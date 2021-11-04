import React, {Component} from "react";

import Statistic from './components/statistic/Statistic'
import FeedbackOptions from './components/feedbackOptions/FeedbackOptions'
import Section from './components/section/Section'
import Notification from './components/notification/Notification'

const options = ['good', 'neutral', 'bad'];

export default class App extends Component {
  state = {
  good: 0,
  neutral: 0,
  bad: 0
  }
 
  onLeaveFeedback = option =>
    this.setState(prevState => ({ [option]: prevState[option] + 1 }));
  
  countTotalFeedback() {
    return (
       this.state.good + this.state.bad + this.state.neutral
    );
  }
  countPositiveFeedbackPercentage() {
     return Math.round((this.state.good / this.countTotalFeedback()) * 100);
  }
  render() {
    const { good, bad, neutral } = this.state;
    const total = this.countTotalFeedback();
    return(
    <>
        <Section title="Please leave feedback" >
        
          <FeedbackOptions options={options} onLeaveFeedback={this.onLeaveFeedback} />
        
        {total === 0 ? (
          <Notification message="No feedback given" />
        ) :
          (
              <Statistic
                good={good}
                neutral={neutral}
                bad={bad}
                total={total}
                positivePercentage={
                  total
                  ? this.countPositiveFeedbackPercentage()
                   : 0
            } />
          )
        }
      </Section>
    </>
  );
  }
  }
