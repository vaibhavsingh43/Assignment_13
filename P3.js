
// function  palindrome(name){
//     name = name.toLowerCase();
//     let isPalindrome = true;
//      let start =0;
//      let end = name.length-1;
//       while(start <= end){
//         if(name.chartAt(start) != name.chartAt(end)){
//             isPalindrome = false;
        
//         }
//         start++;
//         end--;
//       }
//       return isPalindrome;
// }

// let input = "Anna";
// console.log(palindrome(input));


//   Second Method

function  palindrome(name){
    name = name.toLowerCase();
   let revname = name.split("").reverse().join("");
   console.log(name,revname);
      if(name === revname)
      console.log(true);
      else
      console.log(false);
}

let input = "Anna";
palindrome(input)