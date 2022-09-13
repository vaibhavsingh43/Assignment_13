// first solution

function findTriplate(arr){
    let length = arr.length;
     let output=[];
     let index=0;
    for(let i=0;i<length;i++){
        for(let j=i;j<length-2;j++){
              if((arr[j]+arr[j+1]+arr[j+2]) == 0){
                output[index]=arr[j] + " "+arr[j+1]+" "+arr[j+2];
                index++;
              }
        }
    }

    return output;
}


let input = [ -1, 0, 1, 2, -1, 4];
 console.log(findTriplate(input));



 // 2nd solution 

//  function findUniqueTriplets(arr) {
//     let output=[];
//     let index=0;
//    for (let i = 0; i < arr.length - 2; i++) {
//    for (let j = i + 1; j < arr.length - 1; j++) {
//        for (let k = j + 1; k < arr.length; k++) {
//            if (arr[i] + arr[j] + arr[k] === 0)
//            {
               
//                 output[index]=arr[i] +" "+arr[j]+" "+arr[k]; 
//            }
//        }
//    }
//   }
//   return output;
// }
// let input = [ -1, 0, 1, 2, -1, 4];
// let output = findUniqueTriplets(input);
// console.log(output);