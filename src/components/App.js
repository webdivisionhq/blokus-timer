import React from 'react';
import Timer from './Timer';
import './App.css';

class App extends React.Component {
    state = {
        active: null,
        version: 0
    };

    handleTimerClick = timerId => {
        this.setState({ active: timerId });
    };

    handlePause = () => {
        this.setState({ active: null });
    };

    handleReset = () => {
        this.setState(prevState => ({ version: prevState.version + 1 }));
    };

    render() {
        const { active, version } = this.state;

        return (
            <div key={version} className="App">
                <Timer onTimerClick={this.handleTimerClick} active={active} initialValue={1200} />
                <div className="controls">
                    <button onClick={this.handlePause}>PAUSE</button>
                    <button onClick={this.handleReset}>RESET</button>
                </div>
                <Timer onTimerClick={this.handleTimerClick} active={active} initialValue={1200} />
            </div>
        );
    }
}

export default App;
