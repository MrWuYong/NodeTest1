var express = require('express');
var router = express.Router();

//注册子页面路由
var dbopr = require("../src/dbopr/dbopr");
var htmlDemo = require('../src/htmlDemo/htmlDemo');

router.use('/dbopt',dbopr);
router.use('/htmlDemo',htmlDemo);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'bs Demo',
    desc:'demo入口。使用pug渲染',
    pages:[
        {link:'htmlDemo',text:'html+vue',title:'在网页直接使用vue的demo'},
        {link:'dbopr',text:'数据库操作',title:'xxxdemo'}
    ]
  });
});
module.exports = router;
