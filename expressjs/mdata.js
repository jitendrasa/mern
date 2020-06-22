var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/employee', {useNewUrlParser: true, useUnifiedTopology: true});
var conn=mongoose.connection;
var employeeSchema = new mongoose.Schema({
    name: String,
    email: String,
    etype: String,
    hourlyrate: Number,
    totalHour: Number,
    total: Number,
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
total:160,
});

var employees = new employeeModel({name:'Krishna',
email:'info@krishnasah.com',
etype:'hourly',
hourlyrate:10,
totalHour:16,
total:160,
});

var employees = new employeeModel({name:'Amit',
email:'info@amitsah.com',
etype:'hourly',
hourlyrate:10,
totalHour:16,
total:160,
});

var employees = new employeeModel({name:'Dharmendra',
email:'info@dharmendrasah.com',
etype:'hourly',
hourlyrate:10,
totalHour:56,
total:560,
});

employees.total = employees.totalSalary();

conn.on("connected",function(){
  console.log("Connected Sucessfully");
});

conn.on("disconnected",function(){
  console.log("disconnected Sucessfully");
});

conn.on('error', console.error.bind(console, 'connection error:'));
conn.once('open', function() {
//   employees.save(function(err,res){
// if(err) throw error;
// console.log(res);
// conn.close();
//   });

  /*employeeModel.find({}, function(err, data){

    if(err) throw error;
    console.log(data);
    conn.close();
  });
  */

  /*employeeModel.findOne({}, function(err, data){

    if(err) throw error;
    console.log(data);
    conn.close();
  });
  */

 /*
 employeeModel.findById({_id:"5eddaca057e838078ad5a36f"}, function(err, data){

  if(err) throw error;
  console.log(data);
  conn.close();
});
*/

/* 
employeeModel.find({name:"Dharmendra"}, function(err, data){

  if(err) throw error;
  console.log(data);
  conn.close();
});
*/

employeeModel.find({}, function(err, data){

  if(err) throw error;
  console.log(data);
  conn.close();
});


});