import React, {useState, useEffect, useRef} from 'react';
import Chart from './Chart';
import Controls from './Controls';
import {selectionSort, insertionSort, bubbleSort, mergeSort} from './SortingHelpers';
import './App.css';

const algorithms = ['Selection Sort', 'Insertion Sort', 'Bubble Sort', 'Merge Sort'];
const barStyles = ['bottom', 'middle', 'top'];

const App = () => {
    const [array, setArray] = useState([]);
    const [arraySize, setArraySize] = useState(50);
    const [selectedAlgorithm, setSelectedAlgorithm] = useState('Selection Sort');
    const [barStart, setBarStart] = useState('bottom');
    const [isSorting, setIsSorting] = useState(false);
    const [sortSpeed, setSortSpeed] = useState(10);

    const cancelledRef = useRef(false);
    const [cancelled, setCancelled] = useState(false);


    const handleSort = async () => {
        if (isSorting) return;
        setIsSorting(true);

        setCancelled(false);
        cancelledRef.current = false;

        const getCancelled = () => cancelledRef.current;

        switch (selectedAlgorithm) {
            case 'Selection Sort':
                await selectionSort(array, setArray, sortSpeed, getCancelled);
                break;
            case 'Insertion Sort':
                await insertionSort(array, setArray, sortSpeed, getCancelled);
                break;
            case 'Bubble Sort':
                await bubbleSort(array, setArray, sortSpeed, getCancelled);
                break;
            case 'Merge Sort':
                await mergeSort(array, setArray, sortSpeed, 0, null, getCancelled);
                break;
            default:
                break;
        }

        setIsSorting(false);
    };


    useEffect(() => {
        generateRandomArray();
    }, [arraySize]);

    const generateRandomArray = () => {
        let arr = Array.from({length: arraySize}, (_, idx) => idx + 1);
        arr.sort(() => Math.random() - 0.5);
        setArray(arr);
    };

    return (
        <div className="app">
            <Chart array={array} barStart={barStart}/>
            <Controls
                algorithms={algorithms}
                selectedAlgorithm={selectedAlgorithm}
                setSelectedAlgorithm={setSelectedAlgorithm}
                arraySize={arraySize}
                setArraySize={setArraySize}
                barStyles={barStyles}
                barStart={barStart}
                setBarStart={setBarStart}
                generateRandomArray={generateRandomArray}
                handleSort={handleSort}
                isSorting={isSorting}
                setCancelled={setCancelled}
                cancelledRef={cancelledRef}
            />
        </div>
    );
};

export default App;
