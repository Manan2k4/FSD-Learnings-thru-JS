const mongoose = require('mongoose');
// Mongoose Schema

const StudentSchema = new mongoose.Schema({
    sname: String,
    semail: String,
    smobile: Number
})

// Export Schema as model
var StudentModel = mongoose.model('Student', StudentSchema);

module.exports = StudentModel;