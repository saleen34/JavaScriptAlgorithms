var counts = {};
function findMajority(arr) {
  //console.log(arr);
  for (var i=0; i<arr.length; i++) {
    if (!counts[arr[i]]) {
      counts[arr[i]] = 1;
    } else {
      counts[arr[i]]++;
//console.log(counts[arr[i]]);
//console.log(i);
      if (counts[arr[i]] > (arr.length / 2)) {
        return arr[i];
      }
    }
  }
  console.log(counts);
}

console.log(findMajority([3,3,4,2,4,4,2,4,4]));


