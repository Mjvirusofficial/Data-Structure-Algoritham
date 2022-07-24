function mergeSort(a1,a2){
    let a3 = [a1.length + a2.length]
    
    let i = 0, j = 0, k = 0;
      
      while(i < a1.length && j < a2.length){
        if(a1[i] < a2[j])
          {
            a3[k] = a1[i]
            i++;
          }
        else
          {
            a3[k] = a2[j]
            j++
          }
        k++;
      } 
      
      while(i < a1.length){
        a3[k] = a1[i]
        i++;
        k++;
      }
      
      while(j < a2.length){
        a3[k] = a2[j]
        j++;
        k++
      }
      
      return a3;
    }
    
    
    let a = [4,5,6]
    let b = [1,2,3]
    console.log(mergeSort(a,b))
    