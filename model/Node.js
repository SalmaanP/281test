var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var nodeSchema = new Schema({
    id: {type: String},
    name: {type: String},
    cluster: {type: String},
    services: {type: String}
});

var Node = mongoose.model('Node', nodeSchema);

module.exports = Node;