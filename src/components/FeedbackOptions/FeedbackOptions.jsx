import PropTypes from 'prop-types';
import styles from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, handleFeedback }) => {
  const handleClick = event => {
    const stateForUpdate = event.target.textContent;
    handleFeedback(stateForUpdate);
  };

  return (
    <div>
      {Object.keys(options).map((item, index) => (
        <button
          key={index}
          type="button"
          className={styles['feedback-btn']}
          onClick={handleClick}
        >
          {item}
        </button>
      ))}
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.object.isRequired,
  handleFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
