//var myApp = angular.module('learnEnglishApp', ['youtube-embed']);

var app = angular.module('learnEnglishApp.controllers');


app.controller('AddVideoController', ['$scope', '$http', '$sce','Upload', '$timeout', '$location', function ($scope, $http, $sce, Upload, $timeout, $location) {
    $scope.errorLoading = 0;
    var dir = 'Videos/';
  
    $scope.videoData = {};

    $scope.uploadFiles = function (file, errFiles) {
        if (file !== null) {
            $scope.errFile = errFiles && errFiles[0];
            $scope.videoData.title = file.name.substring(0, file.name.length - 4);
            $scope.videoData.name = "";
            $scope.videoData.url = dir + file.name;
            $scope.videoData.language = 'en';
            $location.path('/addPhrases/' + file.name);
        }       

    };

}]);