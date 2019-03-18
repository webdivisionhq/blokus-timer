import React from "react";
import Timer from "./Timer";
import Settings from "./Settings";
import Button from "./Button";
import { GoSettings } from "react-icons/go";
import "./App.css";

class App extends React.Component {
  state = {
    active: null,
    paused: false,
    version: 0,
    settings: false,
    maxValue: 1200,
    userCount: "two"
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
    /* this.handleHiddenTimer(); */
  };

  handleHiddenTimer = () => {
    const { userCount } = this.state;
    if (userCount === "four") {
      return false;
    } else {
      return true;
    }
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

    return (
      <div key={version} className="App">
        {settings && (
          <Settings
            onCancel={this.toggleSettings}
            onSubmit={this.handleSubmit}
          />
        )}
        <div className={userCount}>
          <Timer
            onTimerClick={this.handleTimerClick}
            active={active}
            initialValue={maxValue}
            isPaused={paused}
          />
          <Timer
            onTimerClick={this.handleTimerClick}
            active={active}
            initialValue={maxValue}
            isPaused={paused}
            isHidden={this.handleHiddenTimer()}
          />
        </div>
        <div className="controls">
          <Button disabled={!active} onClick={this.handleToggle}>
            {paused ? "PLAY" : "PAUSE"}
          </Button>
          <Button disabled={!active} onClick={this.handleReset}>
            RESET
          </Button>
          <Button onClick={this.toggleSettings}>
            <GoSettings color="#c52424" size={25} />
          </Button>
        </div>
        <div className={userCount}>
          <Timer
            onTimerClick={this.handleTimerClick}
            active={active}
            initialValue={maxValue}
            isPaused={paused}
          />
          <Timer
            onTimerClick={this.handleTimerClick}
            active={active}
            initialValue={maxValue}
            isPaused={paused}
            isHidden={this.handleHiddenTimer()}
          />
        </div>
      </div>
    );
  }
}

export default App;
