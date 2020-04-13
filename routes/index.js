var express = require('express');
var router = express.Router();
var quizController = require('../controllers/quiz_controller');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/quizes/question', quizController.question);
router.get('/quizes/answer', quizController.answer);


router.get('/login', function(req, res, next) {
	User.find(function(err, doc){
	console.log(doc);
	res.render('login', { title: 'Express' });	
		});
});
router.post('/', function(req, res){
	res.render('form', { title: 'Tengo BODY' });
	});
router.post('/users', function(req, res){
	var user = new User({email: req.body.email, 
		 password: req.body.password,
		 password_confirmation: req.body.password_confirmation });

user.save(function(){
  console.log("Contraseña: " + req.body.password);
  console.log("Email: " + req.body.email);
	res.send("Recibimos y guardamos tus datos");
	});
	});

module.exports = router;
