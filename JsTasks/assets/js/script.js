"use strcict";

//1. Verilmiş n - ədədinin 3-ə və 7-ə bölünüb-bölünməməsini tapan bir function yazin.

// let n=21;

// function isDivided(){
//     if(n%3==0 && n%7==0){
//         console.log("bolunur");
//     }else{
//         console.log("bolunmur");
//     }
// }

// isDivided();


//2. Functiona musbet bir eded gelir, hemin funksiya gelen ededin faktorialini hesablayib geri qaytarmalidir.

// let result = 1;

// function findFactorialNumber(number){
//     if (number == 0)
//     {
//         return 1;
//     }
//     else
//     {

//         for (let i = 2; i <= number; i++) {
//             result *= i;
//         }
//         return result;
//     }
// }

// console.log(findFactorialNumber(4));


//3.Her hansisa number elementleri olan arayin icindeki cut ededlerin kvadratlarinin cemini hesablayan bir function yazin.

// let arr=[1,2,3,4];


// function sumOfNums(arr){
//     let sum=0;
//    for(let i=0;i<arr.length;i++){
//     if(arr[i]%2==0){
//         sum+=arr[i]*arr[i];
//     }
//    }
//    return sum;
// }

// console.log(sumOfNums(arr));




//4.Funtiona-a  mail ve password gelir.
//  Mail beraberdirse cavid@code.edu.az -a ve password beraberdirse 12345 -e,
// ekranda "Girish olundu" yazilsin,
//  eks halda "Mail ve yaxud password sehvdir" yazilsin.

// function userLogin(mail,password){
//     if(mail=="cavid@code.edu.az" && password=="12345"){
//         console.log("Girish olundu");
//     }else{
//         console.log("Mail ve yaxud password sehvdir");
//     }
// }
// userLogin("cavid@code.edu.az","12345");



//5.Functiona ededlerden ibaret array gelir, function hemin arraydaki tek ededlerin cemini qaytarmalidir.

// let arr = [1,2,3,4,5]
// let sum=0;

// function singleNumber(arr){
//     for (let i = 0; i <arr.length; i++) {
//         if(arr[i]%2==1){
//             sum+=arr[i];
//         }
//     }
//     return sum;
// }
// console.log(singleNumber(arr));

//6.Functiona ededlerden ibaret array gelir, function hemin arraydaki cut ededlerin sayini qaytarmalidir.

// let arr = [1,2,3,4,5]
// let sum=0;

// function singleNumber(arr){
//     for (let i = 0; i <arr.length; i++) {
//         if(arr[i]%2==0){
//             sum+=arr[i];
//         }
//     }
//     return sum;
// }
// console.log(singleNumber(arr));

// 7.Icerisinde name, surname, age, email olan bir nece student objectleriniz var. 
// Ashagida elave etdiklerimi functionlar sekilinde yazin, 
// functionlar objectlerden ibaret array qebul edecek.
// 1) Yashi 18-25 araliginda olan telebelerin sayi.
// 2) Emailinde "c" herfi olan studentlerin sayi.

// let students= [
//     {
//         name:"Behruz",
//         surname:"Eliyev",
//         age:18,
//         email:"behruz@code.edu.az"
//     },
//     {
//         name:"Esgerxan",
//         surname:"Bayramov",
//         age:26,
//         email:"esgerxan@code.edu.az"
//     },
//     {
//         name:"Reshad",
//         surname:"Aghayev",
//         age:21,
//         email:"reshad@code.edu.az"
//     }
// ]


// function countStudentAge(arr){
//     let count=0;
// for (let i = 0; i < arr.length; i++) {
//     if(arr[i].age>=18 && arr[i].age<=25){
//         count++;
//     }
    
//    }
//     return count;
// }

// console.log(countStudentAge(students));



// function countStudentEmailCheck(arr) {
//     let count = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i].email.includes("c")) {
//             count++;
//         }
//     }
//     return count;
// }

// console.log(countStudentEmailCheck(students));




//8.Function yazacaqsiz, Functiona parametr olaraq string gelecek. Hemin function gelen parametrin ilk herfini boyuk herf edib geri qaytarsin.


// let text="cavid";

// function checkForText(text) {
//     if (text.length === 0) {
//         return "";
//     }else{
//         return text.charAt(0).toUpperCase() + text.slice(1);
//     }
    
// }

// console.log(checkForText(text));