import React from 'react';
import Timer from './Timer';
import './App.css';

class App extends React.Component {
    state = {
        active: null
    };

    handleTimerClick = timerId => {
        this.setState({ active: timerId });
    };

    render() {
        const { active } = this.state;

        return (
            <div className="App">
                <Timer onTimerClick={this.handleTimerClick} active={active} initialValue={1200} />
                <div className="controls">
                    <button>PAUSE</button>
                    <button>RESET</button>
                </div>
                <Timer onTimerClick={this.handleTimerClick} active={active} initialValue={1200} />
            </div>
        );
    }
}

export default App;
