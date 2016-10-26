var express = require('express');
var Segment = require('segment');

var router = express.Router();
/* GET home page. */
router.get('/', function(req, res, next) {


  res.render('index', {});

});


router.post('/ajax/split', function(req, res, next) {
  console.log('分词');
  var segment = new Segment();
  segment.useDefault();

  var result = segment.doSegment(req.body.textStr, {
    simple: true,
  });
  res.send({textArr:result})
});



module.exports = router;
