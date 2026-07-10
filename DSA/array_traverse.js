// function arraytraverse (array){
// for (let i = 0 ; i < array.length; i++){
//     console.log(array[i]);

// }
// }
// let array = [12,3,5,2,5];
// arraytraverse(array);


// Problem 2 :Print array in reverse

// let arr = [12, 45, 7, 90, 23];
// function reversetraverse(arr){
// for(let i = arr.length-1 ; i >= 0 ; i--){
//     console.log(arr[i])

// }

// }
//  reversetraverse(arr);

// Problem 3 : Array me se sirf even numbers print karo.

// let arr2 = [12, 45, 7, 90, 23, 16, 8];
//  function eveninarr(arr2) {
//     for(let i = 0 ; i < arr2.length ; i++)
//     {
//         if ( arr2[i] % 2 === 0 ){
//             console.log(arr2[i]);
//         }
       
//     }
//  }

//  eveninarr(arr2);

//Problem 4 : Array me kitne even numbers hain? 

// let arr3 = [12, 45, 7, 90, 23, 16, 8];

// function countEven(arr3) {
//     let count = 0;

//     for (let i = 0; i < arr3.length; i++) {
//         if (arr3[i] % 2 === 0) {
//             count++;
//         }
//     }

//     console.log(count);
// }

// countEven(arr3);



//Problem 5 : Array ke saare elements ka sum print karo.

// let arr = [12, 45, 7, 90, 23];
//  function arraysum(arr){
//     let sum = 0 ;
//     for (let i = 0 ; i < arr.length ; i ++){
//        sum = sum + arr [i] ;
//     }
//     console.log(sum);
//  }

//  arraysum(arr);

//Problem 6 : Find the Largest Element

// let arr = [12, 45, 7, 90, 23]; 

// function largest(arr){
//     let largestnumber = arr[0];
//     for (let i = 1 ; i < arr.length ; i ++){
//         if ( arr[i]> largestnumber)
//         {
//             largestnumber = arr[i];
//         }
       
//     }
//     console.log(largestnumber);
// }

// largest(arr)

// Problem 7 : Second Largest Element 
// let arr = [12, 45, 7, 90, 23];

// function secondLargest(arr) {
//     let largest = arr[0];
//     let secondLargest = -Infinity;

//     for (let i = 1; i < arr.length; i++) {

//         if (arr[i] > largest) {
//             secondLargest = largest;
//             largest = arr[i];
//         }

//         else if (arr[i] > secondLargest && arr[i] !== largest) {
//             secondLargest = arr[i];
//         }
//     }

//     console.log(secondLargest);
// }

// secondLargest(arr);

//Poblem 8 : Find the Smallest Element

// let arr = [12, 45, 7, 90, 23];
 
// function smallestnumber (arr) {
//     let smallnumber = arr[0];
//     for (let i = 1 ; i < arr.length ; i++){
//         if ( arr[i] < smallnumber){
//             smallnumber = arr[i]
           
//         }
        
//     }
//      console.log(smallnumber)
// }
// smallestnumber(arr);

//Problem 9 : Find the Average of an Array
// let arr = [10, 20, 30, 40];

// function avg (arr){
//     let sum = 0 ;
    
//     for (let i = 0 ; i < arr.length ; i++){
//         sum = sum + arr[i] ;
//     }
//     console.log(sum);
//     let avg  = sum / arr.length 
//     console.log(avg);
// }
// avg(arr);