import React from 'react';
import PropTypes from 'prop-types';
import cln from 'classnames';
import css from './Button.module.css';

function Button({ children, disabled, className, variant, ...rest }) {
    const classes = cln(css.button, className, {
        [css[`button--${variant}`]]: variant,
        [css.disabled]: disabled,
    });

    return (
        <button className={classes} {...rest}>
            {children}
        </button>
    );
}

Button.propTypes = {
    children: PropTypes.node.isRequired,
    disabled: PropTypes.bool,
    className: PropTypes.string,
    variant: PropTypes.oneOf(['cta']),
};

Button.defaultProps = {
    disabled: false,
    className: '',
    variant: undefined,
};

export default Button;
