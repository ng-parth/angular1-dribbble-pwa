'use strict';

var client_id = '646d469d2cc2a7559f748dba7823c243cff10ad037b937b703a846847dfaa0e7';
var access_token = '428840dc01fa75d6ee10e8bbd62bccd01175f4788c62067c2508f178e752c1bb'
var api_url = 'https://api.dribbble.com/v1{relative_url}?access_token=' + access_token;

angular.module('Dribbble', [])

.factory('ShotsResource', function ($resource) {
	return $resource(BuildUrl('/shots/:id'), { per_page: 30 }, {
		query: { method:'GET', isArray: true, cache: true }
	});
});

function BuildUrl(relative_url) {
	return api_url.replace('{relative_url}', relative_url);
}
