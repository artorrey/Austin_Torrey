'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var LineItemSchema = new Schema({
      workdate: String,
      minutes: Number,
      timesheet: String
    });

module.exports = mongoose.model('LineItem', LineItemSchema);
