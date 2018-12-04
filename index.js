var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var expressValidator = require('express-validator');

var app = express();

// var logger = function(res, req, next) {
//   console.log('Logging....');
//   next();
// }

// app.use(logger);

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'views'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// set Static path
app.use(express.static(path.join(__dirname, 'public')))

// var person = [
//   {
//     name: 'Gaurav',
//     age: 30
//   },
//   {
//     name: 'Jenny',
//     age: 32
//   },
//   {
//     name: 'Jason',
//     age: 45
//   }
// ]

var users = [
    {
      id: 1,
      first_name: 'John',
      last_name: 'Smith',
      email: 'john@john.com'
    },
    {
      id: 2,
      first_name: 'James',
      last_name: 'Smith',
      email: 'james@john.com'
    },
    {
      id: 3,
      first_name: 'Jacob',
      last_name: 'Smith',
      email: 'jacob@john.com'
    },
]

app.get('/', function( req, res) {
  var title = 'you are a customer 3';
  var title2 = "you are a new customer";
  // res.json(person);
  res.render('index', {
    title: title,
    users: users
  });
});

app.post('/users/add', function(req, res){
  // console.log(req.body.first_name);

  var newUser = {
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email
  }
  console.log(newUser);
})

app.listen(3000, function(){
  console.log('Server is listening on Port 3000.....');
})