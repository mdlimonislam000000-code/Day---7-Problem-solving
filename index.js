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

