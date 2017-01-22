// all routes

module.exports = function(app, restcalls){

	// show website index page
	app.get('/', function(req, res){
		res.render('index');
	});

	// post url
	app.post('/api/v1/shorten', restcalls.shortenUrl);

	// get & check url
	app.get('/:link', restcalls.checkAndVerifyUrl);

};