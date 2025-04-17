import React from 'react';
import Bar from './Bar';

const Chart = ({array, barStart}) => {
    return (
        <div className={`chart ${barStart}`}>
            {array.map((value, idx) => (
                <Bar key={idx} value={value} total={array.length}/>
            ))}
        </div>
    );
};

export default Chart;
