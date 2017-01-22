var Url = require('../app/models/url');
const baseUrl = 'https://urlsly.herokuapp.com/';

// creates shortenUrl, checks if url already exists or not
exports.shortenUrl = function(req, res){
	Url.find({url: req.body.url}, function(err, doc){
		console.log(doc);
		if(err){
			res.json({status: 'error', message: 'Some error'});
			return;
		}else if(Object.keys(doc).length >= 1){
			var toReturn = {
				message: 'Url save success',
				url: baseUrl + doc[0].shortenUrl
			};
			res.json({status: 'success', data: toReturn});

		}else{
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
			});
		}
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