"use strict";

// let person ={
//     name:"Nurlan",
//     surname:"Umudov",
//     age:22
// }

// document.querySelector("h1").innerText = person.name

// let datas = [
//     {
//      name: "Behruz",
//      surname: "Eliyev",
//      groups:[
//         "PB101",

//      ],
//      teachers:[
//         "Cavid",

//      ]
//     },
//     {
//         name: "Resad",
//         surname: "Agayev",
//         groups:[
//            "PB101",

//         ],
//         teachers:[
//            "Cavid",

//         ]
//     },
//     {
//         name: "Nurlan",
//         surname: "Umudov",
//         groups:[
//            "PB101",

//         ],
//         teachers:[
//            "Cavid",

//         ]
//     }

// ]

// console.log(datas);



let surname = "Eliyev Behruz Azerbaycan";

//console.log(surname.length)

// console.log(surname.toLowerCase())

//console.log(surname.toUpperCase())

// console.log(surname.trim())

// console.log(surname.startsWith("e".toUpperCase()))

// console.log(surname.indexOf("i"))

// console.log(surname.substring(0,3))

// console.log("nkngdvklnerkdvnadvnlkdjfgalfdjvlaglafjdv".substring(0,10)+"...")

// for (let i = 0; i < surname.length; i++) {
//     const element = surname[i];
//     console.log(element);
// }

// console.log(surname.includes("e".toUpperCase()))

// let array = surname.split("  ");

// console.log(array);


// console.log(surname.charAt(0));

// console.log(surname.charCodeAt("T"));

// console.log(surname.slice(0,3));

// console.log(surname.replace("Azerbaycan","Amerika"));


// let nums=[1,4,5,6,7,8,8]

// for (let item of nums) {
//     console.log(item);
// }


// let person ={
//         name:"Nurlan",
//         surname:"Umudov",
//         age:22
//     }

// for (const key in person) {
//    console.log(person[key]);
// }


// for (const key in person) {
//     if(key == "name" || key == "surname")
//     console.log(person[key]);
//  }


// let nums=[1,4,5,6,7,8,8]

// nums.forEach(element => {
//     console.log(element);
// });


// nums.forEach((element,i) => {
//     console.log(element+" "+i);
// });

// let data = nums.toString();

// let data = nums.join();

// nums.pop();

// nums.push(100)

// nums.shift(1);

// console.log(nums);


// const myGirls = ["Cecilie","Lone"];
// const myBoys = ["Emil","Tobias","Linus"];

// const myChildren = myGirls.concat(myBoys);

// console.log(myChildren);


// let address ="Ehmedli";

// let result = [...address];

// console.log(result);



// let obj = {
//     name:"test",
//     surname:"testov"
// }

// let data = {...obj}

// console.log(data);


// let nums=[1,4,5,6,7,8,8]

// let datas = [...nums];

// console.log(datas);

// showText();


// function showText(){
//     console.log("Hello World");
// }



// function showText(text){
//     let a=100;
//     if(a>50){
//         console.log(text);
//     }

// }



// showText("Hello World");

// function showText(text){
//    
//         console.log(text);
//       
// }

// showText(100);



// function sum(a,b){
//     let result = a + b;
//     console.log(result);
// }
// sum(100,200);


// let datas=[1,2,100,5,600,9,90];

// function findData(arr){
//     for (const item of arr) {
//         if(item == 100){
//             console.log("100 already found");
//             break;
//         }
//     }   
// }

// findData(datas);


// function sum(a,b){
//     return a+b;
// }

// console.log(sum(4,5));



// let datas=[1,2,100,5,600,9,90];

// function test(arr){
//     arr[0]=100;
//     console.log(arr);
// }

// test(datas);

// console.log(datas);



// let b=100;

// function test(a){
//     a=20;
//     console.log(a);
// }

// test(b);

// console.log(b);


// function test(a,...datas){
//     for (let i = 0; i < datas.length; i++) {
//         const element = datas[i];
//         console.log(element);
//     }

// datas.forEach(element => {
//     console.log(element)
// });

// }

// test(1,2,3,4,5)


// function test() {
//     for (let i = 0; i < arguments.length; i++) {
//         const element = arguments[i];
//         console.log(arguments);
//     }
// }

// test(1, 2, 3, 4, 5)

// console.log(this);


// function showNumber(){
//     console.log(this);
// }

// showNumber();

// const showText = () =>{
//     console.log(this);
// }

// showText("Nesir bey");


// let student = {
//     name:"Reshad",
//     surname:"Aghayev",
//     age:21,
//     address:"Neftchiler",
//     getFullName:function(){
//         console.log(this);
//     },
//     getFullData:()=>{
//         console.log("Welcome");
//     }
// }

// student.getFullName();
// student.getFullData();


// function test () {
//     for (let i = 0; i < arguments.length; i++) {
//         const element = arguments[i];
//         console.log(element);
//     }
// }

// test(1,2,3);


