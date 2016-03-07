//Define our options model
var cascadingOption = function(data){
    var self = this;
    self.text = data.text;
    self.childOptions = data.childOptions;
}

// starting 'home' view
function buildinital(){

  var home = new cascadingOption({
      text: 'Home',
      childOptions : [
          new cascadingOption({
              text:'Inital Splash',
              childOptions : {
                  image: null,
                  writeUp: 'BETABETABETA',
                  pullOutCopy: null,
                  item1: null,
              }
          })
      ]
  });

  return [home];
}

//fill our models with example data
function buildData(){


  /** ------------------------------------------
    *    About
    * ------------------------------------------
    **/

    var about = new cascadingOption({
        text: 'About',
        childOptions : [
            new cascadingOption({
                text:'Values',
                childOptions : {
                    image: null,
                    writeUp: 'About copy Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                    pullOutCopy: null,
                    item1: null,
                }
            }),
            new cascadingOption({
                text:'Skills',
                childOptions : {
                    image: null,
                    writeUp: 'Skills Copy Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
                    pullOutCopy: null,
                    item1: null,
                }
            })
        ]
    });


  /** ------------------------------------------
    *      Photography
    * ------------------------------------------
    **/

    var photography = new cascadingOption({
        text: 'Photography',
        childOptions : [
            new cascadingOption({
                text:'Street',
                childOptions : {
                    pullOutCopy : null,
                    item1 : null,
                    image: ['img/street/AttaqueFrancais1.jpg', 'img/street/AttaqueFrancais2.jpg'],
                    writeUp: null,
                }
            }),
            new cascadingOption({
                text:'Fashion',
                childOptions : {
                    pullOutCopy : null,
                    item1 : null,
                    image: ['img/fashion/EP_15x10_1.jpg', 'img/fashion/IanSmoke.jpg'],
                    writeUp: null,
                }
            }),
            new cascadingOption({
                text:'Places',
                childOptions : {
                    pullOutCopy : null,
                    item1 : null,
                    image: ['img/spaces/SRD_acwdetail.jpg', 'img/spaces/SRDBacklit.jpg'],
                    writeUp: null,
                }
            }),
            new cascadingOption({
                text:'Faces',
                childOptions : {
                    pullOutCopy : null,
                    item1 : null,
                    image: ['img/faces/LukaIanSmoke.jpg', 'img/spaces/SRDBacklit.jpg'],
                    writeUp: null,
                }
            }),
        ]
    });

  /** ------------------------------------------
      *      Emerging Media
      * ------------------------------------------
      **/

  var emergingMedia = new cascadingOption({
      text: 'Emerging Media',
      childOptions : [
          new cascadingOption({
              text:'Wearable',
              childOptions : {
                  pullOutCopy : 'hello world',
                  item1 : '<iframe width="560" height="315" src="https://www.youtube.com/embed/_mmXZ8YJdIk" frameborder="0" allowfullscreen></iframe>',
                  image: ['img/spaces/SRD_acwdetail.jpg', 'img/spaces/SRDBacklit.jpg'],
                  writeUp: null,
              }
          }),
          new cascadingOption({
              text:'Performance',
              childOptions : {
                  pullOutCopy : 'hello world',
                  item1 : '<iframe width="100%" height="380" src="https://www.youtube.com/embed/vgL3puDfuRg" frameborder="0" allowfullscreen></iframe>',
                  image: ['img/spaces/SRD_acwdetail.jpg', 'img/spaces/SRDBacklit.jpg'],
                  writeUp: null,
              }
          }),
          new cascadingOption({
              text:'Interactive',
              childOptions : {
                  pullOutCopy : null,
                  item1 : null,
                  image: ['img/faces/LukaIanSmoke.jpg', 'img/spaces/SRDBacklit.jpg'],
                  writeUp: null,
              }
          }),
          new cascadingOption({
              text:'Visual',
              childOptions : {
                  pullOutCopy : null,
                  item1 : null,
                  image: ['img/street/AttaqueFrancais1.jpg', 'img/street/AttaqueFrancais2.jpg'],
                  writeUp: null,
              }
          }),
      ]
  });

  /** ---------------------------------------------------------------
   *      Make sure to return all the variable you're after
   * ----------------------------------------------------------------
   **/
    return [about, photography, emergingMedia];
}

var viewModel = function() {
    var self = this;
    self.categories = buildData();
    self.inital = buildinital();
    self.activeCategory = ko.observable();
    self.activeCollection = ko.observable(/*self.activeCategory().childOptions[0]*/);

    self.activeItems = ko.observable();

    self.collections = ko.computed(function(){
        return self.activeCategory() ? self.activeCategory().childOptions : null;
      });

    self.items = ko.computed(function(){
        return self.activeCollection() ? self.activeCollection().childOptions : null;
      });

    self.setCategory = function(clickedCategory) {
        return self.activeCategory(clickedCategory), self.setCollection(clickedCategory.childOptions[0]);
      };

    self.setCollection = function(clickedCollection) {
        return self.activeCollection(clickedCollection);
      };

    // initalize
    // self.setCategory(self.inital[0]);
};

ko.applyBindings(viewModel);
