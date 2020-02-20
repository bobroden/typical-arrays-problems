
exports.min = function min (array) {
  if(arguments.length == 0 || array.length == 0)
  	return 0;
  var min = Infinity;
  for(var i = 0; i < array.length; i++)
  	if(min > array[i])
  		min = array[i];
  return min;
}

exports.max = function max (array) {
  if(arguments.length == 0 || array.length == 0)
  	return 0;
  var max = -Infinity;
  for(var i = 0; i < array.length; i++)
  	if(max < array[i])
  		max = array[i];
  return max;
}

exports.avg = function avg (array) {
  if(arguments.length == 0 || array.length == 0)
  	return 0;
  var sum = 0;
  for(var i = 0; i < array.length; i++)
  	sum += array[i];
  return sum/array.length;
}
