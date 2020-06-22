const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://<mongodbuser>:<123456789>@cluster0-jwqse.mongodb.net/<dbname>?retryWrites=true&w=majority', {useNewUrlParser: true});
var conn =mongoose.Collection;

var uploadSchema =new mongoose.Schema({
    imagename: String,
});

var uploadModel = mongoose.model('uploadimage', uploadSchema);
module.exports=uploadModel;
