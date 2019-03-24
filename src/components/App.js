import React from 'react';
import Timer from './Timer';
import Settings from './Settings';
import Button from './Button';
import classnames from 'classnames';
import { GoSettings as SettingsIcon } from 'react-icons/go';
import css from './App.module.css';

class App extends React.Component {
  state = {
    active: null,
    paused: false,
    version: 0,
    settings: false,
    maxValue: 1200,
    userCount: 'two'
  };

  handleTimerClick = timerId => {
    this.setState({ active: timerId, paused: false });
  };

  handleToggle = () => {
    this.setState(prevState => ({
      paused: !prevState.paused
    }));
  };

  handleReset = () => {
    this.setState(prevState => ({
      version: prevState.version + 1,
      active: null
    }));
  };

  toggleSettings = () => {
    this.setState(prevState => ({
      settings: !prevState.settings,
      paused: !prevState.paused
    }));
  };

  handleSubmit = (maxTime, users) => {
    this.setState({ maxValue: maxTime * 60, userCount: users }, () => {
      this.handleReset();
      this.toggleSettings();
    });
  };

  render() {
    const {
      active,
      version,
      paused,
      settings,
      maxValue,
      userCount
    } = this.state;

    const classes = classnames(css.App, {
      [css['App--four']]: userCount === 'four'
    });

    const timerClass = userCount === 'four' ? 'responsive' : undefined;

    return (
      <div key={version} className={classes}>
        {settings && (
          <Settings
            onCancel={this.toggleSettings}
            onSubmit={this.handleSubmit}
            userCount={userCount}
          />
        )}
        <Timer
          onTimerClick={this.handleTimerClick}
          active={active}
          initialValue={maxValue}
          isPaused={paused}
          className={timerClass}
        />
        {userCount === 'four' && (
          <Timer
            onTimerClick={this.handleTimerClick}
            active={active}
            initialValue={maxValue}
            isPaused={paused}
            className={timerClass}
          />
        )}
        <div className={css.controls}>
          <Button disabled={!active} onClick={this.handleToggle}>
            {paused ? 'PLAY' : 'PAUSE'}
          </Button>
          <Button disabled={!active} onClick={this.handleReset}>
            RESET
          </Button>
          <Button onClick={this.toggleSettings}>
            <SettingsIcon color="#c52424" size={25} />
          </Button>
        </div>
        <Timer
          onTimerClick={this.handleTimerClick}
          active={active}
          initialValue={maxValue}
          isPaused={paused}
          className={timerClass}
        />
        {userCount === 'four' && (
          <Timer
            onTimerClick={this.handleTimerClick}
            active={active}
            initialValue={maxValue}
            isPaused={paused}
            className={timerClass}
          />
        )}
      </div>
    );
  }
}

export default App;
