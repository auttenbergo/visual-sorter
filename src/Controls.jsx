import React from 'react';

const Controls = ({
                      algorithms, selectedAlgorithm, setSelectedAlgorithm,
                      arraySize, setArraySize,
                      barStyles, barStart, setBarStart,
                      generateRandomArray, handleSort, isSorting,
                      setCancelled, cancelledRef
                  }) => {
    return (
        <div className="controls">
            <div className="section">
                <h3>Sorting Algorithm</h3>
                <div className="buttons">
                    {algorithms.map((alg, idx) => (
                        <button
                            key={idx}
                            className={`btn ${selectedAlgorithm === alg ? 'active' : ''}`}
                            onClick={() => setSelectedAlgorithm(alg)}
                        >
                            {alg}
                        </button>
                    ))}
                </div>
            </div>

            <div className="section">
                <h3>Array Size</h3>
                <input
                    type="range"
                    min="10"
                    max="1000"
                    value={arraySize}
                    onChange={(e) => setArraySize(parseInt(e.target.value))}
                    disabled={isSorting}
                />
                <div className="array-size-display">{arraySize}</div>
            </div>

            <div className="section">
                <h3>Bar Style</h3>
                <div className="buttons">
                    {barStyles.map((style, idx) => (
                        <button
                            key={idx}
                            className={`btn ${barStart === style ? 'active' : ''}`}
                            onClick={() => setBarStart(style)}
                        >
                            {style}
                        </button>
                    ))}
                </div>
            </div>

            <div className="section">
                <button className="btn randomize" onClick={generateRandomArray} disabled={isSorting}>
                    Randomize Array
                </button>
            </div>

            <div className="section">
                {!isSorting && (
                    <button
                        className="btn start-sort"
                        onClick={handleSort}
                    >
                        Start Sorting
                    </button>
                )}
                {isSorting && (
                    <button
                        className="btn cancel-sort"
                        onClick={() => {
                            setCancelled(true);
                            cancelledRef.current = true;
                        }}
                    >
                        Cancel
                    </button>
                )}
            </div>


        </div>
    );
};

export default Controls;
