var mongoose = require('mongoose');
var employeeSchema = new mongoose.Schema({
    name: String,
    email: String,
    etype: String,
    hourlyrate: Number,
    totalHour: Number,
  });
  employeeSchema.methods.totalSalary=function(){
      console.log("Total Income of %s: Rs. %d",this.name, this.hourlyrate* this.totalHour);
  }


  var employeeModel = mongoose.model('Employee', employeeSchema);
var employees = new employeeModel({name:'Jitendra',
email:'info@jitendrasah.com',
etype:'hourly',
hourlyrate:10,
totalHour:16,
});

employees.totalSalary();