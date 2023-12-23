//C158
AFRAME.registerComponent('cursor-listener' , {
  schema: {
    selectedItemId: {
      default: '' ,
      type: 'string'  //datatype
    }
  },

  //init function - to make a function run automatically when the respective component is called
  //calling the handlePlacesListState function inside the init function
  init: function(){
    //this.handlePlacesListState(); => already called inside handleMouseEnterEvent function
    this.handleMouseEnterEvent();
    this.handleMouseLeaveEvent();
  },

  handlePlacesListState: function(){ //function to check which place id we are selecting
    const id = this.el.getAttribute('id');
    const places_id = [ //storing the places id names
      'taj-mahal',
      'budapest',
      'new-york-city',
      'eiffel-tower' 
    ]
    //to check if the id is matching with the places id
    if(places_id.includes(id)){
      //taking specific place container
      const place_container = document.querySelector('#places-container') //compare with line no. 3 in tour.js
      //applying attributes for place_container
      place_container.setAttribute('cursor-listener', {
        selecteditemid: id //previuosly it was default //line no. 4

      });
      this.el.setAttribute('material', {
        color: '#D76B30',
        opacity: 1 //completely visible
      })
    }
  },

  //function to handle the mouse enter events
  handleMouseEnterEvent: function(){
    this.el.addEventListener('mouseenter' , ()=>{
      this.handlePlacesListState(); //some action has to happen after mouseenter event listener happens
    })
  },

  //function to handle the mouse leave event
  handleMouseLeaveEvent: function()
  {
    this.el.addEventListener('mouseleave', ()=>{
      const {selectoritemid} = this.data
      if(selectoritemid){
        const el = document.querySelector(`#{selecteditemid)`)
        const id = el.getAttribute('id')
        //to check if the id is matching wiithh the selected item
        if(id == selectoritemid){
          el.setAttribute('material' , {
            color: "#0077CC", //blue color
            opacity: 1 //completely visible
          })
        }
      }
    })
  }

})