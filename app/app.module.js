(function(){
  'use strict';

  // create
  var office365app = angular.module('office365app', [
    'ngRoute',
    'ngSanitize',
    'AdalAngular'
  ]);

  // configure
  office365app.config(['$logProvider', function($logProvider){
    // set debug logging to on
    if ($logProvider.debugEnabled) {
      $logProvider.debugEnabled(true);
    }
  }]);
  
  var organizationSubscribed = window.location.hash.indexOf('admin_consent=True') > -1;
  office365app.value('organizationSubscribed', organizationSubscribed);

  jQuery(function() {
    angular.bootstrap(jQuery('#container'), ['office365app']);
  });

})();
