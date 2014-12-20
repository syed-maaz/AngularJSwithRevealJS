
RapeCases.factory('services', function($http) {
    return {
        cases: function(month) {

            return  $http({method: 'GET', url: 'data/' + month + '.json', cache: true}).
                    success(function(data, status) {
//                        console.log(data)
                        return data;
                    }).
                    error(function(data, status) {
                        return data;
                    });
        }
    };
});
