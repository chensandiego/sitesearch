var express = require('express');
var router = express.Router();

Article=require('../models/article.js');

Website=require('../models/website.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.post('/', function(req, res, next) {
  var searchText=req.body.searchText;
  var searchType=req.body.searchType;

  if (searchType=='website'){
    Website.searchWebsites(searchText,function(err,websites){
        if(err){
          res.send(err);
        }


        var model={
          websites:websites.results
        }
        res.render('website_results',model);
    });

  }else if(searchType=='news'){
    Article.searchArticle(searchText,function(err,articles){
        if(err){
          res.send(err);
        }


        var model={
          articles:articles.results
        }
        res.render('article_results',model);
    });


  }else{
    res.send('choose website or news');
  }
});



module.exports = router;
