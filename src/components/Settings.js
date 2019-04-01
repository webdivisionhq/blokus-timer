import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { GoSettings } from 'react-icons/go';
import Button from './Button';
import css from './Settings.module.css';

function Settings(props) {
    const [userCount, setUserCount] = useState(props.userCount);
    const [time, setTime] = useState('10');

    function handleUserCountChange(event) {
        setUserCount(event.target.value);
    }

    function handleTimeChange(event) {
        setTime(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();
        props.onSubmit(time, userCount);
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className={css.settings}>
                <header className={css.header}>
                    <h1>Settings</h1>
                    <GoSettings className={css.icon} size={40} />
                </header>
                <main>
                    <label>
                        MAX TIME
                        <input className={css['max-time-input']} onChange={handleTimeChange} />
                    </label>
                    <div className="users">
                        USERS COUNT
                        <label>
                            <input
                                type="radio"
                                name="users_count"
                                value="two"
                                checked={userCount === 'two'}
                                onChange={handleUserCountChange}
                            />
                            2
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="users_count"
                                value="four"
                                checked={userCount === 'four'}
                                onChange={handleUserCountChange}
                            />
                            4
                        </label>
                    </div>
                </main>
                <footer className={css.footer}>
                    <Button type="button" onClick={props.onCancel} className="foo">
                        CANCEL
                    </Button>
                    <Button variant="cta">SAVE</Button>
                </footer>
            </div>
        </form>
    );
}

Settings.propTypes = {
    userCount: PropTypes.oneOf(['two', 'four']),
    onSubmit: PropTypes.func.isRequired,
    onCancel: PropTypes.func.isRequired,
};

Settings.defaultProps = {
    userCount: 'two',
};

export default Settings;
