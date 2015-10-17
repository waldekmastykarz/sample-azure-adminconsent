(function(){
  'use strict';

  angular.module('office365app')
         .controller('adminController', ['$location', 'dataService', 'adalAuthenticationService', 'organizationSubscribed', adminController]);

  /**
   * Controller constructor
   */
  function adminController($location, dataService, adalAuthenticationService, organizationSubscribed){
    var vm = this;  // jshint ignore:line
    vm.title = 'admin controller';
    vm.signupOrganization = signupOrganization;
    vm.organizationSubscribed = organizationSubscribed;

    activate();
    
    function activate() {      
      dataService.isAdmin().then(function(isAdmin) {
        if (!isAdmin) {
          $location.href = '#/';
        }
      }, function(err) {
        console.error(err);
      });
    }
    
    function signupOrganization() {
      var adal = new AuthenticationContext();
      adal.config.displayCall = function adminFlowDisplayCall(urlNavigate) {
        urlNavigate += '&prompt=admin_consent';
        adal.promptUser(urlNavigate);
      };
      adal.login();
      adal.config.displayCall = null;
    }
    
  }

})();
