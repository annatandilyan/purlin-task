import * as React from 'react';

import './style.scss';
function Button ({children, ...props}) {
    return (
        <button
            className={`${props.className || ''} Button ${props.variant || 'primary'} ${props.fullWidth ? 'full-width' : ''}`}
            onClick={props.onClick}
            disabled={props.disabled}
        >
            {children}
        </button>
    );
}

export default React.memo(Button);
