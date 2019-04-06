import React from 'react';
import PropTypes from 'prop-types';
import { GoSettings } from 'react-icons/go';
import Switch from 'react-switch';
import Button from './Button';
import css from './Settings.module.css';

class Settings extends React.Component {
    state = {
        userCount: this.props.userCount,
        currentTime: this.props.defaultTime,
    };

    handleSubmit = event => {
        const { currentTime, userCount } = this.state;
        event.preventDefault();
        this.props.onSubmit(+currentTime, userCount);
    };

    handleUserCountChange = checked => {
        this.setState({
            userCount: checked ? 'four' : 'two',
        });
    };

    handleTimeChange = event => {
        this.setState({
            currentTime: event.target.value,
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
                    <main className={css.settingsGrid}>
                        <span>
                            MAX TIME <span className={css.minutes}>(min)</span>
                        </span>
                        <input
                            className={css['max-time-input']}
                            onChange={this.handleTimeChange}
                            value={this.state.currentTime}
                        />
                        USERS COUNT
                        <Switch
                            onChange={this.handleUserCountChange}
                            checked={this.state.userCount === 'four'}
                            uncheckedIcon={<span className={css.checkedLeft}>2</span>}
                            checkedIcon={<span className={css.checkedRight}>4</span>}
                            onColor="#c52424"
                            offColor="#c52424"
                        />
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
    defaultTime: PropTypes.number.isRequired,
};

Settings.defaultProps = {
    userCount: 'two',
};

export default Settings;
