//Count Occurrences

let arr = [10, 20, 30, 20, 40, 20]; 
target = 20 ;

//question : is array m 20 kitne baar aaya ?

function countoccurance(arr , target){
    let count = 0; 

    for (let i = 0 ; i < arr.length ; i ++){
        if (arr[i] === target ){
            count++
        }
    }
    console.log(count)
}

countoccurance(arr,target);


//First Occurrence 

function firstoccurance(arr,target){
    for (let i = 0 ; i < arr.length ; i ++){
        if (arr[i] === target){
            console.log(i);
            break;
        }
    }
}
firstoccurance(arr,target);

//Last Occurrence

function lastoccurance(arr,target){
        for (let i = arr.length-1 ; i >=0 ; i--){
        if (arr[i] === target){
            console.log(i);
            break;
        }
    }
}
lastoccurance(arr,target);