var mongoose = require("mongoose");
var Schema = mongoose.Schema;
mongoose.set('useUnifiedTopology', true);// siempre antes que el conect
mongoose.connect("mongodb://localhost/fotos", { useNewUrlParser: true });


var userSchemaJSON = {
	name:String,
	username:String,
	password:String,
	age: Number,
	email:String,
	date_of_birth: Date,
	};
var user_schema = new Schema(userSchemaJSON);
user_schema.virtual("password_confirmation").get(function(){
	return this.password_confirmation;
	}).set(function(password){
		this.password_confirmation = password;
	});
	
var User = mongoose.model("User", user_schema);// User tambien define el nombre de la coleccion => users (en plural)

module.exports.User = User;

