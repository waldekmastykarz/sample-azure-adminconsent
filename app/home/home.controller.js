(function(){
  'use strict';

  angular.module('office365app')
         .controller('homeController', ['dataService', 'organizationSubscribed', homeController]);

  /**
   * Controller constructor
   */
  function homeController(dataService, organizationSubscribed){
    var vm = this;  // jshint ignore:line
    vm.title = 'home controller';
    vm.isAdmin = false;
    vm.organizationSubscribed = organizationSubscribed;

    activate();
    
    function activate() {
      dataService.isAdmin().then(function(isAdmin) {
        vm.isAdmin = isAdmin;
      }, function(err) {
        console.error(err);
      });
    }
  }

})();
