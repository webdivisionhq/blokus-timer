import React from 'react';
import Timer from './Timer';
import './App.css';

class App extends React.Component {
    state = {
        active: null,
        paused: false,
        version: 0
    };

    handleTimerClick = timerId => {
        this.setState({ active: timerId });
    };

    handleToggle = () => {
        this.setState(prevState => ({
            paused: !prevState.paused
        }));
    };

    handleReset = () => {
        this.setState(prevState => ({ version: prevState.version + 1, active: null }));
    };

    render() {
        const { active, version, paused } = this.state;

        return (
            <div key={version} className="App">
                <Timer onTimerClick={this.handleTimerClick} active={active} initialValue={1200} isPaused={paused} />
                <div className="controls">
                    {active && <button onClick={this.handleToggle}>{paused ? 'PLAY' : 'PAUSE'}</button>}
                    {active && <button onClick={this.handleReset}>RESET</button>}
                </div>
                <Timer onTimerClick={this.handleTimerClick} active={active} initialValue={1200} isPaused={paused} />
            </div>
        );
    }
}

export default App;
