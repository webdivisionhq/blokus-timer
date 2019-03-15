import React from 'react';
import './App.css';

const formatTime = seconds =>
    new Intl.DateTimeFormat('pl-PL', { minute: 'numeric', second: 'numeric' }).format(new Date(seconds * 1000));

class App extends React.Component {
    state = {
        active: null,
        timers: {
            a: {
                currentValue: 20,
                intervalId: null
            },
            b: {
                currentValue: 20,
                intervalId: null
            }
        }
    };
    // TODO this is MVP version - refactor this to get rid of this state update hell!!!!!!!
    handleButtonClick = event => {
        const id = event.target.dataset.name;
        const { timers, active } = this.state;

        if (active !== null && active !== id) {
            clearInterval(this.state.timers[active].intervalId);
            this.setState(
                prevState => ({
                    timers: {
                        ...prevState.timers,
                        [active]: {
                            ...prevState.timers[active],
                            intervalId: null
                        }
                    }
                }),
                () => {
                    this.setState({ active: id });
                }
            );
        } else {
            this.setState({ active: id });
        }

        if (timers[id].intervalId === null && timers[id].currentValue > 0) {
            this.setState(prevState => ({
                timers: {
                    ...prevState.timers,
                    [id]: {
                        ...prevState.timers[id],
                        intervalId: this.startTimer(id)
                    }
                }
            }));
        }
    };

    startTimer(id) {
        return setInterval(() => {
            this.setState(
                prevState => ({
                    timers: {
                        ...prevState.timers,
                        [id]: {
                            ...prevState.timers[id],
                            currentValue: prevState.timers[id].currentValue - 1
                        }
                    }
                }),
                () => {
                    if (this.state.timers[id].currentValue === 0) {
                        clearInterval(this.state.timers[id].intervalId);
                        this.setState(prevState => ({
                            timers: {
                                ...prevState.timers,
                                [id]: {
                                    ...prevState.timers[id],
                                    intervalId: null
                                }
                            }
                        }));
                    }
                }
            );
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.firstInterval);
    }

    render() {
        const { timers } = this.state;

        return (
            <div className="App">
                <button data-name="a" onClick={this.handleButtonClick} className="timer">
                    {formatTime(timers.a.currentValue)}
                </button>
                <button data-name="b" onClick={this.handleButtonClick} className="timer timer--active">
                    {formatTime(timers.b.currentValue)}
                </button>
            </div>
        );
    }
}

export default App;
