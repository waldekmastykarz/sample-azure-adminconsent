(function () {
  'use strict';

  var office365app = angular.module('office365app');

  office365app.config(['$httpProvider', 'adalAuthenticationServiceProvider', 'appId', adalConfigurator]);

  function adalConfigurator($httpProvider, adalProvider, appId) {
    var adalConfig = {
      tenant: 'common',
      clientId: appId,
      extraQueryParameter: 'nux=1',
      endpoints: {
        'https://graph.microsoft.com': 'https://graph.microsoft.com',
        'https://graph.windows.net': 'https://graph.windows.net'
      }
      // cacheLocation: 'localStorage', // enable this for IE, as sessionStorage does not work for localhost. 
    };
    adalProvider.init(adalConfig, $httpProvider);
  }
})();