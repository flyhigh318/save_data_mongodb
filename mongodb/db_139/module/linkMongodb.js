/* it can make a constructor for mongoose to 
 * connect model, also reature db.
 *
 */ 
function LinkMongodb(obj) {
	this.host = obj.host;
	this.port = obj.port;
//	this.user = obj.user;
//	this.password = obj.password;
	this.database = obj.database;
}

LinkMongodb.prototype.connect = function () {

	var mongoose = require('mongoose');
	var mongodbUrl = "mongodb://" + this.host + ":" + this.port + "/" + this.database;
   	mongoose.connect(mongodbUrl);
	var db = mongoose.connection;
	db.on('error', console.error.bind(console, 'connection error:'));
	return db;
}

module.exports = LinkMongodb;
