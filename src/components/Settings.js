import React from 'react';
import { GoSettings } from 'react-icons/go';
import css from './Settings.module.css';

function Settings() {
    return (
        <div className={css.settings}>
            <h1>
                <GoSettings className={css.icon} size={40} /> Settings
            </h1>
        </div>
    );
}

export default Settings;
