// ECMAScript or ES6 2015
// let, cost, templating string, class

// var a=30;
// var a=40;

// let a=30;
// // let a=40;

// console.log(a);

// let a=30;
// function abc(){
//     let a=40;
//     console.log(a);
// }
// abc();
// console.log(a);


// const a=40;
// const a=30;

// const a={
//     "name":"Jitendra",
//     "age":23
// }
// a.email="info@Jitendrasah.com";
// a.age=30;

// console.log(a);


// var name="Jitendra";
// var age=23;

// console.log("Hi %s you are %s years old",name,age);
// console.log("Hi "+name+" you are "+age+" years old");
// console.log(`Hi ${name} you are ${age} years old`);

class Users{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }

    getName(){
        this.email="info@jitendrasah.com";
        return this.name;
    }

    getAge(){
        return this.age;
    }
    getEmail(){
        return this.email;
    }
}

var user =new Users("Jitendra Sah",23);
console.log(user.getName());
console.log(user.getEmail());