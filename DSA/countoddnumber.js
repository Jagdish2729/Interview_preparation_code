let arr = [10, 25, 7, 45, 90, 18, 11];  

function countoddnumber(arr){
    let count = 0 ;
    for (let i = 0 ; i < arr.length ; i ++) {
     if (arr[i] % 2 !== 0 ){
      count ++ ;
     }
   }
   console.log(count);
}
countoddnumber(arr);

//Count Positive aur Negative Numbers

let arr2 = [-10, 25, -7, 45, 90, -18, 11];

function posnegnumber(arr2){
    let positivecount= 0 ;
    let negativecount = 0;
    for (let i = 0 ; i < arr2.length ; i ++){
        if (arr2[i] < 0){
            negativecount ++ 
        }else if ( arr2[i] > 0 ){
            positivecount++ 
        }
        
    }
    console.log(positivecount , negativecount)
}
posnegnumber(arr2);