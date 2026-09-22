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

// const throttledScroll = throttle(() => console.log('Scrolled! at', Date.now()), 1);

// setInterval(() => {
//     throttledScroll();
// }, 50);

