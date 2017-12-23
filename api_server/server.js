let express = require('express'),
https = require("https"),
jsonfile = require('jsonfile'),
	app = express(),
	port = process.env.PORT || 3000;
    var morgan = require('morgan');             			// log requests to the console (express4)
    var bodyParser = require('body-parser');    			// pull information from HTML POST (express4)
    var methodOverride = require('method-override'); 		// simulate DELETE and PUT (express4)
 
    app.use(express.static(__dirname + '/public'));                 // set the static files location /public/img will be /img for users
    app.use(morgan('dev'));                                         // log every request to the console
    app.use(bodyParser.urlencoded({'extended':'true'}));            // parse application/x-www-form-urlencoded
    app.use(bodyParser.json());                                     // parse application/json
    app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
    app.use(methodOverride());
	
	app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, content-type, Authorization');
  next();
});
	
	
	todoList = require('./api/controllers/todoListController');
	let url = "https://gist.githubusercontent.com/thekiwi/ab70294c8d7ab790d9b6d70df9d3d145/raw/14513c7b841b37b2406dda4d3b9143a25700a68e/silicon-valley.json";

	https.get(url, res => {
		res.setEncoding("utf8");
		let body = "";
		res.on("data", data => {
			body += data;
		});
		res.on("end", () => {
			let obj=JSON.parse(body)
			jsonfile.writeFile("episodes.json", obj["_embedded"]["episodes"], function (err) {
				if(err)console.error("Something went wrong : "+err)
			})	
		});
	});

 	let routes = require('./api/routes/todoListRoutes'); //importing route
	routes(app); //register the route
	
	app.use(function(req, res) {
		res.status(404).send({url: req.originalUrl + ' not found!!'})
	});
	
	
	app.listen(port);

	console.log('Episode file created from gist.githubusercontent.com and serving from port : ' + port);
	