function sortedElements(arr) {
   let ascendingOrder =  arr.sort();
   let num = ascendingOrder.length;

   let arrResult= [];

   arrResult.push(ascendingOrder[1]);
   arrResult.push(ascendingOrder[num-2]);
    return arrResult;
}

console.log(sortedElements([1,2,3,4,5]));