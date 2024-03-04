let arr = [1,2,3,4,5,6,7,8,9];

function customeSplice(arr){
    let remove = arr.splice(3, 2, 0,0);
    return remove;;
}

console.log(customeSplice(arr));

for(let i=0; i<arr.length; i++){
    console.log(arr[i]);
}