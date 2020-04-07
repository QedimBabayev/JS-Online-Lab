

// function EvenNumbers(n){

//     if(n % 2 ==0){
//         console.log("eded cutdur")
//     }
//     else{
//         console.log("eded tekdir")
//     }

// }

// const inners = [...document.getElementsByClassName("inner")]


// const inners =  document.querySelectorAll(".inner")  // html colection 

//  inners.forEach(v=>{

//     v.onclick = function(){

//      v.children[0].innerHTML = "deyisildi"


//         v.style.backgroundColor  = "red";
//     }

//  })




 

// 



// let numbers = [15,25,35,37,43];



//   const fiveDeviders =  numbers.filter(function(v,i,a){

// return v % 3 ===0 ;

// })


// console.log(fiveDeviders)


///5e bolunen ededleri qaytarmaq

// let numbers = [15,25,35,37,43];


// function ArrayFilter(arrayIn, callBackFunc){

//  var  newArray = [];

//  for(let i = 0; i<arrayIn.length; i++){

//     if(callBackFunc(arrayIn[i]) ){
//         newArray.push(arrayIn[i])
//     }
//  }

//  return newArray;


// }


// function isDevidedFive(number){

// return number % 5 === 0;
// }

// function isDevidedThree(number){

//     return number % 3 === 0;
//     }
    
//   var devidedthree =   ArrayFilter(numbers,isDevidedThree);

//   console.log(devidedthree)


//   var devidedFive =   ArrayFilter(numbers,isDevidedFive);

//   console.log(devidedFive)


//Add word to div



// var button = document.querySelector(".mybtn");
// var input = document.getElementById("inputselect");

// var wordsHolder = document.querySelector(".wordsHolder")



// document.onkeydown = function(e){

// if(e.keyCode === 13){

//     let  newDiw = document.createElement("div");

//     newDiw.classList.add("adding");
    
//     let newP = document.createElement("p");
//     newP.classList.add("innertext");
    
//     newP.innerHTML = input.value + '<i class="fas fa-times"></i>';
    
    
    
//     newDiw.appendChild(newP);
    
    
//     wordsHolder.appendChild(newDiw)
    
    
//     newP.firstElementChild.onclick = function(){
//         this.parentElement.parentElement.remove();
       
//     }
    
    
//     newDiw.onclick = function(){
    
//     this.classList.toggle("s    cale");
    
//     }


    
// }

// }


// button.onclick = function()
// {
// let  newDiw = document.createElement("div");

// newDiw.classList.add("adding");

// let newP = document.createElement("p");
// newP.classList.add("innertext");

// newP.innerHTML = input.value + '<i class="fas fa-times"></i>';



// newDiw.appendChild(newP);


// wordsHolder.appendChild(newDiw)


// newP.firstElementChild.onclick = function(){
//     this.parentElement.parentElement.remove();
   
// }


// newDiw.onclick = function(){

// this.classList.toggle("scale");

// }
// }

// localStorage.getItem
// localStorage.setItem
// var basketbox = document.querySelector(".basketBox");
// if(localStorage.getItem("basket") === null)
// {

//     localStorage.setItem("basket", JSON.stringify([]));
// }

//  var addToCards = [...document.querySelectorAll(".addToCard")];

//  addToCards.forEach(add=>{

//     add.onclick = function(e){

//       e.preventDefault();

//       var proid = this.getAttribute("data-proid");
//       var proname = this.getAttribute("data-proname");
//       var proprice = this.getAttribute("data-proprice");
//       let proimg = this.parentElement.previousElementSibling.getAttribute("src");

//       var product = {

//         id: proid,
//         name:proname,
//         price: proprice,
//         img:proimg,
//         quantity:1


//       }

//        var basketParsed  = JSON.parse(localStorage.getItem("basket"))  // arraya cevirdik;



//       var sameIndex  = -1;

//       if(basketParsed !==null){

//         sameIndex  = basketParsed.findIndex(b=>{

//             return  b.id == product.id;

//         })

//       }


//       if(sameIndex === -1){

//         basketParsed.push(product);

//       }
// else{
//     basketParsed[sameIndex].quantity ++;
//     }



//         UpdateCard(basketParsed);

//         localStorage.setItem("basket", JSON.stringify(basketParsed));
//     }

//  })


//  function UpdateCard(basket)
//  {
//     if(basket !==null){

//         var total = 0;

//         basket.forEach(element=>{

//             total += element.quantity;
//         })

//         return  basketbox.innerHTML = total;

//     }

//     return basketbox.innerHTML = basket.length;
//  }


// let up = document.querySelector(".topHolder")
// window.onscroll = function(){


//     if(window.scrollY > 300){

//       up.classList.add("active")
//     }

//     else{
//        up.classList.remove("active")

//     }
  
// }