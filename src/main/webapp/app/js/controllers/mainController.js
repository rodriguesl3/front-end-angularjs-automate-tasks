var peopleController = function (mainFactory) {
    vm = this;
    vm.users = [];
    var getUsers = function () {
        mainFactory.getPeople().success(function (response) {
            vm.users = response;
        });
    }
    getUsers();
}
peopleController.$inject = ['mainFactory'];