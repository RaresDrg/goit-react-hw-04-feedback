import { useState } from 'react';

import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const action = {
    good: () => setGood(prev => prev + 1),
    neutral: () => setNeutral(prev => prev + 1),
    bad: () => setBad(prev => prev + 1),
  };

  const handleFeedback = state => action[state]();

  const countTotalFeedback = () => good + neutral + bad;

  const countPositiveFeedbackPercentage = () => {
    const percentage = ((good / countTotalFeedback()) * 100).toFixed(0);
    return percentage === 'NaN' ? '' : `${percentage} %`;
  };

  const statisticsData = {
    good,
    neutral,
    bad,
    total: countTotalFeedback(),
    positivePercentage: countPositiveFeedbackPercentage(),
  };

  return (
    <Section title="Please leave feedback">
      <FeedbackOptions options={action} handleFeedback={handleFeedback} />
      <Statistics data={statisticsData} />
    </Section>
  );
};

export default App;
