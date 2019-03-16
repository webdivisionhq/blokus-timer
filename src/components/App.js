import React from 'react';
import Timer from './Timer';
import Settings from './Settings';
import Button from './Button';
import { GoSettings } from 'react-icons/go';
import cln from 'classnames';
import './App.css';

class App extends React.Component {
    state = {
        active: null,
        paused: false,
        version: 0,
        settings: false
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

    render() {
        const { active, version, paused, settings } = this.state;

        return (
            <div key={version} className="App">
                {settings && <Settings />}
                <Timer onTimerClick={this.handleTimerClick} active={active} initialValue={1200} isPaused={paused} />
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
                <Timer onTimerClick={this.handleTimerClick} active={active} initialValue={1200} isPaused={paused} />
            </div>
        );
    }
}

export default App;
