angular.module('flapperNews')
.factory('posts', ['$http', function($http){
  var o = {
    posts: []
  };
  o.getAll = function() {
    return $http.get('/posts.json').then(function(data){
      console.log(data.data);
      angular.copy(data.data, o.posts);
    })
  };
  o.create = function(post) {
    return $http.post('/posts.json', post).then(function(data){
      o.posts.push(data);
    });
  };
  return o;
}])
