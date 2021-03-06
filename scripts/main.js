//Define our options model
var cascadingOption = function(data){
    var self = this;
    self.text = data.text;
    self.childOptions = data.childOptions;
};

// starting 'home' view
function buildinital(){

// this is currently not wired up
  var home = new cascadingOption({
      text: 'Home',
      childOptions : [
          new cascadingOption({
              text:'Inital Splash',
              childOptions : {
                  image: null,
                  writeUp: 'BETABETABETA',
                  pullOutCopy: null,
                  item1: null
              }
          })
      ]
  });

  return [home];
}

//fill our models with example data


  /** ------------------------------------------
    *      Collection
    * ------------------------------------------
    **/

    var collection = new cascadingOption({
        text: 'COLLECTION',
        childOptions : [
            new cascadingOption({
                text:'TO SEEK ANOTHER TITLE',
                childOptions : {
                    intro: {
                      section: [{
                          imageSideCopy: '<span>To Seek Another Title</span><span>Ready to wear collection hand made in Paris.</span><span>"To Seek Another Title" explores relative self conceptualization among dissociated class and social orders. Cues emerging from semiotic infrastructures are taken apart and reassembled. Graphics are absent from their expected placements and a minimal color palette proposes a degree of assimilation. Mid-weight twill, Poplin, Wool and Tarlatan reference the proletariat, bourgeois, aristocratic and creative classes, whose aesthetic codes are displaced through layered, stacked and loose fitting forms.</span><span>Hierarchy is re-examined, re-ordered.</span><br/><span>Creative Direction & Photography: Blake Rodich<br/>Additional Photography: Antoine De Almeida & Jose Lossio<br/>Model: Christophe Van Waetermuelen</span>',
                          item: null,
                        }],
                    },
                    image: ['img/collection/tsat/TSAT_1+2.jpg', 'img/collection/tsat/TSAT_3.jpg', 'img/collection/tsat/TSAT_4+5.jpg', 'img/collection/tsat/TSAT_6.jpg', 'img/collection/tsat/TSAT_7+8.jpg', 'img/collection/tsat/TSAT_9.jpg', 'img/collection/tsat/TSAT_11+12.jpg','img/collection/tsat/TSAT_13.jpg', 'img/collection/tsat/TSAT_14+15.jpg', 'img/collection/tsat/TSAT_16.jpg', 'img/collection/tsat/TSAT_17+18.jpg', 'img/collection/tsat/TSAT_19.jpg', 'img/collection/tsat/TSAT_20+21.jpg', 'img/collection/tsat/TSAT_22.jpg', 'img/collection/tsat/TSAT_23+24.jpg', 'img/collection/tsat/TSAT_25.jpg'],
                    writeUp: null,
                }
            }),
            new cascadingOption({
                text:'IN ORDER OF APPEARANCE',
                childOptions : {
                    intro: {
                      section: [{
                          imageSideCopy: '<span>In Order of Appearance</span><span>Ready to Wear collection hand made in Paris.</span><span>“In Order Of Appearance” explores themes of contextual identity, social belonging and locus of control. Hand drawn graphics make reference to contemporary french cinema. Romain Gavras’ <em>Notre Jour Viendra</em> enquires outsiders if they are rejects or saviors, Sylvain Chomet takes us on a journey away from home in his beloved <em>Triplets of Belleville</em> and, finally, Gaspar Noé implores us to consider how much we really control in <em>Carne.</em> Marbled red herringbone drapes over the body on a multi-layered coat, while poly-nylon pants featuring technical detailing meet heavy cotton pieces with poplin patches, oversized fits and re-cut forms.<br/><br/><span>Creative Direction & Photography: Blake Rodich<br/>Model: Christophe Van Waetermuelen</span>',
                          item: null,
                        }],
                    },
                    image: ['img/collection/iooa/IOOA_01.jpg', 'img/collection/iooa/IOOA_02.jpg', 'img/collection/iooa/IOOA_03.jpg', 'img/collection/iooa/IOOA_04.jpg', 'img/collection/iooa/IOOA_05.jpg', 'img/collection/iooa/IOOA_06.jpg', 'img/collection/iooa/IOOA_07.jpg', 'img/collection/iooa/IOOA_08.jpg', 'img/collection/iooa/IOOA_09.jpg', 'img/collection/iooa/IOOA_10.jpg', 'img/collection/iooa/IOOA_11.jpg'],
                    writeUp: null,
                }
            })
        ]
    });


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
                    image: ['img/photo/street/1_IanSmoke.jpg', 'img/photo/street/2_LukaIanSmoke.jpg', 'img/photo/street/3_SRDBacklit.jpg', 'img/photo/street/4_SRD_acwdetail.jpg', 'img/photo/street/5_Parisunderground1.jpg', 'img/photo/street/6_Parisunderground2.jpg', 'img/photo/street/7_DiorStreetPhone.jpg'],
                    writeUp: null,
                }
            }),
            new cascadingOption({
                text:'LOOK',
                childOptions : {
                    intro: null,
                    image: ['img/photo/look/1_EP_15x10_2.jpg', 'img/photo/look/2_EP_15x10_1.jpg', 'img/photo/look/3_AttaqueFrancais1.jpg',  'img/photo/look/4_AttaqueFrancais2.jpg',],
                    writeUp: null,
                }
            }),
            new cascadingOption({
                text:'FACES',
                childOptions : {
                    intro: null,
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
              text:'RECLAMATION',
              childOptions : {
                  intro: {
                    section: [
                      {
                        imageSideCopy: '<span>Visual Performance alongside University Professor Darwin Grosse.</span><span>Series of visual sets draw conceptual and visual elements from land reclamation of both natural and man-made habitats.</span>',
                        item: '<iframe src="https://player.vimeo.com/video/118715159" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>',
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
                        imageSideCopy: '<span>STAY ON TOP</span><span>An investigation into the perils and unforeseen consequences of unrelenting competition, limitless potential and Emile Durkheim’s Anomie through William Golding’s famous novel The Lord of the Flies.</span>',
                        item: null,
                        },
                      {
                        imageSideCopy: '<span>Installation.</span><span>An immersive jungle environment 	is directly controlled by viewer’s behavior. Camera detects viewer presence and body movement. Presence, motion, and lack there of each trigger a unique response from the jungle environment. Continued movement triggers a violent storm, while stillness brings tranquility. Without any viewer present, the rainforest returns to standard conditions. Remain still.</span>',
                        item: '<iframe src="https://player.vimeo.com/video/92481482" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>',
                      },
                      {
                        imageSideCopy: "<span>Performance.</span><span>10 minute live visual performance as the centerpiece of the works. Modern music samples mirror the increasingly aggressive behavior exhibited by the young boys. Artists evoke questions of power, competition amongst rivals, and the loss of innocence. Ultimately, tensions climax as the boys unknowingly murder one of their own.</span><span>Stay On Top.</span>",
                        item: '<iframe src="https://player.vimeo.com/video/92340669" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>',
                      }],
                  },
                  image: ['img/emerging_media/STAY_ON_TOP/1_Nick_jungleinst.jpg', 'img/emerging_media/STAY_ON_TOP/2_SOTstill1.jpg', 'img/emerging_media/STAY_ON_TOP/3_SOTstill2.jpg'],
                  writeUp: null,
              }
          }),
          new cascadingOption({
              text:'DISPLACEMENT',
              childOptions : {
                intro: {
                  section: [{
                      imageSideCopy: '<span>Self Displacement.</span><span>Displacement of self through technology. Viewer’s reflection is multiplied and distorted with limited control offered to the viewer.</span><span>Viewer operates Arduino based one-of Midi controller which manipulates audio and visual parameters in the system.</span><span>No instructions provided.</span>',
                      item: '<iframe src="https://player.vimeo.com/video/159350714" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>',
                    }],
                },
                image: ['img/emerging_media/BLUESCREEN/1_BluescreenSchutte1.jpg', 'img/emerging_media/BLUESCREEN/2_BluescreenSchutteStill.jpg'],
                writeUp: null,
              }
          }),
          new cascadingOption({
              text:'STOPMOTION',
              childOptions : {
                  intro: {
                    section: [{
                        imageSideCopy: '<span>Platform created to explore deviations from standard linear film recording. </span><span>Arduino takes input from bend sensor within wearer’s glove and fires LED strobe when bend threshold is passed. Frame is grabbed from camera and inserted into generated loop of video, lengthening as the user contributes more frames. </span>',
                        item: '<iframe src="https://player.vimeo.com/video/82746292" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>',
                      }],
                  },
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
                text:' ',
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

var self = this;
var categories = [collection, photography, emergingMedia, about];
var activeCategory = ko.observable();
var activeCollection = ko.observable(/*self.activeCategory().childOptions[0]*/);

var iteration = 1;

function moveMenu(){
  switch (iteration) {
    case 1:
          // odd clicks
          $('.secret-menu').addClass('activeMenu');
          $('body').animate({
            left: "-180px"
          }, 400);
          $('.menu-container').animate({
            right: "5.5vw"
          }, 365);
      break;

    case 2:
          // even clicks
          $('.secret-menu').removeClass('activeMenu');
          $('body').animate({
            left: "0px"
          }, 400);
          $('.menu-container').animate({
            right: "-240px"
          }, 340);
      break;
  }
  iteration++;
  if (iteration > 2)
    {iteration = 1}
}

var activeItems = ko.observable();

var collections = ko.computed(function(){
    return activeCategory() ? activeCategory().childOptions : null;
  });


    self.setCategory = function(clickedCategory) {
        self.activeCategory(clickedCategory); // set category to active
        self.setCollection(clickedCategory.childOptions[0]);  // set first collection in category to active
        if (self.activeCollection().text === " " || self.activeCollection().text === "TO SEEK ANOTHER TITLE" || self.activeCollection().text === "IN ORDER OF APPEARANCE" ) { // if the collection is blank close the menu for mobile
          self.moveMenu();
        }
      };

var items = ko.computed(function(){
    return activeCollection() ? activeCollection().childOptions : null;
  });

function setCategory(clickedCategory) {
    activeCategory(clickedCategory); // set category to active
    setCollection(clickedCategory.childOptions[0]);  // set first collection in category to active
    if (activeCollection().text === " " || activeCollection().text === "TO SEEK ANOTHER TITLE" || activeCollection().text === "IN ORDER OF APPEARANCE"){ // if the collection is blank close the menu for mobile
      moveMenu();
    }
    console.log(clickedCategory);
  }

function setCollection(clickedCollection) {
    return activeCollection(clickedCollection);
  }

// initalize
// self.setCategory(self.inital[0]);

var pathname = window.location.pathname; // Returns path only
var url      = window.location.href;


    if (url.includes('tsat')){
      self.activeCategory(collection);
      self.activeCollection(collection.childOptions[0]);
    }
    if (url.includes('iooa')){
      self.activeCategory(collection);
      self.activeCollection(collection.childOptions[1]);
    }

ko.applyBindings();
