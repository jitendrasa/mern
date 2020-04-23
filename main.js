// console.log("Hello World")

// const a=10;
// const b=20;
// c = a+b;
// console.log("Total of a plus b = "+c)

// const a=10;
// const b=20;
// c = a*b;
// console.log("Total of a multiply b = "+c)



// ============= Object Function ============= //

// var users={name:"Jitendra Sah",age:23,email:"sahjk715@gmail.com"}

// // console.log(users.name)
// console.log(users.age)

// ============= Anonymous Function ============= //

// var person=function(){
//     console.log("this is anonymous function")
// }

// person();

// var person=function(a,b){
//     var c=a+b;
//     console.log("Addition of a and b = "+c)
// }

// person(4,5);

// ============= Arrow Function ============= //

// var users=function(){
//     console.log("This is arrow function");
// }

// var users=()=> console.log("This is arrow function");

// var name = "Jitendra";
// var users=(a,b)=> {
//     var c = a+b;
//     console.log("Addition of "+ a+ " and "+b+" = "+c);
// }


// users(4,5);

// module.exports.abc=name;


var cal= require("./addition");
// console.log(cal.addition());`
cal.addition();
console.log(cal.aval);

