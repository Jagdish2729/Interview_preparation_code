let arr = [12, 34, 56, 78, 90];
let target = 56;
let target2 = 100; 


function search(arr , target){
  for (let i = 0 ; i < arr.length ; i++){
    if(arr[i] === target){
        console.log(i); 
        break; 
    }

  }
 
  
}

search(arr ,target);