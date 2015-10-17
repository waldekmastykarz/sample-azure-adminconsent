(function(){
  'use strict';

  angular.module('office365app')
         .service('dataService', ['$http', '$q', dataService]);

  /**
   * Custom Angular service.
   */
  function dataService($http, $q){

    // public signature of the service
    return {
      getData: getData,
      isAdmin: isAdmin
    };

    /** *********************************************************** */

    function getData(){
      var deferred = $q.defer();

      deferred.resolve([
        {
          propertyOne: 'valueOne',
          propertyTwo: 'valueTwo',
        }
      ]);

      return deferred.promise;
    }
    
    function isAdmin() {
      var deferred = $q.defer();
      
      $http({
        url: 'https://graph.windows.net/me/memberOf?api-version=1.6',
        method: 'GET',
        headers: {
          'Accept': 'application/json;odata=nometadata'
        }
      }).success(function(data) {
        var isAdmin = false;
        
        for (var i = 0; i < data.value.length; i++) {
          var obj = data.value[i];
          
          if (obj.objectType === 'Role' &&
            obj.isSystem === true &&
            obj.displayName === 'Company Administrator') {
            isAdmin = true;
            break;
          }
        }
        
        deferred.resolve(isAdmin);
      }).error(function(err) {
        deferred.reject(err);
      });
      
      return deferred.promise;
    }

  }

})();
