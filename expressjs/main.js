const express = require("express");
const bodyParser = require('body-parser');
const { check, validationResult } = require('express-validator');
const { matchedData, body } = require('express-validator');

const app = express();
app.use('/abc', express.static('public'));
app.set('view engine', 'twig');
app.set('views', './public/views');


// create application/json parser
var jsonParser = bodyParser.json()

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


app.get('/', (req, res) => {
    res.render('index', { title: "Login Form", message: 'Enter Username and Password' });
});

// app.post('/login',urlencodedParser, function (req, res) {
//     res.send('welcome, ' + req.body.username)
//     })
app.post('/', urlencodedParser, [
    check('username', 'Username should be email id').trim().isEmail(),
    check('password', 'Password must be in 5 characters').trim().isLength({ min: 5 }),
    check('cpassword').custom((value, { res }) => {
if (value != res.body.password) {
    throw new Error('Confirm password does not match password');
}
return true;
    })

], (req, res) => {
    const errors = validationResult(req);
    console.log(errors.mapped());
    if (!errors.isEmpty()) {
        const user = matchedData(req);
        res.render('index', { title: "User Details", error: errors.mapped(), user: user });
    } else {
        const user = matchedData(req);
        console.log(user);
        res.render('login', { title: "User Details", user: user });
    }

});




app.listen(3000, () => console.log("Server running on port:3000"));
