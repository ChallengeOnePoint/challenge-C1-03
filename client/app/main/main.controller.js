'use strict';

(function() {

class MainController {

  constructor($http) {
    this.$http = $http;

    this.awesomeThings = [];
    this.addressList = [];
    
    $http.get('/api/things').then(response => {
      console.log(response.data);
      this.addressList = response.data;
    });
  }

  addThing() {
    if (this.newThing) {
      this.$http.post('/api/things', { name: this.newThing });
      this.newThing = '';
    }
  }

  deleteThing(thing) {
    this.$http.delete('/api/things/' + thing._id);
  }
}

angular.module('challengeC103App')
  .controller('MainController', MainController);

})();
