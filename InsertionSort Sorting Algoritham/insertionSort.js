// Step 1: Create a function that takes a Array
// Step 2: Take a loop that start iterating 
// from second element of the array_______#

// Step 3: Decalre a varriable that contain second element of the array
// also declare next varriable that contain i - 1 [                   ] 

// Step 4: Take a while loop u also take for loop but i want to take a while loop 
// as a inner loop, that contain two condition first next varriable as j is >= 0 
// && array[j] > second element________________________________________________#
// Next setep in code any problem DM on instagram:- mjvirusofficial
// You can also search:- #mjvirus in anyywhere, Google, instagram
// youtube etc. ||_____________________________________________________________#

let insertion = (a) =>{
   for(let i = 1; i < a.length; i++){
   let secondElement = a[i]
   let j = i-1;

   while(j >= 0 && a[j] > secondElement){
     a[j+1] = a[j]
     j--;
   }
     a[j+1] = secondElement; 
   }

   console.log(a)
}

let a = [55,49,32,20,1]
insertion(a)