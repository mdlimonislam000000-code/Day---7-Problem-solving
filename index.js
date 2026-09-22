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