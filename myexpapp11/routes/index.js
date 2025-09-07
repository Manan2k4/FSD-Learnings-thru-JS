var express = require('express');
var router = express.Router();

var ProductModel = require('../models/Product');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/add-product', function(req, res, next) {
  res.render('add-product');
});

router.post('/add-product-process', function(req, res, next) {
  var mydata = {
    ptype:req.body.txt1,
    pdetails:req.body.txt2,
    psize:req.body.txt3
  }

  // Assign data to model
  var ProductData = ProductModel(mydata)
  ProductData.save()
  .then(() => {
    res.send("Data Added")
  })
  .catch((err) => console.log("Error in Add Record: " + err))
});

router.get('/display-product', function(req, res, next) {
  ProductModel.find()
  .then((mydata) => {
    console.log(mydata)
    res.render('display-product', {mydata:mydata})
  })
  .catch((err) => console.log(err))
});

router.get('/display-product-api', function(req, res, next) {
  ProductModel.find()
  .then((mydata) => {
    console.log(mydata)
    // res.render('display-product', {mydata:mydata})
    res.json(mydata)
  })
  .catch((err) => console.log(err))
});

router.get('/delete-product/:id', function(req, res, next) {
  var myid = req.params.id
  ProductModel.findByIdAndDelete(myid)
  .then(() => {
    res.redirect('/display-product')
  })
  .catch((err) => console.log(err))
});

router.get('/edit-product/:id', function(req, res, next) {
  var myid = req.params.id
  ProductModel.findById(myid)
  .then((mydata) => {
    res.render('edit-product', {mydata:mydata})
  })
  .catch((err) => console.log(err))
});

router.post('/update-product-process/:id', function(req, res, next) {
  var myid = req.params.id
  var mydata = {
    ptype:req.body.txt1,
    pdetails:req.body.txt2,
    psize:req.body.txt3
  }
  ProductModel.findByIdAndUpdate(myid, mydata)
  .then((mydata) => {
    res.redirect('/display-product')
  })
  .catch((err) => console.log(err))
});

module.exports = router;
