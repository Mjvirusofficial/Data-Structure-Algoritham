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

let a = [5,4,3,2,1]
insertion(a)