let arr = [1,2,3,4,5,6];
let arr2 = [1,3,5,7,9];

function print(e){
 return e*2; 
}

function isEven(e){
  return e%2 === 0;
}

function isBelow(e){
  return e<40;
}

//for each
function forEach(arr, cb){
  for (let i =0; i<arr.length;i++){
    let element =arr[i];
    arr[i] = cb(element);
  }
}

Array.prototype.myEach = function(cb) {
  for(let i = 0; i< this.length;i++){
    this[i]=cb(this[i]);
  }
}

//map
function map(arr, cb){
  let result = [];
  for (let i = 0;i<arr.length;i++){
    let element = arr[i];
    result.push(cb(element));
  }
  return result;
}

Array.prototype.myMap = function(cb) {
  let result = [];
  for(let i = 0; i< this.length;i++){
    result.push(cb(this[i]));
  }
  return result;
}

//filter
function filter(arr,cb) {
  let result = []
  for(let i = 0; i< arr.length;i++){
    if(cb(arr[i])){
      result.push(arr[i]);
    }
  } 
  return result;
}

Array.prototype.myFilter = function (cb) {
  let result = [];
  for(let i = 0; i<this.length;i++){
    if(cb(this[i])){
      result.push(this[i]);
    }
  }
  return result;
}

//some
function some(arr,cb){
  for(let i = 0; i< arr.length;i++){
    if(cb(arr[i])){
      return true;
    }
  } 
  return false;
}

Array.prototype.mySome = function(cb){
  for(let i = 0; i< this.length;i++){
    if(cb(this[i])){
      return true;
    }
  } 
  return false;
}

//every
function every(arr,cb){
  for(let i = 0; i< arr.length;i++){
    if(!cb(arr[i])){
      return false;
    }
  } 
  return true;
}

Array.prototype.myEvery = function(cb){
  for(let i = 0; i< this.length;i++){
    if(!cb(this[i])){
      return false;
    }
  } 
  return true;
}

//reduce
function reduce(arr,cb,initial){
  if(initial){
    arr.unshift(initial)
  }
  for(let i = 0; i<arr.length;i++){
    cb+=arr[i]
  }
  return cb;
}

Array.prototype.myReduce = function (cb,initial){
  if(initial){
    this.unshift(initial);
  }
  for(let i = 0; i<this.length;i++){
    cb+=this[i]
  }
  return cb;
}

//includes
function includes(arr,target){
  for(let i = 0; i< arr.length;i++){
    if (arr[i]===target){
      return true;
    }
  }
  return false;
}

Array.prototype.myIncludes = function (target){
  for(let i = 0; i< this.length;i++){
    if (this[i]===target){
      return true;
    }
  }
  return false;
}

//index of
function indexOf(arr,target){
  for(let i = 0; i< arr.length;i++){
    if (arr[i]===target){
      return i;
    }
  }
  return -1;
}

Array.prototype.myIndexOf = function (target){
  for(let i = 0; i< this.length;i++){
    if (this[i]===target){
      return i;
    }
  }
  return -1;
}

//push
function push(arr,e){
  arr[arr.length] = e;
  return arr;
}

Array.prototype.myPush = function(e) {
  this[this.length] = e;
  return this;
}

