import React from 'react';
import Timer from './Timer';
import Settings from './Settings';
import Button from './Button';
import { GoSettings } from 'react-icons/go';
import './App.css';

class App extends React.Component {
    state = {
        active: null,
        paused: false,
        version: 0,
        settings: false,
        maxValue: 1200
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
        this.setState(prevState => ({ version: prevState.version + 1, active: null }));
    };

    toggleSettings = () => {
        this.setState(prevState => ({ settings: !prevState.settings, paused: !prevState.settings }));
    };

    handleSubmit = maxTime => {
        this.setState({ maxValue: maxTime * 60 }, () => {
            this.handleReset();
            this.toggleSettings();
        });
    };

    render() {
        const { active, version, paused, settings, maxValue } = this.state;

        return (
            <div key={version} className="App">
                {settings && <Settings onCancel={this.toggleSettings} onSubmit={this.handleSubmit} />}
                <Timer onTimerClick={this.handleTimerClick} active={active} initialValue={maxValue} isPaused={paused} />
                <div className="controls">
                    <Button disabled={!active} onClick={this.handleToggle}>
                        {paused ? 'PLAY' : 'PAUSE'}
                    </Button>
                    <Button disabled={!active} onClick={this.handleReset}>
                        RESET
                    </Button>
                    <Button onClick={this.toggleSettings}>
                        <GoSettings color="#c52424" size={25} />
                    </Button>
                </div>
                <Timer onTimerClick={this.handleTimerClick} active={active} initialValue={maxValue} isPaused={paused} />
            </div>
        );
    }
}

export default App;
