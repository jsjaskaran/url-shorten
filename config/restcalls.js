var Url = require('../app/models/url');
const baseUrl = 'https://urlsly.herokuapp.com/';

exports.shortenUrl = function(req, res){
	var url = new Url();

	url.url = req.body.url;

	url.save(function(err, doc){
		if(err){
			res.json({status: 'error', data: err});
			return false;
		}

		var toReturn = {
			message: 'Url save success',
			url: baseUrl + doc.shortenUrl
		};

		res.json({status: 'success', data: toReturn});
	})
};

exports.checkAndVerifyUrl = function(req, res){
	Url.find({'shortenUrl': req.params.link}, function(err, doc){
		
		if(err || Object.keys(doc).length == 0){
			res.json({status: 'error', data: '404'});
			return false;
		}

		res.status(200).send({status: 'success', data: doc});

	})
};