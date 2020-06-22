const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://<mongodbuser>:<123456789>@cluster0-jwqse.mongodb.net/<dbname>?retryWrites=true&w=majority', {useNewUrlParser: true});
var conn =mongoose.Collection;

var employeeSchema =new mongoose.Schema({
    name: String,
    email: String,
    etype: String,
    hourlyrate: Number,
    totalHour: Number,
    total: Number,
    images: String,
});

var employeeModel = mongoose.model('Employee', employeeSchema);
module.exports=employeeModel;
