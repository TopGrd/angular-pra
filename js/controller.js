/**
 * Think First, Code Later
 * @Date:   2015-07-07 16:46:12
 * @Last Modified by:   lizhuo04
 * @Last Modified time: 2015-07-07 18:04:01
 * @file 
 * @author Li'Zhuo(lizhuo04@baidu.com||topgrd@outlook.com)
 */
'use strict';

var movieCtrl = ['$scope', '$http', function($scope, $http){
    $http.get('mock/movie.json').success(function (data) {
        $scope.movies = data;
    });

    $scope.orderBy = 'year';

}];
