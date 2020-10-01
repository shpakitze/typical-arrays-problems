
exports.min = function min (array) {
  if (array===undefined) return 0;
  if (array.length==0) return 0;
  let min = array[0];
  for (let i = 0; i < array.length; i++) {
    if (array[i]<min) min=array[i];
    
  }
  return min;
}

exports.max = function max (array) {
  if (array===undefined) return 0;
  if (array.length==0) return 0;
  let max = array[0];
  for (let i = 0; i < array.length; i++) {
    if (array[i]>max) max=array[i];
    
  }
  return max;
}

exports.avg = function avg (array) {
  let s=0;
  if (array===undefined) return 0;
  if (array.length==0) return 0;
  for (let i = 0; i < array.length; i++) {
    s+=array[i];
    
  }
  return s/array.length;
}
