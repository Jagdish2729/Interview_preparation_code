let arr = [10,20,30,40,50];

//reverse this array

function reversearray(arr){
    let reverse = [];
    for (let i = arr.length-1 ; i >=0 ; i--){
        reverse =  reverse + arr[i];
    }
    console.log(reverse)
}

reversearray(arr);