//  Problem  31 

const debounce = (fn, delay) =>{
    let timeoutId ;
    return (...args) =>{
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
           fn.apply(this ,  args) 
        }, delay);
    }
}

const search = (query) => console.log('Problem - 31 :','Searching:', query);

const debouncedSearch = debounce(search, 300);
debouncedSearch('apple'); 


// Problem - 32 


// const throttle = (fn, limit) => {
//     let lastCall = 0;
//     return (...args) => {
//         const now = Date.now();
//         if (now - lastCall >= limit) {
//             lastCall = now;
//             fn(...args);
//         }
//     };
// };

// const throttledScroll = throttle(() => console.log('Problem - 32 :,'Scrolled! at', Date.now()), 1);

// setInterval(() => {
//     throttledScroll();
// }, 50);



// Problem 33
const deepClone = (obj) => {
    if (obj === null || typeof obj !== 'object') return obj;
    const clone = Array.isArray(obj) ? [] : {};
    
    for (let key in obj) {
        if (Object.hasOwn(obj, key)) {
            clone[key] = deepClone(obj[key]); 
        }
    }
    return clone;
};

// ব্যবহার:
const a = { x: { y: 1 } };
const b = deepClone(a);
b.x.y = 99;
console.log('Problem - 33',a.x.y);

// Problem 34 

class EventEmitter {
    constructor() {
        this.events = {};
    }
    on(event, listener) {
        if (!this.events[event]) {
            this.events[event] = [];
        }
        this.events[event].push(listener);
    }
    emit(event, ...args) {
        if (this.events[event]) {
            this.events[event].forEach(listener => listener(...args));
        }
    }
    off(event, listenerToRemove) {
        if (this.events[event]) {
            this.events[event] = this.events[event].filter(
                listener => listener !== listenerToRemove
            );
        }
    }
}

const emitter = new EventEmitter();
const greetHandler = name => console.log('Problem - 34 :','Hello ' + name);
emitter.on('greet', greetHandler);
emitter.emit('greet', 'Sara');


// Problem 35 

const myMap = (arr, callback) => {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(callback(arr[i], i, arr));
    }
    return result;
};

console.log('Problem - 35 : ',myMap([1, 2, 3], x => x * 2));