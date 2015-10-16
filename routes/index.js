var express = require('express');
var router = express.Router();
var db = require('monk')('localhost/list')
var List = db.get('list');

/* GET home page. */
router.get('/', function(req, res, next) {
  List.find({}, function(err, data){
    res.render('index', {AllList: data});
  });
});

router.get('/new', function(req, res, next){
  res.render('new');
});

router.post('/', function(req, res, next){
  List.insert({title: req.body.title,
               item: req.body.item,
               itemB: req.body.itemB,
               itemC: req.body.itemC});
  res.redirect('/');
});

router.post('/:id/delete', function(req, res, next){
  List.remove({_id: req.params.id}, function(err, data){
    res.redirect('/')
  })
})
module.exports = router;
