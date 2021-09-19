function filterOutOdds (...nums) {
    return nums.filter((num) => num %2 === 0 );
};

function findMin (...nums){
    return nums.reduce((min, currNum) => currNum<min ? currNum : min)
};

function mergeObjects (obj1, obj2) {
    return {...obj1, ...obj2};
};

function doubleAndReturnArgs(arr, ...nums){
   let doubles = nums.map((val) => val*2);
    return [...arr, ...doubles];
}

function removeRandom(remove, ...items) {
    return items.filter((i) => i !== remove);
}

const extend= (arr1, arr2) =>[...arr1 , ...arr2];

const addKeyVal = (obj, key, val) =>{
    let newObj={...obj};
   newObj[key] = val;
   return newObj;
}

const removeKey=(obj, key) =>{
    let newObj ={...obj};
    delete newObj[key];
    return newObj;
}

const combine=(obj1, obj2) => ({...obj1,...obj2});

const update = (obj , key , val) =>{
    let newObj = {...obj};
    return newObj[key] = val;
}