var express = require('express');
var router = express.Router();
var app = express();
var User = require('../models/userModel');
var bcrypt = require('bcrypt');

// define the player array for entries
// if(!app.locals.players){
// app.locals.players = [];
// }

// get request for the root page
router.get('/', (req, res, next)=>{

    res.render('login');

  });

// get request for creating a new user
router.get('/createuser', (req, res, next)=>{

      res.render('createuser');

    });

//post request for adding a new player
//new player will be submitted to the database
//redirect to the root page
router.post('/createuser', (req, res, next)=>{

  // encrypt password for saving
  var myPassword = req.body.password;
  var hash = bcrypt.hashSync(myPassword, 10);

  var user = {
    username: req.body.username,
    password: hash,
  }
  var user = new User(user);
    user.save()
    .then(()=>{
      res.redirect("/menu");
    })
    .catch((err)=>{
      if (err){
        console.log(err);
        throw new Error("UserSaveError", player);
      }
    });
});

// post request for login

router.post('/login', (req, res, next)=>{
  User.findOne({'username': req.body.username})
  .then((user)=>{

// compare the entered password with the hashed password in the database
    if(bcrypt.compareSync(req.body.password, user.password)) {
      res.render('welcome', {
        user: user
      });
    } else {
     res.render('accessdenied');
    }
  });
});




// then at the bottom of our file, export the router object
module.exports = router;
