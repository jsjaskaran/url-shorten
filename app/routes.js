// all routes

module.exports = function(app, restcalls){

	// show website index page
	app.get('/', function(req, res){
		res.send('index page not implemented yet');
	});

	// post url
	app.post('/api/v1/shorten', restcalls.shortenUrl);

	// get & check url
	app.get('/:link', restcalls.checkAndVerifyUrl);

};