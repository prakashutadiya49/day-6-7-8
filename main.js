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
let users;
//this line show undefined
// alert(user);
alert(users?? "user not define");


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

// Dom manupulation---API to acesss html or xml code in js file or manupulate it.
//every html tag are treate as a object and tree lke structure form.
//top level object window-->document

/*This can be anything. 
Everything in JavaScript is an object 
and can be stored in a variable. */


//element.parentelement give parent element 

const h1=document.querySelector("h1");
console.log(h1.parentElement);
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

// object in js
//another obj proprties acess in other object and same object proerties acess using this obj.

const student={
    firstname:"prakash",
    secondname:"utadiya",
    printlastname:()=>{
        console.log(this.lastname);
    },
    printstudentcoursedetails: function(){
        console.log("student course:"+course.name);
    },

    // getter and setter:used when we need to save value with change
    get getname(){
        return this.firstname.toUpperCase();
    },

    set setlastname(n){
        this.lastname=n.toUpperCase();
    }
};

//acess properties:
console.log(student.firstname);
console.log(student['secondname']);

//method in object:
// student.getname=function(){
//     return student.firstname;
// }
// student.getname();
//addproperties in object
const course={

}
course.name="computer science";
course.duration="4 years";
student.age=20;

//print age
console.log(student.age);

//print object
console.log(course);
console.log(student);

//change properties
student.age=student.age+1;
console.log(student);

//delete age
delete student.age;

// math object and rendom object and date object from google
console.log(Math.floor(Math.random()*10)+1);
console.log(Math.floor(Math.random()*(25 - 15))+15);

//getter and setter methods:
console.log(student.getname);
student.setlastname="ahir";
console.log(student);

//object constructor:

let employee_suraj={
    name:"suraj shrma",
    salary:32_500,
    company_name:"sky9it",
    age:23
};
console.log(employee_suraj);

//what if we need to create large number of objects?

function Employee(name,salary,companyname,age){
    this.name=name;
    this.salary=salary;
    this.companyname=companyname;
    this.age=age;
}

const ep1=new Employee("prakash",45000,"sky9it",23);
//add properties in object which created using Employee constructor
//this below line code only add in ep1 not in Employee constructor.


ep1.nationality="indian";
ep1.nameandnation=()=>{
    return this.name+" "+this.nationality;
};
console.log(ep1);

//object prototypes.
//use to add properties or method in object constructor dynamicly by prototype top level object.
//dynamiclly add properties are added into prototype object which acess by object name.

Employee.prototype.state="gujrat"; //add dynamically
Employee.prototype.getresidancy=()=>{
    return this.state;
};

console.log(ep1.state);

// Nested objec(t

let collage_student={
    enroll:210200107044,
    email:"prakashutadiya@gmail.com",
    personalinfo:{
        studentname:"prakash utadiya",
        nativepace:"upleta",
        course:"computer engineering",
        address:{
            street:"arjun socity",
            area:"porbandar road",
            pincode:360_490
        }
    },
};

console.log(collage_student);
console.log(collage_student.personalinfo.address);


//Hoisting: is a js feature in which js inteerpreter cheak entire declation before code compiled 
//this feature allow as to call fun even if decare after fun call.
//in hosting when file oad at that time all declare code are added in starting by js.

//hoisting in function

hello(); //valid in js.

function hello(){
    console.log("hello.....");
}

//hoisting in variable only for var---for let not possible becuase of lacsical scope or block scope
console.log(v); //undefined
var v;
v=10;
console.log(v); //10

// Temporal Dead Zone (TDZ)
// Both let and const are subject to the Temporal Dead Zone (TDZ),
// which is a behavior where accessing a variable before its declaration results in a ReferenceError. 
//This happens because although let and const declarations are hoisted, they are not initialized until the execution reaches their declaration.
//   {
//     console.log(x); // ReferenceError: Cannot access 'x' before initialization
//     let x = 5;
//   }
//   {
//     console.log(y); // ReferenceError: Cannot access 'y' before initialization
//     const y = 10;
//   }
  
{
    let x;
    console.log(x);
    x=7;
  }
  
// scope of let and const:

const obj = { key: 'value'};
obj.key = 'new value'; // Allowed
// obj = {}; // TypeError: Assignment to constant variable

//Lexical scope

function outerFunction() {
    let outerVar = 'I am outside';
    const outerConst = 'Constant outside';
  
    function innerFunction() {
      console.log(outerVar); // 'I am outside'
      console.log(outerConst); // 'Constant outside'
    }
  
    innerFunction();
  }
  
  outerFunction();
  
//insert before

let parent=document.querySelector("#list");

 let newitem=document.createElement("li");
 newitem.textContent="new item";

 //select item before we insert

 let pos=parent.firstElementChild.nextElementSibling.nextElementSibling; //select second list item.
 parent.insertBefore(newitem,pos);

 //delete spacific added list item element

//  let topelement=document.querySelector("#list");

//  let delitem=topelement.firstElementChild.nextElementSibling.nextElementSibling;

//  topelement.removeChild(delitem);

//delete entire ul

let toplevel=document.body;
let delist=document.querySelector("#list");
toplevel.removeChild(delist);


//how to copy or clone element

let cloneelm=document.querySelector("#manu").cloneNode(true); //true ---- then child element also clone otherwise not.
cloneelm.id="mobilemenu";
document.body.appendChild(cloneelm);

//replace element

// let currentitem=document.getElementById("manu").firstElementChild.nextElementSibling;
// let replaceitem=document.createElement("li");
// replaceitem.textContent="Services";
// document.body.replaceChild(currentitem,replaceitem);

//insert Asjucent HTML

let div=document.querySelector("#intro");
let htmlelement=document.createElement("h1");
htmlelement.textContent="htmlelement";
div.insertAdjacentElement('beforebegin',htmlelement); //1 apply then overide
// div.insertAdjacentElement('afterbegin',htmlelement); //2
// div.insertAdjacentElement('beforeend',htmlelement);//3
// div.insertAdjacentElement('afterend',htmlelement);//4

//attribute method

/*
element.getattribute(attributename)
element.setattribute(attribute,value)
element.removeattribute(attributename)
element.hasattribute(attributename) --return true-false
 */


//inline css---privious stye remove
 
//1.method
//element.style.csstext="background-color:red; font-size:14;"
//2.method
//element.style.baground-color='red';
//3.using setattribute method.

//to get computed style use method

// let css=getComputedStyle(element);

//get apply css classes.

let para=document.getElementById("para");
console.log(para.className);
// para.className+=" dim";
para.classList.add("dim");
para.classList.remove("dim");
para.classList.replace("color","dim");
console.log(para.classList.contains("color")); //return true or false
para.classList.toggle("color"); //if class present then remove othervise add.
console.log(para.classList);
console.log("number of classes on para:"+para.classList.length); //if no class apply then 0.
for(let cssclass of para.classList){
    console.log(cssclass);
}

//find height and width
