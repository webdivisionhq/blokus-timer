import React from 'react';
import './Timer.css';
import classnames from 'classnames';
import { MdRefresh as RotateIcon } from 'react-icons/md';

const formatTime = seconds =>
  new Intl.DateTimeFormat('pl-PL', {
    minute: 'numeric',
    second: 'numeric'
  }).format(new Date(seconds * 1000));

class Timer extends React.Component {
  intervalId = null;
  timerId = Date.now();

  state = {
    value: this.props.initialValue,
    currentAngle: 0
  };

  handleButtonClick = () => {
    const { onTimerClick } = this.props;

    onTimerClick(this.timerId);

    this.startTimer();
  };

  rotateTimer = event => {
    event.stopPropagation();
    this.setState(prevState => ({
      currentAngle: (prevState.currentAngle + 90) % 360
    }));
  };

  startTimer = () => {
    if (this.intervalId) {
      return;
    }

    const { value } = this.state;

    if (value > 0 && !this.props.isPaused) {
      this.intervalId = setInterval(() => {
        this.setState(
          prevState => ({ value: prevState.value - 1 }),
          () => {
            if (value === 0) {
              clearInterval(this.intervalId);
            }
          }
        );
      }, 1000);
    }
  };

  componentWillUnmount() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  isActive = () => {
    const { active } = this.props;
    return active === this.timerId;
  };

  checkIfActive = () => {
    if (this.isActive() && !this.props.isPaused) {
      this.startTimer();
      return;
    }

    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  };

  render() {
    const { value, currentAngle } = this.state;

    this.checkIfActive();

    const classes = classnames('timer', { 'timer--active': this.isActive() });

    return (
      <button onClick={this.handleButtonClick} className={classes}>
        <div style={{ transform: `rotate(${currentAngle}deg)` }}>
          {formatTime(value)}
        </div>
        <span onClick={this.rotateTimer}>
          <RotateIcon size={25} />
        </span>
      </button>
    );
  }
}

export default Timer;
