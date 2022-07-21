let a = "Deepak";
let count = {}

for(i of a){
    count[i] = (count[i] || 0) + 1;
}

console.log(count)