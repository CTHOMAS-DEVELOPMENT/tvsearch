'use strict';
let jsonfile = require('jsonfile');
exports.list_all_tasks = function(req, res) {
	/*The file 'episodes.json', created by accessing real data across site
	on server startup and accessed by the get route*/
	let file = './episodes.json'
	
	jsonfile.readFile(file, function(err, obj) {
    if (err){ res.send(err); }
    res.json(obj);
  });

};
exports.create_a_task = function(req, res) {
	//Save
};
exports.read_a_task = function(req, res) {
	//return the data by id. For calls to the api.
	//res.json(req.params.taskId);
};
exports.update_a_task = function(req, res) {
	//Update
};
exports.delete_a_task = function(req, res) {
	//Delete
};