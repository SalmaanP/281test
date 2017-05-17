var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var clusterSchema = new Schema({
    id: {type: String},
    name: {type: String},
    nodes: {type: String},
    services: {type: String}
});

var Cluster = mongoose.model('Cluster', clusterSchema);

module.exports = Cluster;