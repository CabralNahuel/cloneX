import React from 'react';

export default function X(props) {
    const { width, style } = props;

    return (
        <img src="./X_logo_2023.svg" alt="" width={width} style={{ ...style }} />
    );
}


//<img src="./X_logo_2023.svg" alt="" width="30px" style={{ marginBottom: '16px', marginLeft: '16px' }} />