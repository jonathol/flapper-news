angular.module('flapperNews')
.factory('posts', ['$http', function($http){
  var o = {
    posts: [],
    getAll: function() {
      return $http.get('/posts.json').then(function(data){
        angular.copy(data, o.posts);
      })
    },
    create: function(post) {
      return $http.post('/posts.json', post).then(function(data){
        o.posts.push(data);
      });
    }
  };

  return o;
}])
