/** ----------------------------------------------------------------------------
  * This is where 'data' type lists and shit is stored
  * ----------------------------------------------------------------------------
  **/

var allCollections = [
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
  },  {
    name: 'About',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  }
];

var allText = [

]

// this is a data node
var collection = function(data) {
  this.name = ko.observable(data.name);
  this.images = ko.observableArray(data.images);
  this.text = ko.observable(data.text);
}

/** ----------------------------------------------------------------------------
  *          This is the ViewModel, where 'data' turns into the view
  * ----------------------------------------------------------------------------
  **/
var ViewModel = function() {
  var that = this;

  this.collectionList = ko.observableArray([]);

  allCollections.forEach(function(group){
    that.collectionList.push( new collection(group) );
  });

  this.activeCollection = ko.observable( this.collectionList()[0] );
  console.log(that.activeCollection());

  this.setCollection = function(clickedCollection) {
    that.activeCollection(clickedCollection);
  };
}

ko.applyBindings(new ViewModel());
