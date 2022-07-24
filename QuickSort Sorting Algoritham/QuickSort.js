let partition = (a,l,r) =>{
    let pivot = a[r]
    let i = l-1;

    for(let j = l; j <= r-1; j++){
        if(a[j] < pivot)
        {
            i++
            let Mj = a[j]
            a[j] = a[i]
            a[i] = Mj;
        }
    }

    let virus = a[i+1]
    a[i+1] = a[r]
    a[r]   = virus;

    return i+1;
}



function QuickSort(a,l,r){
    if(l < r){
    let pi = partition(a,l,r)
    QuickSort(a,l,pi-1)
    QuickSort(a,pi+1,r)
    return a;
    }
}

let a = [4,9,2,1,5,8,7,3]
console.log(QuickSort(a,0,a.length-1))




























// Trying...


// let a = [2,5,8,7,3,9,1,4]
// console.log(QuickSort(a,0,a.length-1))
// function partition(a,l,r){
//   let pivot = a[r]
//   let i = l-1;
  
//   for(let j = l; j <= a.length-1; j++){
//     if(a[j] < pivot)
//       {
//         i++;
//         let swap = a[j]
//         a[j] = a[i]
//         a[i] = swap;
//       }
//   }
  
//   let swap = a[i+1]
//   a[i+1] = a[r]
//   a[r] = swap;
  
//   return i+1;
// }

// function QuickSort(a,l,r){
//   if(l < r){
//     let pi = partition(a,l,r)
//     QuickSort(a,l,pi-1)
//     QuickSort(a,pi+1,r)
//     return a;
//   }
// }