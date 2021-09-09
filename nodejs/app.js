var express = require('express')
  , http = require('http');

  var app = express();

  app.set('port', process.env.PORT || 3000);

  var router = express.Router();

  router.route('/scores').get(function(req, res){
    var scores = {
      count: 3,
      scores: [
        {name:"a", score:50.321},
        {name:"b", score:60.321},
        {name:"c", score:70.321}
      ]
    }
    res.send(scores)
  });

  app.use('/', router);

  http.createServer(app).listen(app.get('port'), function(){
    console.log('Start score server. (port: %d)', app.get('port'));
  });