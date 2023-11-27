import './Empty.css'
import image from '../../Detective-check-footprint 1.png';

import React from 'react';
import {useState} from 'react';

const Empty = () => {
    return (
        <div className="empty-state">
            <img src={image} alt="Empty state" />
            <p className="empty-text">Empty...</p>
        </div>
    );
};

export default Empty;