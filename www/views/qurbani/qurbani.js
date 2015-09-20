/**
 * Created by 192.168.3.42 on 9/20/2015.
 */
app.controller('QurbaniController', function ($scope,$state) {

  $scope.go = function(state){
    $state.go("form",{type:state})
  }

});
