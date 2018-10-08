'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TimesheetSchema = new Schema({
    description: String,
    rate: Number,
    totalCost: Number,
  });

module.exports = mongoose.model('Timesheet', TimesheetSchema);
