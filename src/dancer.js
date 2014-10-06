// // Creates and returns a new dancer object that can step
// var makeDancer = function(top, left, timeBetweenSteps){

//   var dancer = {};

//   // use jQuery to create an HTML <span> tag
//   dancer.$node = $('<span class="dancer"></span>');


//   dancer.step = function(){
//     // the basic dancer doesn't do anything interesting at all on each step,
//     // it just schedules the next step
//     setTimeout(dancer.step, timeBetweenSteps);
//   };
//   dancer.step();

//   dancer.setPosition = function(top, left){
//     // Use css top and left properties to position our <span> tag
//     // where it belongs on the page. See http://api.jquery.com/css/
//     //
//     var styleSettings = {
//       top: top,
//       left: left
//     };
//     dancer.$node.css(styleSettings);
//   };

//   // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
//   // this one sets the position to some random default point within the body
//   dancer.setPosition(top, left);

//   return dancer;
// };

//node property set to span
//step method that calls itself every timeBetweenSteps
//setPosition method that sets the node's css to top and left
//it shoudl call step() and setPosition(top,left)

//
var makeDancer = function(top,left,timeBetweenSteps){
  this.$node =$('<span class="dancer"></span>');
  this.timespan = timeBetweenSteps;
  this.step();
  this.setPosition();
}
makeDancer.prototype.step = function(){
  var that = this;
  setTimeout(function(){
    that.step()
  },this.timespan)
  console.log(this)
};
makeDancer.prototype.setPosition = function(top,left){
  var cssSetting = {top: top, left: left}
  this.$node.css(cssSetting);
}

var hog = function(){
  this.func = function(){
    debug(this.durr)
  }
  this.durr = 'durrr'
  this.func()
}
var pig = new hog()