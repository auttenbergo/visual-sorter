export const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// Selection Sort
export async function selectionSort(array, setArray, speed, getCancelled) {
    let arr = [...array];
    const n = arr.length;

    for (let i = 0; i < n; i++) {

        if (getCancelled()) {
            
            return;
        }
        let minIdx = i;
        for (let j = i + 1; j < n; j++) {
            if (getCancelled()) {
                
                return;
            }
            if (arr[j] < arr[minIdx]) {
                minIdx = j;
            }
        }
        if (minIdx !== i) {
            [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
            setArray([...arr]);
            await delay(speed);
        }
    }
}

// Insertion Sort
export async function insertionSort(array, setArray, speed, getCancelled) {
    let arr = [...array];

    for (let i = 1; i < arr.length; i++) {
        if (getCancelled()) {
            
            return;
        }

        let key = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > key) {
            if (getCancelled()) {
                
                return;
            }

            arr[j + 1] = arr[j];
            j--;
            setArray([...arr]);
            await delay(speed);
        }
        arr[j + 1] = key;
        setArray([...arr]);
        await delay(speed);
    }
}

// Bubble Sort
export async function bubbleSort(array, setArray, speed, getCancelled) {
    let arr = [...array];
    let n = arr.length;

    for (let i = 0; i < n; i++) {
        if (getCancelled()) {
            
            return;
        }

        for (let j = 0; j < n - i - 1; j++) {
            if (getCancelled()) {
                
                return;
            }

            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                setArray([...arr]);
                await delay(speed);
            }
        }
    }
}

// Merge Sort Helper
async function merge(arr, l, m, r, setArray, speed, getCancelled) {
    let n1 = m - l + 1;
    let n2 = r - m;
    let L = arr.slice(l, m + 1);
    let R = arr.slice(m + 1, r + 1);

    let i = 0, j = 0, k = l;
    while (i < n1 && j < n2) {
        if (getCancelled()) {
            
            return;
        }

        if (L[i] <= R[j]) {
            arr[k] = L[i++];
        } else {
            arr[k] = R[j++];
        }
        setArray([...arr]);
        await delay(speed);
        k++;
    }
    while (i < n1) {
        if (getCancelled()) {
            
            return;
        }

        arr[k++] = L[i++];
        setArray([...arr]);
        await delay(speed);
    }
    while (j < n2) {
        if (getCancelled()) {
            
            return;
        }

        arr[k++] = R[j++];
        setArray([...arr]);
        await delay(speed);
    }
}

// Merge Sort
export async function mergeSort(arr, setArray, speed, l = 0, r = null, getCancelled) {
    if (r === null) r = arr.length - 1;
    if (l >= r) return;

    if (getCancelled()) {
        
        return;
    }

    let m = Math.floor((l + r) / 2);
    await mergeSort(arr, setArray, speed, l, m, getCancelled);
    await mergeSort(arr, setArray, speed, m + 1, r, getCancelled);
    await merge(arr, l, m, r, setArray, speed, getCancelled);
}