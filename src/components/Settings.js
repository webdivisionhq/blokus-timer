import React from 'react';
import PropTypes from 'prop-types';
import { GoSettings } from 'react-icons/go';
import Button from './Button';
import css from './Settings.module.css';

class Settings extends React.Component {
    state = {
        userCount: this.props.userCount,
        input: '10',
    };

    handleSubmit = event => {
        const { input, userCount } = this.state;
        event.preventDefault();
        this.props.onSubmit(input, userCount);
    };

    handleUserCountChange = event => {
        this.setState({
            userCount: event.target.value,
        });
    };

    handleTimeChange = event => {
        this.setState({
            input: event.target.value,
        });
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className={css.settings}>
                    <header className={css.header}>
                        <h1>Settings</h1>
                        <GoSettings className={css.icon} size={40} />
                    </header>
                    <main>
                        <label>
                            MAX TIME
                            <input className={css['max-time-input']} onChange={this.handleTimeChange} />
                        </label>
                        <div className="users">
                            USERS COUNT
                            <label>
                                <input
                                    type="radio"
                                    name="users_count"
                                    value="two"
                                    checked={this.state.userCount === 'two'}
                                    onChange={this.handleUserCountChange}
                                />
                                2
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    name="users_count"
                                    value="four"
                                    checked={this.state.userCount === 'four'}
                                    onChange={this.handleUserCountChange}
                                />
                                4
                            </label>
                        </div>
                    </main>
                    <footer className={css.footer}>
                        <Button type="button" onClick={this.props.onCancel} className="foo">
                            CANCEL
                        </Button>
                        <Button variant="cta">SAVE</Button>
                    </footer>
                </div>
            </form>
        );
    }
}

Settings.propTypes = {
    userCount: PropTypes.oneOf(['two', 'four']),
    onSubmit: PropTypes.func.isRequired,
    onCancel: PropTypes.func.isRequired,
};

export default Settings;
