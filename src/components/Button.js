import React from 'react';
import cln from 'classnames';
import css from './Button.module.css';

function Button({ children, disabled, className, ...rest }) {
    const classes = cln(css.button, className, { [css.disabled]: disabled });

    return (
        <button className={classes} {...rest}>
            {children}
        </button>
    );
}

export default Button;
