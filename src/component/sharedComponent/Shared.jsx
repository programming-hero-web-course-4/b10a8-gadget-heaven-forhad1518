import React from 'react';

const Shared = ({ title, details , color}) => {
    return (
        <div className='space-y-3 text-center text-white'>
            <h1 className={`text-xl md:text-3xl lg:text-5xl font-bold ${color}`}>{title}</h1>
            <p className={`${color}`}>{details}</p>
        </div>
    );
};

export default Shared;