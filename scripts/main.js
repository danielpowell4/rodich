/** ----------------------------------------------------------------------------
  * This is where 'data' type lists and shit is stored
  * ----------------------------------------------------------------------------
  **/

var photoCollections = [
  {
    name: 'Street',
    images : ['img/street/AttaqueFrancais1.jpg', 'img/street/AttaqueFrancais2.jpg']
  }, {
    name: 'Fashion',
    images : ['img/fashion/EP_15x10_1.jpg', 'img/fashion/IanSmoke.jpg']
  }, {
    name: 'Spaces',
    images : ['img/spaces/SRD_acwdetail.jpg', 'img/spaces/SRDBacklit.jpg']
  }, {
    name: 'Faces',
    images : ['img/faces/LukaIanSmoke.jpg', 'img/spaces/SRDBacklit.jpg']
  }
];

// this is a data node
var collection = function(data) {
  this.name = ko.observable(data.name);
  this.images = ko.observableArray(data.images);
}

/** ----------------------------------------------------------------------------
  *          This is the ViewModel, where 'data' turns into the view
  * ----------------------------------------------------------------------------
  **/
var ViewModel = function() {
  var that = this;

  this.collectionList = ko.observableArray([]);

  photoCollections.forEach(function(group){
    that.collectionList.push( new collection(group) );
  });

  this.activeCollection = ko.observable( this.collectionList()[0] );

  this.setCollection = function(clickedCollection) {
    that.activeCollection(clickedCollection);
  };
}

ko.applyBindings(new ViewModel());
