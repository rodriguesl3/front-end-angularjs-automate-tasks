var mainFactory = function ($http) {

    var _getPeople = function () {
        var url = config.baseNode + "/rest/people";
        //var url = config.baseJava + "/rest/people";
        return $http.get(url);
    }

    return {
        getPeople: _getPeople,
    };
}

mainFactory.$inject = ['$http'];