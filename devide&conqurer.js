// Step -> Divide a single into single element#
// Step -> Merge all the single element into a single 
// Array in sorted formate__________________________#

// let's start...!

let startDividing = (a,l,r) =>{
    if(l >= r)
      {
        return;
      }
    let m = l + parseInt((r+l) / 2)
    startDividing(a,l,m)
    startDividing(a,m+1,r)
    mergeSort(a,l,m,r)
  }
  
  function mergeSort(a,l,m,r){
    let a1Len = m - l;
    let a2Len = r - m
    
    let a1 = new Array(a1Len)
    let a2 = new Array(a2Len)
    
    for(let i = 0; i < a1Len; i++){
      a1[i] = a1[i + l]
    }
    
    for(let j = 0; j < a2Len-1; j++){
      a2[j] = a2[j + m+1]
    }
    
    let i = 0, j = 0, k = l;
    while(i < a1Len && a2 < a2Len){
      if(a1[i] < a2[j])
        {
          a[k] = a1[i]
          i++
        }
      else
        {
          a[k] = a2[j]
          j++
        }
      k++
    }
    
    while(i < a1Len){
      a[k] = a1[i]
      i++
      k++
    }
    
    while(j < a2Len){
    a[k] = a2[j]
      j++
      k++
    }
  }
  
  
  let arr = [8,7,6,2,3,4,9,1,10,5]
  startDividing(arr,0,arr.length-1)
  console.log(arr)