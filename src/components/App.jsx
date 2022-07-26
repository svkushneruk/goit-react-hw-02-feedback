import React, { Component } from 'react';
import { Section } from 'components/Section';
import { Statistics } from 'components/Statistics';
import { FeedbackOptions } from 'components/FeedbackOptions';
import { Notification } from 'components/Notification';
import css from 'components/App.module.css';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };
  countPositiveFeedbackPercentage = () => {
    return Math.round((this.state.good / this.countTotalFeedback()) * 100);
  };

  hendleClick = e => {
    const changingFeedback = e.target.textContent.toLowerCase();
    this.setState(prevState => ({
      [changingFeedback]: prevState[changingFeedback] + 1,
    }));
  };
  render() {
    return (
      <div className={css.app}>
        <h1 className={css.app__title}>Cafe Expresso</h1>
        <Section title="Please leave feedback">
          <FeedbackOptions options={3} onLeaveFeedback={this.hendleClick} />
        </Section>

        <Section title="Statistics">
          {this.countTotalFeedback() > 0 ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </div>
    );
  }
}

export default App;
