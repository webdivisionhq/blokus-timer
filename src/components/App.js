import React from 'react';
import './App.css';

const formatTime = seconds =>
    new Intl.DateTimeFormat('pl-PL', { minute: 'numeric', second: 'numeric' }).format(new Date(seconds * 1000));

class App extends React.Component {
    state = {
        active: null,
        timer: 20
    };

    componentDidMount() {
        this.firstInterval = setInterval(() => {
            this.setState(
                prevState => ({ timer: prevState.timer - 1 }),
                () => {
                    if (this.state.timer === 0) {
                        clearInterval(this.firstInterval);
                    }
                }
            );
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.firstInterval);
    }

    render() {
        const { timer } = this.state;

        return (
            <div className="App">
                <button data-name="a" onClick={this.handleButtonClick} className="timer">
                    {formatTime(timer)}
                </button>
                <button data-name="b" onClick={this.handleButtonClick} className="timer timer--active">
                    53:23
                </button>
            </div>
        );
    }
}

export default App;
