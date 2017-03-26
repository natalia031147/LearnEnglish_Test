//var myApp = angular.module('learnEnglishApp', ['youtube-embed']);

var app = angular.module('learnEnglishApp.controllers');


app.controller('AddVideoPhrasesController', ['$scope', '$http', '$sce','Upload', '$timeout',"$routeParams", function ($scope, $http, $sce, Upload, $timeout, $routeParams) {
    var dir = "Videos/";
    $scope.errorLoading = 0;
    $scope.startTime = 0;
    $scope.endTime = 0;
    $scope.parts = [];
    $scope.newPartArr = {};
    $scope.config = {};
    $scope.phraseTranslated = "";
    var dir = 'Videos/';
    //var API_CREDENTIAL = "AIzaSyCZlKOKZ0-U0FCmuMZoVLXPJzB4bcK8zq4";

    $scope.videoData = {};

    $scope.uploadFiles = function() {
        
        $scope.videoData.title = $routeParams.title;
        $scope.videoData.name = "";
        $scope.videoData.url = dir + $routeParams.title;
        $scope.videoData.language = 'en';
        

        $scope.config = {
            sources: [
                { src: $sce.trustAsResourceUrl(dir + $routeParams.title), type: "video/mp4" },
                { src: $sce.trustAsResourceUrl(dir + $routeParams.title), type: "video/webm" },
                { src: $sce.trustAsResourceUrl(dir + $routeParams.title), type: "video/ogg" }
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
            theme: "node_modules/videogular-themes-default/videogular.css",
            plugins: {
                poster: "http://www.videogular.com/assets/images/videogular.png"
            }
        };
    };
    $scope.API = null;

    $scope.onPlayerReady = function($API) {
        $scope.$API = $API;
        
    }
   

    $scope.playVideo = function () {
        $scope.$API.play();
        $scope.editErrors = "";
    };

    $scope.pauseVideo = function () {
        $scope.$API.pause();
        $scope.endTime = ($scope.$API.currentTime / 1000).toFixed(1);
    };

    $scope.rePlayVideo = function () {
        $scope.$API.seekTime($scope.startTime);
        $scope.endTime = $scope.startTime;
        $scope.$API.play();
        $scope.editErrors = "";
    };

    var orderNumber = 0;
    $scope.addPart = function (saveScope = false) {
        $scope.pauseVideo();

        if ($scope.endTime - $scope.startTime <= 0 && !saveScope) {
            $scope.editErrors = 'EndTime - StartTime must be greater than zero';
            return false;
        }
        orderNumber++
        $scope.newPartArr = {
            startTime: $scope.startTime,
            endTime: $scope.endTime,
            phrase: $scope.phrase,
            phraseTranslated: $scope.phraseTranslated,
            orderNumber:  orderNumber
        };
        $scope.parts.push($scope.newPartArr);
        //$scope.saveVideo
        $scope.phrase = "";
        $scope.phraseTranslated = "";
        $scope.startTime = $scope.endTime;
    };


    $scope.save = function () {
        $scope.editErrors = "";
        if($scope.endTime - $scope.startTime > 0 ){
            $scope.addPart(false);
        }
        $scope.videoData.level = $scope.level;

        var seconds = ($scope.$API.totalTime / 1000).toFixed(0);
        var s = seconds % 60;
        s = s < 10 ? "0" + s : s;
        var m = Math.floor(seconds / 60) % 60;
        m = m < 10 ? "0" + m : m;
        var h = Math.floor(seconds / 60 / 60);
        h = h < 10 ? "0" + h : h;
        $scope.videoData.totalTime = h + ":" + m + ":" + s;
        var postData = {video:  $scope.videoData, videoPhrases: $scope.parts}
        $http({
            url: "/Api/Video",
            method: "POST",
            data:  JSON.stringify(postData),
            headers: { 'Content-Type': 'application/json' }
        })
                    .success(function (data) {
                        alert(data);
                    })
                    .error(function (error, status) {
                        console.log(status);
                        console.log("Error occured");
                    });
    };

        $scope.getGoogleTranslatePhrase = function (phrase) {
            if ($scope.phraseTranslated !== "" && $scope.phraseTranslated !== undefined) {
                return;
            }
            if (phrase === "")
            {
                $scope.phraseTranslated =  "";
            }
            $http({
                url: "/Api/GoogleTranslate",
                method: "GET",
                params: { phrase: phrase }
            })
                    .success(function (data) {
                        $scope.phraseTranslated = data;
                    })
                    .error(function (error, status) {
                        console.log(status);
                        console.log("Error occured");
                    });
        };

        $scope.stateChange = function(state){
            if(state == 'pause'){
                $scope.endTime = ($scope.$API.currentTime / 1000).toFixed(1);
            }
        };
       
       

    }]);