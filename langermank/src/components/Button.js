import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'clsx';
import styles from './button.module.scss';

const Button = ({
    children,
    disabled,
    isGhost,
    onClick,
    type,
    withIcon,
    funStyles,
    _additionalClasses,
    ...props
}) => {
    const classNames = classnames(
        styles.btn,
        isGhost ? styles.ghost : '',
        (_additionalClasses || []).map((c) => styles[c]),
        {
            [styles.withIcon]: withIcon
        },
        {
            [styles.funStyles]: funStyles
        },
    );

    return (
        <button
            className={classNames}
            disabled={disabled}
            onClick={onClick}
            type={type}
            {...props}
        >
            {children}
        </button>
    );
};

const onClickPropType = (props, propName) =>
    props.type === 'submit' || typeof props[propName] === 'function'
        ? undefined
        : new Error(`${propName} is required if the type prop is not submit`);

Button.propTypes = {
    /** Function to call onClick */
    onClick: onClickPropType,

    /** Child component to display next to the input */
    children: PropTypes.node,

    /** If the button should be a ghost button of the variant */
    isGhost: PropTypes.bool,

    /** If the button should be disabled */
    disabled: PropTypes.bool,

    /** Type of input button */
    type: PropTypes.oneOf(['button', 'submit', 'reset']),

    /** set to true when using icon, pass svg icon and a span for text */
    withIcon: PropTypes.bool,

    /** set to true when using icon, pass svg icon and a span for text */
    funStyles: PropTypes.bool,
};

Button.defaultProps = {
    onClick: () => {},
    type: 'submit',
    children: 'Submit',
    disabled: false,
    isGhost: false,
    withIcon: false,
    funStyles: false,
};

export default Button;
