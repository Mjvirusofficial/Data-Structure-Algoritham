// Bubble Sort Algoritham...!
// This is a sorting algoritham where largest value
// bubble at the top______________________________#

// Here we will use two loop outer and inner, outer 
// loop itreate the n number of element til (n-1)
// inner loop compare the value from outer loop and  
// swap them______________________________________#

// let's start...!

let BubbleSort = (a) =>{
    for(let i = 0; i < a.length-1; i++){
      for(let j = i; j < a.length; j++){
  
        if(a[i] > a[j])
          {
            let swap = a[i]
            a[i] = a[j]
            a[j] = swap;
          }
      }
    }
    
    console.log(a)
  }
  
  let a = [5, 4, 8, 9, 7, 6, 2, 1, 3, 0]
  BubbleSort(a)
  
  
  
  
  