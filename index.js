'use strict';

// YOU KNOW WHAT TO DO //

/**
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 * collection
 */
function each(collection, action) {
    if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            action(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            action(collection[key], key, collection);
        }
    }
}
module.exports.each = each;


/**
 * Identity: takes in a value and returns it unchanged
 * 
 * @param: {*} value: the value going inside identy
 * 
 * 
 * returns: {*} returns values unchanged
 */
 
 function identity(value){
     return value;
 }
 
 module.exports.identity = identity;
 
 
 
 /**
  * typeOf: returns the typeOf value as a string
  * 
  * @param: {*} value: the value going into typeOf
  * 
  * returns: a string
  */
 
 function typeOf(value){
     if(Array.isArray(value)){
         return 'array';
     } else if(value === null){
         return 'null';
     } else if(value instanceof Date){
         return 'Date';
     } else if(typeof value === 'string'){
         return 'string';
     } else if(typeof value === 'boolean'){
         return 'boolean';
     } else if(typeof value === 'function'){
         return 'function';
     } else if(typeof value === 'number'){
         return 'number';
     } else if(value === undefined){
         return 'undefined';
     } else if(typeof value === 'object'){
         return 'object';
     }
 }
 
 module.exports.typeOf = typeOf;
 
 /**
  * first: Takes an array and number and returns an [] a value or an array of values
  * 
  * @param: an array
  * 
  * @param: a number
  * 
  * returns: an [], a value, or an array
  */
 
 function first(arr, num){
     if(!Array.isArray(arr) || num < 0){
         return [];
     } else if(NaN (num) || num === undefined){
         return arr[0];
     } else {
         arr.slice(0, num);
     }
 }
 
 module.exports.first = first;
 
/**
 * last: takes an array and a numner and returns an [], a value,  or the last elements of array
 * 
 * @param: an array
 * 
 * @param: a number
 * 
 * returns: an [], a value,  an array going backwards
 */
 
 
 
 function last(arr, num){
     if(!Array.isArray(arr) || num < 0){
         return [];
     } else if(isNaN(num) || num === undefined){
         return arr[arr.length - 1];
     } else {
         return arr.slice(-num, arr.length);
     }
 }
 
 module.exports.last = last;
 
 
 
 
 function indexOf(arr, val){
    // loop throught arr
    for(let i = 0; i < arr.length; i++){
        // checking value at this index exsist
        if(arr[i] === val){
            // return index
            return i;
        }
        // return -1 if val in not in arr
    } return -1;
}

module.exports.indexOf = indexOf;



function contains(arr, val){
    for(let i = 0; i < arr.length; i++){ // loop through arr
        if(arr[i] === val){ // if the index of the array has the same value
            return true; 
        }
    } return false;
    
}

module.exports.contains = contains;



function each(collection, action){
    if(Array.isArray(collection)){ // if collection is an array
        for(let i = 0; i < collection.length; i++){ // loop through collection array
            action(collection[i], i, collection); // call action with collection index, index, and collection
        }
    } else {
        typeof collection === 'object'; // if collection is an object
        for(let key in collection){ // loop through collection object
            action(collection[key], key, collection); // call action with collection key, key, and collection
        }
    }
}

module.exports.each = each;



function unique(arr){
    let newArray = []; // creat empty array
    for(let i = 0; i < arr.length; i++){ // loop through array
        if(indexOf(arr, arr[i]) === i){ 
            newArray.push(arr[i]);
        }
    }
    return newArray;
}

module.exports.unique = unique;




function filter(arr, action){
    let newArray = []; // make new array
 each(arr, function(e, i, a){ // calling each func on the arr paramater
     if(action(arr[i], i, arr) === true){ // if calling the action function using array parm is true
         newArray.push(arr[i]); // push value into newArray
     }
 });
   return newArray;
}

module.exports.filter = filter;



function reject(arr, action){
    let newArray = []; // create a newArray
    each(arr, function(e, i, a){ // implement each function
        if(action(arr[i], i , arr) === false){
            newArray.push(arr[i]);
        }
    });
    return newArray; // return newArray
}

module.exports.reject = reject;


function partition(arr, action){
    let newArray = []; // create newArray
    let truthArray = []; // create truthArray
    let falseArray = []; // creat falseArray
    each(arr, function(e, i, a){ // implement each function
       if(action(arr[i], i, arr) === true){ // test if true
           truthArray.push(arr[i]); // push value to truthArray
       } else {
           falseArray.push(arr[i]); // push value to falseArray
       }
    });
       newArray.push(truthArray); // push truthArray to newArray
       newArray.push(falseArray); // push falseArray to newArray
    return newArray; // return newArray
}

module.exports.partition = partition;



function map(col, action){
   let newArray = [];
    if(Array.isArray(col)){
        each(col, function(e, i, a){
           newArray.push(action(col[i], i, col));
        });
    } else {
        each(col, function(e, key, a){
            newArray.push(action(col[key], key, col));
        });
    }
    return newArray;
}

module.exports.map = map;


function pluck(arr, prop){
    let newArray = []; // create newArray
    map(arr, function(e, i, a){
        newArray.push(e[prop]);
    });
    return newArray;
}

module.exports.pluck = pluck;




function every(col, func){
   let result = true;
  if(typeof func !== 'function'){
    each(col, function(e, i, a){
        if(e === false){
        result = false;
        }
    });
    return result;
  } else {
      each(col, function(e, i, a){
          if(func(col[i], i , col) === false){
              result = false;
          }
      });
      return result;
  }
  
}

module.exports.every = every;



function some(col, func){
     let result = false;
  if(typeof func !== 'function'){
    each(col, function(e, i, a){
        if(e === true){
        result = true;
        }
    });
    return result;
  } else {
      each(col, function(e, i, a){
          if(func(col[i], i , col) === true){
              result = true;
          }
      });
      return result;
  } 
}

module.exports.some = some;


function reduce(array, action, seed){
    if(seed !== undefined){
        let finalResult = seed;
        
        each(array, function(e, i, a){
        finalResult = action(finalResult, e, i, a);
        });
        return finalResult;
    } else {
        let finalResult = array[0];
        each(array, function(e, i, a){
            if(i !== 0){
            finalResult = action(finalResult, e, i, a);
            }
        });
        return finalResult;
    }
}

module.exports.reduce = reduce;


function extend(...obj){
    let returnedObject = Object.assign(...obj);
    return returnedObject;
}

module.exports.extend = extend;