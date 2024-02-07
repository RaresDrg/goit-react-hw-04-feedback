import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

import StatisticsData from 'components/StatisticsData/StatisticsData';
import Notification from 'components/Notification/Notification';

const Statistics = ({ data }) => {
  const { total } = data;

  return (
    <div>
      <h2 className={styles['statistics-title']}>Statistics</h2>

      {total === 0 && <Notification message="There is no feedback" />}
      {total > 0 && <StatisticsData data={data} />}
    </div>
  );
};

Statistics.propTypes = {
  data: PropTypes.shape({
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
    total: PropTypes.number,
    positivePercentage: PropTypes.string,
  }),
};

export default Statistics;
