import React from 'react';

export default function X(props) {
    const { width, style, margin, marginLeft } = props;

    return (
        <img 
            src="./X_logo_2023.svg" 
            alt="" 
            width={width} 
            style={{ 
                ...style, 
                margin: margin || 15,  // Use provided margin or default to 15
                marginLeft: marginLeft  // Set marginLeft if provided
            }} 
        />
    );
}
