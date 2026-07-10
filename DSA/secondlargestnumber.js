let arr = [12, 45, 7, 90, 23];


function secondlargest(arr){
    let largest = arr[0];
    let seclargest = -Infinity;
    for (let i = 1 ; i < arr.length ; i++){
        if (arr[i] > largest){
            seclargest = largest ; 
            largest = arr[i];
        }
    }
    console.log(largest,seclargest);
}
secondlargest(arr);