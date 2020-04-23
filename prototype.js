function student(){
    this.name="Jitendra";
    this.age=23;
    this.email="info@jitendrasah.com"
}

student.prototype={
    address:"Kathmandu",
    getName:function(){
        return this.name;
    }
}

var stud = new student();
// console.log(stud);
console.log(stud.address);