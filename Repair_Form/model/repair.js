//model/comments.js
'use strict';
//import dependency
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
//create new instance of the mongoose.schema. the schema takes an
//object that shows the shape of your database entries.
var RepairsSchema = new Schema({
    ra_number: String,
    date_rcvd: String,
    customer: String,
    contact_name: String,
    phone: String,
    email: String,
    item: String,
    serial_number: String,
    accessories: String,
    international: Boolean,
    status: String,
    previous_ra_inv: String,
    packaging: String,
    condition: String,
    problem: String
});
//export our module to use in server.js
module.exports = mongoose.model('Repair', RepairsSchema);