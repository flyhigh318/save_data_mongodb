var mongoose = require('mongoose');

var monitorPerHourSchema = mongoose.Schema({
    date: {type:Date},
    registerUser: {type:Number, default:0},
    repeateLoanUser: {type: Number},
    firstLoanUser: {type: Number},
    lentUser: {type: Number},
    loanAmount: {type: Number},
    repayment: {type: Number}
});

exports.monitorPerHourSchema = monitorPerHourSchema;