(function () {
  'use strict';

  angular
    .module('googlemap', [])
    .controller('GooglemapController', loadFunction);

  loadFunction.$inject = ['$scope', 'structureService', '$location'];

  function loadFunction($scope, structureService, $location) {
    //Register upper level modules
    structureService.registerModule($location, $scope, 'googlemap');

    var obj = structureService.getColors();
    $scope.svgColor = obj.primaryBackgroundColor;

    var moduleConfig = $scope.googlemap.modulescope;
    $scope.moduleConfig = moduleConfig;
    $scope.moduleConfig.zoom = parseInt(moduleConfig.zoom);
    $scope.googleMapsUrl = 'https://maps.googleapis.com/maps/api/js?key=' + moduleConfig.api;
    $scope.customMarkers = [
      { address: $scope.moduleConfig.lat + ',' + $scope.moduleConfig.lon }
    ];


  }

}());
