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
}
};

console.log(_.inRange(5, 5, -5));

// Do not write or modify code below this line.
module.exports = _;