// Selection Sort Algoritham...!
// It arrange the N number of array element by placing 
// the smallest element in proper position___________#

// Her we will use two loop inner and outer, outer loop
// itrate the n number of element till (n-1), after that
// you will define the mininum element that is outer loop 
// i and find the greatest element from inner loop that
// iterate from i+1 if find return minimum element is j

// Otherwise it swap the i element with 
// min.....!

// let's start

let Selection = (a) =>{
  for(let i = 0; i < a.length-1; i++){
    let min = i;
    for(let j = i+1; j < a.length; j++){
    if(a[j] < a[min])
      {
        min = j;
      }
    }
      let swap = a[i]
    a[i] = a[min]
    a[min] = swap;
  }
  
  console.log(a)
}

let a = [5, 4, 3, 2, 1]
Selection(a)


