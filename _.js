let _ = {
clamp: function(number, lower, upper){
   let lowerClampedValue = Math.max(number, lower);
   let clampedValue = Math.min(lowerClampedValue, upper);
   return clampedValue;
},
inRange: function(number, start, end){
   if(end === undefined && start > 0){
    return (number >= 0)&&(number < start);
   }else if(end === undefined && start < 0){
      return (number >= start)&&(number < 0);
   }
   if(start > end){
      return (number >= end)&&(number < start);
   }
return (number >= start)&&(number < end); 
},
words: function(string){
   let words = string.split(' ');
   return words;
},
pad: function(string, length){
   if(string.length >= length){
      return string;
   };
   let diff = length - string.length;
   let start = '';
   let end = '';
   for (let i = 0; i < Math.floor(diff/2); i++){
      start += ' ';
   };
   for (let i = 0; i < length - string.length - (Math.floor(diff/2)); i++){
      end += ' ';
   }
   return start + string + end;
},
has: function(obj, key){
    return obj.hasOwnProperty(key);
}
};



// Do not write or modify code below this line.
module.exports = _;