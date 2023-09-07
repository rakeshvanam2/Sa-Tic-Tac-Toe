import React from 'react';

import "./ResetAll.css";

export const ResetAll = ({ resetAll }) => {
    return (
        <button className="reset-btn" onClick={resetAll}>Restart</button>
    )
}