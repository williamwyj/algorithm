function FindIntersection(strArr) {
  const a = strArr[0].split(', ');
  const b = strArr[1].split(', ');
  const bObject = {};
  b.forEach(element => bObject[element] = true)
  let output = '';
  a.forEach((element) => {
    if(bObject[element] && output === '') {
      output += element
    } else if (bObject[element]) {
      output += ',';
      output += element;
    }
  })
  if (output[0]){
    return output;
  } else if (!output[0]) {
    return false;
  }
}


// function FindIntersection(strArr) {
//   let a = strArr[0].split(', ');
//   let b = strArr[1].split(', ');
//   let result = a.filter(x => b.find(a => a === x))
//   return result.length > 0 ? result.join(',') : 'false'
// }




// function FindIntersection(strArr) { 

//   let outputString = ''
//   let stringOne = strArr[0].split(',').map(Number)
//   let stringTwo = strArr[1].split(',').map(Number)

//   for (stringOneIndex = 0; stringOneIndex < stringOne.length; stringOneIndex++) {
//     for (stringTwoIndex = 0; stringTwoIndex < stringTwo.length; stringTwoIndex++) {
//       if (stringOne[stringOneIndex] === stringTwo[stringTwoIndex]) {
//         if (outputString === '') {
//           outputString += stringOne[stringOneIndex];
//         } else {
//           outputString += ',' + stringOne[stringOneIndex];
//         }
//       }
//     }
//   }
//   // code goes here  
//   if (outputString === '') {
//     return false
//   } else {
//   return outputString; 
//   }

// }
   
// // keep this function call here 
// console.log(FindIntersection(readline()));