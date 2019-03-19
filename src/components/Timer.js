import React from "react";
import "./Timer.css";
import classnames from "classnames";

const formatTime = seconds =>
  new Intl.DateTimeFormat("pl-PL", {
    minute: "numeric",
    second: "numeric"
  }).format(new Date(seconds * 1000));

class Timer extends React.Component {
  intervalId = null;
  timerId = Date.now();

  state = {
    value: this.props.initialValue
  };

  handleButtonClick = () => {
    const { onTimerClick } = this.props;

    onTimerClick(this.timerId);

    this.startTimer();
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
    const { value } = this.state;

    this.checkIfActive();

    const classes = classnames(
      "timer",
      { "timer--active": this.isActive() }
      );

    return (
      <button onClick={this.handleButtonClick} className={classes}>
        <span>{formatTime(value)}</span>
      </button>
    );
  }
}

export default Timer;
