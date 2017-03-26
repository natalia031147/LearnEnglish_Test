//var myApp = angular.module('learnEnglishApp', ['ngMaterial', 'ngMessages', 'youtube-embed']);
var app = angular.module('learnEnglishApp.controllers');
app.controller('VideoDetailsController', ['$scope', '$http', '$sce', '$timeout', '$routeParams', function ($scope, $http, $sce, $timeout, $routeParams) {
    $scope.video = {};

   

    $scope.API = null;

    $scope.onPlayerReady = function ($API) {
        $scope.$API = $API;

    }
    $scope.playerVars = {
        'controls' : 0,
        'autoplay': 0
    };   
    
    $scope.getVideoDetails = function () {
        $http({
            url: "/Api/Video",
            method: "GET",
            params: { id: $routeParams.id }
        })
            .success(function (data) {
                $scope.video = data;

                $scope.config = {
                    sources: [
                        { src: $sce.trustAsResourceUrl($scope.video.url), type: "video/mp4" },
                        { src: $sce.trustAsResourceUrl($scope.video.url), type: "video/webm" },
                        { src: $sce.trustAsResourceUrl($scope.video.url), type: "video/ogg" }
                    ],
                    tracks: [
                        {
                            src: "http://www.videogular.com/assets/subs/pale-blue-dot.vtt",
                            kind: "subtitles",
                            srclang: "en",
                            label: "English",
                            default: ""
                        }
                    ],
                    //theme: "bower_components/videogular-themes-default/videogular.css",
                    plugins: {
                        poster: "http://www.videogular.com/assets/images/videogular.png"
                    }
                };
            })
            .error(function (error, status) {
                console.log(status);
                console.log("Error occured");
            });
    };
   
   
}]);