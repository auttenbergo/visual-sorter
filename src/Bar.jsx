import React from 'react';

const Bar = ({ value, total }) => {
    const heightPercent = (value / total) * 100;
    const widthPercent = 100 / total;

    const style = {
        height: `${heightPercent}%`,
        width: `${widthPercent}%`,
    };

    return <div className="bar" style={style}></div>;
};

export default Bar;
