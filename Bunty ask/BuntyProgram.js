function task(a){
    let arr = new Array();
    let m;
    for(let i = 1; i < a.length-2; i++){
      for(let j = 0; j < a.length-2; j++){
        arr.push(a[j] * a[j+2])
        
        
      }
     
    } console.log(arr)
  }
  let a = [3,1,2,5,5,3]
  task(a)
  
  
  
  // 6 , 5 , 8 , 10 , 15