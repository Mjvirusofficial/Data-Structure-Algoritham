// Merge Sort Algoritham..!
// Create a function that pass two arrgument array1 and array2
// Next create a third array that length the sum of array1 and array2

// Next declare three varriable i, j, and k after that take a loop that 
// iterate i when i < array1.length && iterate j < array2.length
// aftr that take a condition that if(a[i] < a[j]) the a3[k] = a[i]
// otherwise push a[j] and i++; j++; k++;

// Take anoter loop for when then length of array 1 and arrray 2 is not equal...!

function mergeSort(a,b){
let c = [a.length + b.length]
let i = 0, j = 0, k = 0;

while(i < a.length && j < b.length)
{
    if(a[i] < b[j])
    {
        c[k] = a[i]
        i++
    }

    else
    {
        c[k] = b[j]
        j++
    }
    
    k++
}
while(i < a.length)
{
    c[k] = a[i]
    i++
    k++
}

while(j < b.length)
{
    c[k] = b[j]
    j++
    k++
}
return c;
}

let a = [5,6,7]
let b = [4,5,6]
console.log(mergeSort(a,b))