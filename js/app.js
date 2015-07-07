/**
 * Think First, Code Later
 * @Date:   2015-07-07 19:09:15
 * @Last Modified by:   lizhuo04
 * @Last Modified time: 2015-07-07 19:37:18
 * @file 
 * @author Li'Zhuo(lizhuo04@baidu.com||topgrd@outlook.com)
 */
'use strict';
angular.module('movies', ['ngRoute']).
	config(['$routeProvider',function ($routeProvider) {
		$routeProvider.
			when('/movies', {
				templateUrl: 'tpl/movieList.html',
				controller: movieCtrl
			}).
			otherwise({
				redirectTo: '/movies'
			});
	}]);
