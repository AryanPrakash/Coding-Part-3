AFRAME.registerComponent("game-play", {
  schema: {
    elementId: { type: "string", default: "#ring1" },
  },
  init: function() {
    var duration = 120;
    //if its id use # otherwise if its class use dot '.' and for tag use nothing -->
    const timer_event = document.querySelector('#timer')
    //calling start_tiimer function
    this.start_timer(duration, timer_event)
  },

  start_timer: function(duration, timer_event) {

    var min;
    var sec;

    setInterval(()=>{
    if(duration>=0) {
      //convert duration into minutes and seconds
      min = parseInt(duration/60);
      //seconds will be the remainder
      sec = parseInt(duration%60);
    //check if the *minute* value is a single digit
    if(min<10){
      min = '0' +  min //eg: 05 mins
    }

    //check if the *seconds* value is a single digit
    if(sec<10){
      sec = '0' +  sec //eg: 05 sec
    }

    timer_event.setAttribute('text' , {
      value: min + ':' + sec
    })

    //decrease the duration by 1
    //reason: to end the game
    duration-= 1
    }
  }, 1000) 
  },
  //every function gets seperated by comma ','

  update: function () {
    this.isCollided(this.data.elementId);
  },

  isCollided: function (elementId) {
    const element = document.querySelector(elementId);
    element.addEventListener("collide", (e) => {
      if (elementId.includes("#ring")) {
        console.log(elementId + " collision");
      } else if (elementId.includes("#hurdle")) {
        console.log("bird collision");
      }
    });
  },

  updateTarget: function() {
    //to decrease the target value by 1
    const element = document.querySelector('#targets')
  } 

});