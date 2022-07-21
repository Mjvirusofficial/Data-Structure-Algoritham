let anagram = (s1, s2) => {
    if (s1.length != s2.length) {
        return false;
    }

    let count = {}
    for (let i of s1) {
        count[i] = (count[i] || 0) + 1;
    }

    for (let j of s2) {
        if (!count[j]) {
            return false;
        }
        count[j] -= 1.
    }
    return true;
}

console.log(anagram('Bunty', 'nuByt'))



// Check the string that we have its
// Anagram or not__________________#


// Step-> create function = (str1,str2)
// Step-> str1.length and str2.length equal or not
// Step-> check str1 = 'deepak' {d:1,e:2,p:1,k:1}
// Map = {key:value}
  
  
  
  
   
  
  
  
  
  