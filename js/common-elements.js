function getCommonElements(array1, array2) {
  // Change code below this line
  let newArray = [];
    for (const number of array1) {
    if (array2.invludes(number)){
       newArray.push(number);
 }
}
return newArray;


 // Change code above this line
}