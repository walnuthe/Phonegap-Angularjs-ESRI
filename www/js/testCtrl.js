app.controller('testCtrl', function($scope, $http) {
	
	$scope.test = "prova";
	$http.get('http://www.numind.it/NIS/Reservation/api/?a=locations')
	.success(function(data){
		$scope.data = data;
	});

	$scope.h = window.innerHeight;
	$scope.mapStyle = {
			height: $scope.h + 'px',
            width: '100%',
            margin: '0px'
	};

	require([
	      "esri/map", 
	      "esri/dijit/HomeButton",
	      "dojo/domReady!"
	    ], function(
	      Map, HomeButton
	    )  {

	      var map = new Map("map", {
	        center: [-56.049, 38.485],
	        zoom: 3,
	        basemap: "streets"
	      });
	            
	      var home = new HomeButton({
	        map: map
	      }, "HomeButton");
	      home.startup();

    });

  /*var device = $cordovaDevice.getDevice();
  var cordova = $cordovaDevice.getCordova();
  var model = $cordovaDevice.getModel();
  var platform = $cordovaDevice.getPlatform();
  var uuid = $cordovaDevice.getUUID();
  var version = $cordovaDevice.getVersion();
*/
});

