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
                    intro: null,
                    pullOutCopy : null,
                    item1 : null,
                    image: ['img/photo/street/1_IanSmoke.jpg', 'img/photo/street/2_LukaIanSmoke.jpg', 'img/photo/street/3_SRDBacklit.jpg', 'img/photo/street/4_SRD_acwdetail.jpg', 'img/photo/street/5_Parisunderground1.jpg', 'img/photo/street/6_Parisunderground2.jpg', 'img/photo/street/7_DiorStreetPhone.jpg'],
                    writeUp: null,
                }
            }),
            new cascadingOption({
                text:'LOOK',
                childOptions : {
                    intro: null,
                    pullOutCopy : null,
                    item1 : null,
                    image: ['img/photo/look/1_EP_15x10_2.jpg', 'img/photo/look/2_EP_15x10_1.jpg', 'img/photo/look/3_AttaqueFrancais1.jpg',  'img/photo/look/4_AttaqueFrancais2.jpg',],
                    writeUp: null,
                }
            }),
            new cascadingOption({
                text:'FACES',
                childOptions : {
                    intro: null,
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
                  intro: {
                    section: [{
                        imageSideCopy: "<span>Antipredator colorations have long been used in the animal kingdom to deter threats. Both predator and prey benefit from this adaptation, both avoiding their own potential demise.</span> <span>Concept is explored through a series of garments with wearable computing components.</span><span>Sleeve.<br/> Bend sensor controls series of LEDs in Neoprene sleeve. 4 unique bend thresholds correspond to respective series of LEDs, which illuminate when the wearer bends his or her arm.</span><span> Sweatshirt.<br/> Wearable computing components are used to control series of superbright Red LEDs. A pulse sensor monitors wearer's heart rate. Above a specified threshold, LEDs on back of garment illuminate. When hood is worn, magnet sensor illuminates a series of LEDs silhouetting wearer’s face.</span>",
                        item: null,
                      }],
                  },
                  image: ['img/emerging_media/APOSEMATISM/1_AposematismCOLLAGE2.jpg', 'img/emerging_media/APOSEMATISM/2_Aposematismcollage1.jpg'],
                  writeUp: null,
              }
          }),
          new cascadingOption({
              text:'BLUESCREEN',
              childOptions : {
                intro: {
                  section: [{
                      imageSideCopy: '<span>Self Displacement.</span><span>Displacement of self through technology. Viewer’s reflection is multiplied and distorted with limited control offered to the viewer.</span><span>Viewer operates Arduino based one-of Midi controller which manipulates audio and visual parameters in the system.</span><span>No instructions provided.</span>',
                      item: '<iframe src="https://www.youtube.com/embed/vgL3puDfuRg" frameborder="0" allowfullscreen></iframe>',
                    }],
                },
                image: ['img/emerging_media/BLUESCREEN/1_BluescreenSchutte1.jpg', 'img/emerging_media/BLUESCREEN/2_BluescreenSchutteStill.jpg'],
                writeUp: null,
              }
          }),
          new cascadingOption({
              text:'RECLAMATION',
              childOptions : {
                  intro: {
                    section: [
                      {
                        imageSideCopy: '<span>Visual Performance alongside University Professor Darwin Grosse.</span><span>Series of visual sets draw conceptual and visual elements from land reclamation of both natural and man-made habitats.</span>',
                        item: '<iframe src="https://vimeo.com/118715159" frameborder="0" allowfullscreen></iframe>',
                      }],
                  },
                  image: ['img/emerging_media/RECLAMATION/1_DGBR1.jpg', 'img/emerging_media/RECLAMATION/2_DGBR2.jpg', 'img/emerging_media/RECLAMATION/3_DGBR3.jpg'],
                  writeUp: null,
              }
          }),
          new cascadingOption({
              text:'STAY ON TOP',
              childOptions : {
                  intro: {
                    section: [
                      {
                        imageSideCopy: '<span>An investigation into the perils and unforeseen consequences of unrelenting competition, limitless potential and Emile Durkheim’s Anomie through William Golding’s famous novel The Lord of the Flies.</span><span>Installation.</span>',
                        item: '<iframe src="https://vimeo.com/92481482" frameborder="0" allowfullscreen></iframe>',
                      },
                      {
                        imageSideCopy: "<span>10 minute live visual performance as the centerpiece of the works. Modern music samples mirror the increasingly aggressive behavior exhibited by the young boys. Artists evoke questions of power, competition amongst rivals, and the loss of innocence. Ultimately, tensions climax as the boys unknowingly murder one of their own.</span><span>Stay On Top.</span>",
                        item: '<iframe src="https://vimeo.com/92340669" frameborder="0" allowfullscreen></iframe>',
                      }],
                  },
                  pullOutCopy : null,
                  item1 : null,
                  image: ['img/emerging_media/STAY_ON_TOP/1_Nick_jungleinst.jpg', 'img/emerging_media/STAY_ON_TOP/2_SOTstill1.jpg', 'img/emerging_media/STAY_ON_TOP/3_SOTstill2.jpg'],
                  writeUp: null,
              }
          }),
          new cascadingOption({
              text:'STOPMOTION',
              childOptions : {
                  intro: {
                    section: [{
                        imageSideCopy: '<span>Self Displacement.</span><span>Displacement of self through technology. Viewer’s reflection is multiplied and distorted with limited control offered to the viewer.</span><span>Viewer operates Arduino based one-of Midi controller which manipulates audio and visual parameters in the system.</span><span>No instructions provided.</span>',
                        item: '<iframe src="https://www.youtube.com/embed/vgL3puDfuRg" frameborder="0" allowfullscreen></iframe>',
                      }],
                  },
                  pullOutCopy : '<span>Platform created to explore deviations from standard linear film recording. </span><span>Arduino takes input from bend sensor within wearer’s glove and fires LED strobe when bend threshold is passed. Frame is grabbed from camera and inserted into generated loop of video, lengthening as the user contributes more frames. </span>',
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
                    intro: null,
                    image: null,
                    writeUp:  "<div class='about-breakout'><p class='line-1-name'>Blake Rodich</p><p class='line-2-name'>Multidisciplinary Artist,</p><p class='line-3-name'>Designer and Photographer.</p><p class='line-4-name'>Based in Paris.</p></div>" +
                              "<div class='about-breakout'><p class='line-1'>UNDERGROUND MUSIC SHOWCASE</p><p class='line-2'>July 2015</p><p class='line-3'>Performance, with Diamondstein.</p><p class='line-4'>Denver, Colorado</p></div>"+
                              "<div class='about-breakout'><p class='line-1'>BROKENSTATION</p><p class='line-2'>July 2015</p><p class='line-3'>Performance, with Diamondstein.</p><p class='line-4'>Los Angeles, California</p></div>"+
                              "<div class='about-breakout'><p class='line-1'>IMAGE.TEXT.MUSIC</p><p class='line-2'>January 2015</p><p class='line-3'>Juried Exhibition.</p><p class='line-4'>California State University Fullerton.</p></div>"+
                              "<div class='about-breakout'><p class='line-1'>UNIVERSITY OF DENVER FACULTY TRIENNIAL</p><p class='line-2'>January 2015</p><p class='line-3'>Performance, with Darwin Grosse. </p><p class='line-4'>Denver, Colorado</p></div>"+
                              "<div class='about-breakout'><p class='line-1'>BRANDS REMAIN</p><p class='line-2'>September 2014</p><p class='line-3'>Commission for Third Principle.</p><p class='line-4'>Denver, Colorado</p></div>"+
                              "<div class='about-breakout'><p class='line-1'>SIX TO MIDNIGHT</p><p class='line-2'>July 2014</p><p class='line-3'>Performance, with Dan Grund.</p><p class='line-4'>Denver, Colorado.</p></div>"+
                              "<div class='about-breakout'><p class='line-1'>STAY ON TOP</p><p class='line-2'>April 2014</p><p class='line-3'>Solo Exhibition.</p><p class='line-4'>Denver, Colorado.</p></div>",
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
