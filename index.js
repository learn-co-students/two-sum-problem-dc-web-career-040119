
let array = [2, 3, 4, 3, 6, 7]
let sum = 6

function bruteForceTwoSum(array, sum) {

 let result = [];

  // Solution-1-Brute Force — O(n²)
  // By brute force, we mean try every permutation to find all of the answers.
  // A naive approach to this problem would be to loop through each number and then loop again through the array looking for a pair that sums to S. The running time for the below solution would be O(n2) because in the worst case we are looping through the array twice to find a pair. 


  for (var i = 0; i < array.length; i++) {
    for (var j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === sum) {
        result.push([array[i], array[j]])
      }
    }
  }

  return result

}

function binarySearchTwoSum(array, sum) {
  //  But wait, we know in advance that given the number five, and a sum of six, that the matching element we are looking for is the number one.
  // we can employ binary search to see if the matching element exists in our collection. So what is the cost of this. Well, we have the up front cost of sorting the array. You can employ merge sort, for a cost of O(n log n). Then for every element in the array, we employ binary search.

  let sortedArray = array.sort()
  let result = [];
  let keys = []
  

  sortedArray.forEach(element => {
    if(binaryMatch(sortedArray, sum - element) && (keys.includes(element) === false) && (keys.includes(sum - element) === false) ) {
      keys.push(element)
      result.push([element, (sum - element)])
    } 
  })

  return result
}

function binaryMatch(sorted, num) {
  return sorted.includes(num)
}

// function binarySearchTwoSum(arr, target) {
//   let sums = []
//   let sorted = arr.sort()
//   let seen = new Set()
//   for(let i = 0; i < arr.length; i++) {
//       let num = arr[i]
//       let match = binaryMatch(sorted, target - num)
//       if(match && !seen.has(num)) {
//           seen.add(num)
//           seen.add(target - num)
//           sums.push([num, target - num])
//       }
//   }
//   return sums
// }

//  // binary searches a sorted array for a number
//  function binaryMatch(sorted, num) {
//   if (sorted.length === 0) {
//       return false
//   }
//   let mid = Math.floor(sorted.length / 2);
//   let guess = sorted[mid]
//   if (guess === num) {
//       return true
//   } else if (guess < num) {
//      return binaryMatch(sorted.slice(mid), num)
//   } else {
//       return binaryMatch(sorted.slice(0, mid), num)
//   }
// }

  // Ok, so now we are employing binary search, to see if a number is in an array. Every time we see ourselves doing binary search, we should consider a better alternative.


function hashTwoSum(array, sum) {
  let hashTable = {}
  let result = [];

  for(let i = 0; i < array.length; i++) {
    let sumMinus = sum - array[i];
    if (hashTable[sumMinus]) {
      result.push([hashTable[sumMinus], array[i]])
    } else {
      hashTable[array[i]] = array[i];
    }
  }
  
  return result;
}

// Well there are really two steps. The first is to place each element into a hash. And then the second step is to go through each element and see if the matching element exists. So n times, find something in a hash, which costs O(1). So the cost of this is O(n) + O(n) which reduces O(n).



console.log(bruteForceTwoSum(array, sum))
