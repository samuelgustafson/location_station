var express = require('express');
var server = express();
var port =process.env.PORT || 8080;
var axios = require('axios');
var apiKey = require('./secrets').googleAPIKey;

server.get('/posts/postId', function(request, response){
  var  posts = request.params.posts;
  var  postId = request.params.postId;
  var url = `https://jsonplaceholder.typicode.com/posts/1`;
  axios.get(url)
  .then(function(results){
    response.send(results.data);
  })
  .catch(function(err){
    response.send(err);
  });
  });

  server.get('/location/:address', function(request, response){
    var  address = request.params.address;
    var url = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${apiKey}`;
    axios.get(url)
    .then(function(results){
      response.send(results.data);
    })
    .catch(function(err){
      response.send(err);
    });
    });
  //go take a look at bottom of sandbox.js

server.listen(port, function(){
  console.log('Now listening on port...', port);
});
