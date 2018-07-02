//parent class
function Controller(){
	this.error = []
}
Controller.prototype.showDialog = function(title, msg) {
	// body...
};
Controller.prototype.success = function(msg) {
	this.showDialog("Succes", msg);
};
Controller.prototype.failure = function(err) {
	this.errors.push( err );
	this.showDialog("Error", err );
};
//child class
function LoginController() {
	Controller.call( this )
}
LoginController.prototype = Object.create(Controller.prototype);

LoginController.prototype.getUser = function() {
	return document.getElementById('login_username')
};
LoginController.prototype.getPasssword = function() {
	return document.getElementById('login_password')
};
LoginController.prototype.validateEntry = function(user, pw) {
	user = user || this.getUser();
	pw = pw || this.getPassword();

	if(!(user && pw)){
		return this.failure("Please enter user name and password")
	}else if(pw.lenght < 5){
		return this.failure("Password must be 5+ characters!")
	}
	//got here? validated!
	return true
};
//override to extend base failure()
LoginController.prototype.failure = function(err) {
	// super call
	Controller.prototype.failure.call(this, "login invalidate :" + err);
};
//chiled class
function AuthController(login){
	Controller.call( this );
	//in addition to inheritance, we also need composition
	this.login = login;
}
//link child class to parent
AuthController.prototype = Object.create(Controller.prototype)

AuthController.prototype.server = function(url, data){
	return $.ajax({
		url:url,
		data: data
	});
};
AuthController.prototype.checkAuth = function() {
	var user = this.login.getUser();
	var pw = this.login.getPassword()

	if(this.login.validateEntry(user, pw)){
		this.server("/check-auth", {
			use = user,
			pw = pw
		}).then(this.success.bind( this ))
		.fail(this.failure.bind( this ))
	}
};
//override to exted base success()
AuthController.prototype.success = function(){
	Controller.prototype.success.call( this, "Authenticted!" )
}
//override to exted base failure()
AuthController.prototype.failure = function(err) {
	// super call
	Controller.prototype.failure.call( this, "Auth fail :" + err)
};

var auth = new AuthController(
	//in addition to inheritance, we also need composition
	new LoginController()
	);

auth.checkAuth();










