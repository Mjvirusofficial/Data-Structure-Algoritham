// To perform quick sort you need to understand about partition
// partition is dividing the element into left to right we also 
// need to know about pivot, it is a index which we declare in program.

// In quick sort we declare pivot as last element where the element before 
// pivot is lesser from pivot and the element before pivot is greater than 
// pivot_________________________________________________________________#

// let's start...!

function partition(a,l,r){
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

    return a;
}

let a = [4,2,1,3,7,0]
console.log(partition(a,0,a.length-1))