function findLargest(arr) {
  var prev = null;
  var number = null;
  var largest = null;

  //check for bad values
  if (!arr || !Array.isArray(arr) || arr.length < 1 || arr[0].constructor === Array) {
    return false;
  }

  for (var i=0; i<arr.length-1; ++i) {

    if (i === 0) {
      prev = arr[i];
      continue;
    }

    number = arr[i];

    if (prev > number && largest < prev) {
      largest = prev;
    }

    prev = number;

  }

  return largest;
}

function randomArray(length, max) {
    return Array.apply(null, Array(length)).map(function() {
        return Math.round(Math.random() * max);
    });
}

x = randomArray(15, 100);
console.log(x);

console.log(findLargest(x));
