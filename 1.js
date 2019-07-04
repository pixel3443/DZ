let array = [];

let array_b=[];
async function getData(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    array.push(...data);     
    var i;
var fib = [];
fib[0] = 0;
fib[1] = 1;
for (i = 2; i <= 15; i++) {
    fib[i] = fib[i - 2] + fib[i - 1];
}
fib.shift();
fib.shift();
      
      
 const arr = array.filter(function(num) {
  if (fib.includes(num.id)) {
    return num;
  }

 
      });
      
        console.log(arr);     
      
      
//console.log(fib);    
//const arr = array.filter(function(num) { 
//      for (let t = 0; t < num.length; t++) {   
//        if (fib.includes(num.id)) { 
//          return num; 
//        } 
// 
//      }});
//      
//        console.log(arr); 
//      
//console.log(array);      
//for (let j = 1; j < fib.length; j++) {
//    for (let k=1; k<array.length;k++){
//    if (fib[j] == array[k].id) {
////        console.log(fib[j]);
//        array_b.push(...array[k]);
//        console.log(array_b);
//    }else{
//        console.log('не совпало');
//    }
//
//}}  

  } catch (error) {
    console.log('error');
  }
}
getData("https://jsonplaceholder.typicode.com/todos");








//
//async function getData(url) {
//    try {
//        const response = await fetch(url);
//         const data = await response.json();
////        console.log(data);
//        let mas=data;
//        return mas;
//    }catch (error){
//        console.log(error);
//    }
//}
//
//let mas1=getData("https://jsonplaceholder.typicode.com/todos");
//console.log(mas1);
//
//fecth(url).then(function(response){
//     return response.json();})
//.then(function(data){
//     console.log(data);
// }).catch(function(){
//     console.log('sdfdsfds');
// });
//fetch(url)
//.then(r=>r.json())
//.then(data=>console.log(data))
//.catch(e=>console.log('dsfds'))

//fetch('https://jsonplaceholder.typicode.com/todos');

//var i;
//var fib = [];
//fib[0] = 0;
//fib[1] = 1;
//for (i = 2; i <= 200; i++) {
//    fib[i] = fib[i - 2] + fib[i - 1];
//}
//console.log(fib);
//
//for (let j = 1; j < fib.length; j++) {
//    for (let k=1; k< 200;k++){
//    if (fib[j] = mas[k].id) {
//        console.log('есть');
//    }else{
//        console.log('не совпало');
//    }
//
//}}
