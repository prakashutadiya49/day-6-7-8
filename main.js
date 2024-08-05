// variables in js

// var a=5;
// console.log(a);
// var a; 
// console.log(a);
const a=5;

console.log(a);

console.log(eval("3 + 5"));

//Arrays in js

// declaration:
let arr1=[1,'prakash','utadiya',2,true];
let arr2=new Array("a",1,2,3,4,5,6,7);
console.log(arr1);

//methods of Array:
// 1.push()
// 2.unshift()
// 3.shift()
// 4.pop()
// 5.splice(starting index,no.of element) --remove element
// 6.slice()
//7.isArray()
//8.string.split(' ') --to create array of word seprate by blank space
//9.array.join(' ') join array element by space and give string
//10.arr1.concat(arr2) --combined array arr1 and arr2
 
//mutidimantion array refrence mdn
let s="prakas'h";
s='prakas"h';

const object={
    'name':'prakash',   
    'age':18
};
console.log(object);

//document.write() methosd use to write text in web page.
//foreach method is a part of the prototype 
//object which assosiate with all object which contain all predefine method

arr1.forEach((element,index)=>{
    console.log(index);
    console.log(element);
})

// String method take refrence of mdn.


// js oprators

//+ operator follow oprator overoading concept
let x=5+10;
console.log("value of x:"+x);
let fullname="prakash"+" "+"utadiya";
console.log(fullname);

//ternry oprator
let statu=17>18?"male":"child";
console.log(statu);

//null value handling 
let user;
//this line show undefined
// alert(user);
alert(user?? "user not define");


//type conversion:

//As you will see in the next challenge, these values will always be a string (even if the user writes a number). Thus, it is your job to convert it to a number.

//manual conversion: 1.String(value that change into String) 2.Number()  3.Boolean()
let h=10;
let l="20";
console.log(h+l);
l=Number.parseInt(l,10);
console.log(h+l);

//automatic conversion:
let number=5+null;
// value:5 becuase null convert in 0 by js.
//to cheak type use typeof function.
"yes"*10; //NaN
"5"-2  //3
"3" * 2 //6
let num=Number("hello") //hello conver into NaN and its type is number 

// expact 0 all other number convert into true and 0 into false
// blanck string covert into false and other into string by Boolean() function

//conditions and switch case 

// if(){}
// else{}

// if(){
//     if(){}
//     else{}
// }
// else{}

// switch(){
//     case:
//     break;
//     defult:
//     break;
// }

//looping

// while(){

// }

// do{

// }while{

// }

// for(: :){}

//nested loop
//form inner loop break outer loop we use label.

outer:for(let i=1;i<=10;i++){
    console.log("outer:"+i);
    inner:for(let j=1;j<=3;j++){
        if(j==3){
            break outer;
        }
        console.log("inner:"+j);
    }
}

//popup boxes:it stop the execution of script until not conform.
/*
1.prompt:return user entered value or null.
2.alert:to show message
3.conform:to take permission return true or false. 
*/ 

//simple function
let globalvariable=2; //gloable variable-acess entire program
function add(num1,num2){
    let localvariable=2 //local variable acess within function
    console.log(num1+num2);
    return num1+num2;
}
let sum=add(5,6);
console.log(sum);

//Functions are a way of packaging functionality that you wish to reuse. It's possible to define a body of code as a function that executes when you call the function name in your code. This is a good alternative to repeatedly writing the same code.
//anonomus function means fun without name. like arrow function 

let print=function (){ //print is like function expration 
    console.log("printing....");
}

//settime out function for delay
setTimeout(()=>{
    console.log("this line run after 3000 miliseconds"),3000
});

//automatic self calling functions or imidiate calling function--used for memory management and use to declare same name variable two time
(function () {
  "use strict";
  function greetMe(yourName) {
    alert(`Hello ${yourName}`);
  }

  greetMe("prakash utadiya");
})();

// when we use third party code then there is a chance to comflict.to sove this problem
// we make anonumus function of third party code.

let msg="my file code...";

function show(){
    console.log(msg);
}

show();
/*

(function (){
 third party code....
})();

*/ 

(()=>{
    //for beginner use strict means follow tightly copled javascript
    "use strict";
    function getname(name){
        alert(`welcome to sky9it ${name}`)
    }
    getname("prakash utadiya");
})();


// the argument object: when user pass unexpected number of argments
function add(){
// all arguments are available in argument array which is defult
console.log(arguments);
console.log(arguments.length);
}
add(1,2);
add(1,2,3,4);
add(1,2,3,4,5,6,7,8);

let addition=add;  // add function ref. pass into addition now call same function with addition name.
addition(1,2,3);
// Dom manupulation

/*This can be anything. 
Everything in JavaScript is an object 
and can be stored in a variable. */
const h1=document.querySelector("h1");

//inner html add entire html tag
// h1.innerHTML=`<h6> prakash utadiya</h6>`;

// inner text add as String not tag
// h1.innerText=`<h6> prakash utadiya</h6>`;


//event in js
//event is a task perform when spacific action perform.

document.querySelector('html').addEventListener('click',()=>{
    alert("stop clicking screen...");
})


/*
The function we just passed to addEventListener() 
here is called an anonymous function, 
because it doesn't have a name.
 There's an alternative way of writing anonymous functions, 
  we call an arrow function.
 An arrow function uses () => instead of function ():
*/ 
document.querySelector('h1').addEventListener('click',()=>{
    document.querySelector('body').style.background='red';
});

let btn=document.querySelector('#btn');
let img=document.querySelector('img');
btn.onclick=()=>{
    let src=img.getAttribute("src");
    if(src==="images/1.jpg"){
        img.setAttribute("src","images/2.jpg")
    }
    else{
        img.setAttribute("src","images/1.jpg");
    }
}


//api that store data in loca browser
const changerbtn=document.querySelector("#changerbtn");

function setuser(){
    const username=prompt("Enter new user name..");
    localStorage.setItem("name",username);
    h1.innerHTML=`<h6> ${username}</h6>`;
}

changerbtn.addEventListener('click',()=>{
    if(!localStorage.getItem('name')){
      setuser();
    }
    else{
        const storename=localStorage.getItem("name");
        h1.innerHTML=`<h6> ${storename}</h6>`;
    }
})