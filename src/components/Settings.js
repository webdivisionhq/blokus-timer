import React from 'react';
import Button from './Button';
import { GoSettings } from 'react-icons/go';
import css from './Settings.module.css';

function Settings({ onSubmit, onCancel }) {
    let input = React.createRef();

    function handleSubmit(event) {
        event.preventDefault();
        onSubmit(input.current.value);
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
                        <input ref={input} className={css['max-time-input']} />
                    </label>
                </main>
                <footer className={css.footer}>
                    <Button type="button" onClick={onCancel} className="foo">
                        CANCEL
                    </Button>
                    <Button variant="cta">SAVE</Button>
                </footer>
            </div>
        </form>
    );
}

export default Settings;
