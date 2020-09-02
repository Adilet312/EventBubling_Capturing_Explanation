import './css/styles.css';

//When you clicked one of boxes, first event will register child(li) and parent element (ul) [Event is registering  in bubling phase](when third parameter is false)
document.querySelector('.grid').addEventListener('click',function(e){
  console.log("UL is registered second",e.target.className)
},false);
document.querySelector('.pink').addEventListener('click',function(e){
  console.log("LI is registered first",e.target.className)
},false);

//When you clicked one of boxes, first event will register parent(ul) and child element (li) [Event is registering in capturing phase](when third parameter is true)
// document.querySelector('.grid').addEventListener('click',function(e){
//   console.log("UL is registered second",e.target.className)
// },true);
// document.querySelector('.pink').addEventListener('click',function(e){
//   console.log("LI is registered first",e.target.className)
// },true);

//If you want to stop after registering child element ,then you should event.stopPropogation()

// document.querySelector('.grid').addEventListener('click',function(e){
//   console.log("UL is registered second",e.target.className)
// },true);
// document.querySelector('.pink').addEventListener('click',function(e){
//   console.log("LI is registered first",e.target.className)
//   e.stopPropogation(); //addEventListener will stop registering parent elements.
// },true);

//preventDefault() stops performing some action. It usally used when you do data validation.
//When user submit the form, client side (JS) checks data before browser sends request to the server. If data is invalid, then you use preventDefault() in order stop prosses.











// let count = 0;
// let min = 0;
// let max =0;
// let result = document.querySelector('.result');
// let lower = document.querySelector('.lowerBoundery');
// let upper = document.querySelector('.upperBoundery');
// document.querySelector('.lowerBoundery').addEventListener("input",function(event){
//    min = event.currentTarget.value;
// });
// document.querySelector('.upperBoundery').addEventListener("input",function(event){
//    max = event.currentTarget.value;
// });

// document.querySelector('.down').addEventListener('click',function(){
//   min = lower.value
//   if(min < count){
//       count--;
//       result.innerText = count;
//   }else{
//     result.innerText = "The number has reached the min " + `${count}`;
//   }
//
//
// },false)
//
//
// document.querySelector('.up').addEventListener('click',function(){
//   max= upper.value
//   if(max  > count){
//       count++;
//       result.innerText = count;
//   }else{
//         result.innerText = "The number has reached the max " + `${count}`;
//   }
// },false);
