// Sum zero function

let arr1 = [1, 4, 30, 0, -30, 6]
let arr2 = [0, -21, 23, 60, 21]
let arr3 = [0, 1, 2, 3, 4, 5]

function addToZero(arr){
  let answer = false
  
  for(let i=0; i<arr.length; i++){
    for(let k=i+1; k<arr.length; k++){
      if(arr[i] + arr[k] === 0 ){
        answer = true
      }
    }
  }
  
  return answer
};

console.log( addToZero(arr1) )
console.log( addToZero(arr2) )
console.log( addToZero(arr3) )

// Unique Characters funtion

const uniqueChars = (str) => {
    let queue = str.split('')
    let answer = true
  
    // Queue 
    while(queue.length > 0){
      let current = queue.shift()
      if(queue.includes(current)) {
        answer = false
      }
    }
    
    for(let i=0; i<queue.length; i++){
      for(let k=i+1; k<queue.length; k++){
        if(queue[i] === queue[k]){
          answer = false
        }
      }
    }
  
    return answer
  }
  

  console.log(uniqueChars('Monday'))
  console.log(uniqueChars('Moonday'))

// Pangram sentence function

function pangrams(s) {
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    let regex = /\s/g;
    let lowercase = s.toLowerCase().replace(regex, "");
   
    for(let i = 0; i < alphabet.length; i++){
     if(lowercase.indexOf(alphabet[i]) === -1){
       return "false";
     }
    }
   
   return "true";
 }

 console.log(pangrams('The quick brown fox jumps over the lazy dog!'))
 console.log(pangrams('I like cats, but not mice.'))

// Find longest word function

function findLongestWord(str) {

    var strSplit = str.split(' ');

    var longestWord = 0;
  
    for(var i = 0; i < strSplit.length; i++){
      if(strSplit[i].length > longestWord){ 
      longestWord = strSplit[i].length; 
       }
    }
    
    return longestWord; 
  }
  
  console.log(findLongestWord('The quick brown fox jumped over the lazy dog'))
  console.log(findLongestWord('I like Monkeys, but not mice'))
  console.log(findLongestWord('I like surfing at lake powell, especially the foil board'))