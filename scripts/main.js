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
    *      Photography
    * ------------------------------------------
    **/

    var photography = new cascadingOption({
        text: 'PHOTO',
        childOptions : [
            new cascadingOption({
                text:'STREET',
                childOptions : {
                    pullOutCopy : null,
                    item1 : null,
                    image: ['img/photo/street/1_IanSmoke.jpg', 'img/photo/street/2_LukaIanSmoke.jpg', 'img/photo/street/3_SRDBacklit.jpg', 'img/photo/street/4_SRD_acwdetail.jpg', 'img/photo/street/5_Parisunderground1.jpg', 'img/photo/street/6_Parisunderground2.jpg', 'img/photo/street/7_DiorStreetPhone.jpg'],
                    writeUp: null,
                }
            }),
            new cascadingOption({
                text:'LOOK',
                childOptions : {
                    pullOutCopy : null,
                    item1 : null,
                    image: ['img/photo/look/1_EP_first.jpg', 'img/photo/look/2_EP_15x10_1.jpg', 'img/photo/look/3_AttaqueFrancais1.jpg',  'img/photo/look/4_AttaqueFrancais2.jpg',],
                    writeUp: null,
                }
            }),
            new cascadingOption({
                text:'FACES',
                childOptions : {
                    pullOutCopy : null,
                    item1 : null,
                    image: ['img/photo/faces/1_Antoine_Berlin.jpg', 'img/photo/faces/2_Surkin_Headshot.jpg'],
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
      text: 'EMERGING MEDIA',
      childOptions : [
          new cascadingOption({
              text:'APOSEMATISM',
              childOptions : {
                  pullOutCopy : 'hello world',
                  item1 : '<iframe width="560" height="315" src="https://www.youtube.com/embed/_mmXZ8YJdIk" frameborder="0" allowfullscreen></iframe>',
                  image: ['img/emerging_media/APOSEMATISM/1_aposematismcollage2.jpg', 'img/emerging_media/APOSEMATISM/2_aposematismcollage1.jpg'],
                  writeUp: null,
              }
          }),
          new cascadingOption({
              text:'BLUESCREEN',
              childOptions : {
                  pullOutCopy : 'hello world',
                  item1 : '<iframe width="100%" height="380" src="https://www.youtube.com/embed/vgL3puDfuRg" frameborder="0" allowfullscreen></iframe>',
                  image: ['img/emerging_media/BLUESCREEN/1_bluescreenschutte1.jpg', 'img/emerging_media/BLUESCREEN/2_bluescreenschuttestill.jpg'],
                  writeUp: null,
              }
          }),
          new cascadingOption({
              text:'RECLAMATION',
              childOptions : {
                  pullOutCopy : null,
                  item1 : null,
                  image: ['img/emerging_media/RECLAMATION/1_DGBR1.jpg', 'img/emerging_media/RECLAMATION/2_DGBR2.jpg', 'img/emerging_media/RECLAMATION/3_DGBR3.jpg'],
                  writeUp: null,
              }
          }),
          new cascadingOption({
              text:'STAY ON TOP',
              childOptions : {
                  pullOutCopy : null,
                  item1 : null,
                  image: ['img/emerging_media/STAY_ON_TOP/1_Nick_jungleinst.jpg', 'img/emerging_media/STAY_ON_TOP/2_SOTstill1.jpg', 'img/emerging_media/STAY_ON_TOP/3_SOTstill2.jpg'],
                  writeUp: null,
              }
          }),
          new cascadingOption({
              text:'STOPMOTION',
              childOptions : {
                  pullOutCopy : null,
                  item1 : null,
                  image: ['img/emerging_media/STOPMOTION/1_stopmotion.jpg', 'img/emerging_media/STOPMOTION/2_stopmotion.jpg', 'img/emerging_media/STOPMOTION/3_stopmotion.jpg', 'img/emerging_media/STOPMOTION/4_stopmotion.jpg', 'img/emerging_media/STOPMOTION/5_stopmotion.jpg', 'img/emerging_media/STOPMOTION/6_stopmotion.jpg', 'img/emerging_media/STOPMOTION/7_stopmotion.jpg'],
                  writeUp: null,
              }
          }),
      ]
  });

  /** ------------------------------------------
    *    About
    * ------------------------------------------
    **/

    var about = new cascadingOption({
        text: 'ABOUT',
        childOptions : [
            new cascadingOption({
                text:'SHOWS',
                childOptions : {
                    image: null,
                    writeUp:  "<div class='about-breakout'><p class='line-1-name'>Blake Rodich</p><p class='line-2-name'>Multidisciplinary Artist,</p><p class='line-3-name'>Designer and Photographer.</p><p class='line-4-name'>Based in Paris.</p></div>" +
                              "<div class='about-breakout'><p class='line-1'>UNDERGROUND MUSIC SHOWCASE</p><p class='line-2'>July 2015</p><p class='line-3'>Performance, with Diamondstein.</p><p class='line-4'>Denver, Colorado</p></div>"+
                              "<div class='about-breakout'><p class='line-1'>BROKENSTATION</p><p class='line-2'>July 2015</p><p class='line-3'>Performance, with Diamondstein.</p><p class='line-4'>Los Angeles, California</p></div>"+
                              "<div class='about-breakout'><p class='line-1'>IMAGE.TEXT.MUSIC</p><p class='line-2'>January 2015</p><p class='line-3'>Juried Exhibition.</p><p class='line-4'>California State University Fullerton.</p></div>"+
                              "<div class='about-breakout'><p class='line-1'>UNIVERSITY OF DENVER FACULTY TRIENNIAL</p><p class='line-2'>January 2015</p><p class='line-3'>Performance, with Darwin Grosse. </p><p class='line-4'>Denver, Colorado</p></div>"+
                              "<div class='about-breakout'><p class='line-1'>BRANDS REMAIN</p><p class='line-2'>September 2014</p><p class='line-3'>Commission for Third Principle.</p><p class='line-4'>Denver, Colorado</p></div>"+
                              "<div class='about-breakout'><p class='line-1'>SIX TO MIDNIGHT</p><p class='line-2'>July 2014</p><p class='line-3'>Performance, with Dan Grund.</p><p class='line-4'>Denver, Colorado.</p></div>"+
                              "<div class='about-breakout'><p class='line-1'>STAY ON TOP</p><p class='line-2'>April 2014</p><p class='line-3'>Solo Exhibition.</p><p class='line-4'></p>Denver, Colorado.</div>",
                    pullOutCopy: null,
                    item1: null,
                }
            }),
        ]
    });


  /** ---------------------------------------------------------------
   *      Make sure to return all the variable you're after
   * ----------------------------------------------------------------
   **/
    return [photography, emergingMedia, about];
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
