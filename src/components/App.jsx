import React, { Component } from 'react';
import { Section } from './SectionTitle/Section';
import { FeedbackOption } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import PropTypes from 'prop-types';

export class App extends Component {
  static propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  };
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleBtnClick = option => {
    this.setState(prevState => ({
      [option]: prevState[option] + 1,
    }));
  };

  render() {
    const totalCount = this.state.good + this.state.neutral + this.state.bad;
    const positivePercentage =
      totalCount === 0 ? 0 : ((this.state.good * 100) / totalCount).toFixed(0);

    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <Section title="Please leave feedback">
          <FeedbackOption
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={this.handleBtnClick}
          />
        </Section>
        <Section title="Statistics">
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={totalCount}
            positivePercentage={positivePercentage}
          />
        </Section>
      </div>
    );
  }
}
