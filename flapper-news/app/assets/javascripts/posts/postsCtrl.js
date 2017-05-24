angular.module('flapperNews')
.controller('PostsCtrl', [
  '$scope',
  'posts',
  'post',
  function($scope, posts, post){
    $scope.post = post;
    $scope.addComment = function(){
      if($scope.body === '') { return; }
      posts.addComment(post.id, {
        body: $scope.body,
        author: 'user',
      }).then(function(comment) {      
        $scope.post.comments.push(comment.data);
      });
      $scope.body = '';
    };
    $scope.incrementUpvotes = function(comment) {
      comment.upvotes += 1;
    };
}]);
