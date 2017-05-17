var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var serviceSchema = new Schema({
    id: {type: String},
    name: {type: String},
    cluster: {type: String},
    node: {type: String}
});

var Service = mongoose.model('Service', serviceSchema);

module.exports = Service;