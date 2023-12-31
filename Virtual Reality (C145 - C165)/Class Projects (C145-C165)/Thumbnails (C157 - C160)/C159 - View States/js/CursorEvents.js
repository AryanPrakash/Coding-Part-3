AFRAME.registerComponent("cursor-listener", {
  schema: {
    selectedItemId: { default: "", type: "string" },
  },
  init: function () {
    this.handleMouseEnterEvents();
    this.handleMouseLeaveEvents();
    this.handleClickEvents();
  },

  //C159
  handleClickEvents: function(){
    this.el.addEventListener('click', evt=>{
      //code to handle the click event
      const places_container = document.querySelector('#places-container');
      const {state} = places_container.getAttribute('tour');
      //to check the state value
      if(state==='places-list'){
        const id = this.el.getAttribute('id')
        const placesId = ["taj-mahal", "budapest", "new-york-city", "eiffel-tower"];
        //to check if placesid includes id if yes, change the state value to 'view'
      if (placesId.includes(id)) {
        places_container.setAttribute('tour', {state: 'view', selectedcard: id});  
      }
      }
    })
  },

  handlePlacesListState: function () {
    const id = this.el.getAttribute("id");
    const placesId = ["taj-mahal", "budapest", "new-york-city", "eiffel-tower"];
    if (placesId.includes(id)) {
      const placeContainer = document.querySelector("#places-container");
      placeContainer.setAttribute("cursor-listener", {
        selectedItemId: id,
      });
      this.el.setAttribute("material", {
        color: "#D76B30",
        opacity: 1,
      });
    }
  },
  handleMouseEnterEvents: function () {
    //Cursor 'mouseenter' Events
    this.el.addEventListener("mouseenter", () => {
      this.handlePlacesListState();
    });
  },
  handleMouseLeaveEvents: function () {
    //Cursor 'mouseleave' Events
    this.el.addEventListener("mouseleave", () => {
      const { selectedItemId } = this.data;
      if (selectedItemId) {
        const el = document.querySelector(`#${selectedItemId}`);
        const id = el.getAttribute("id");
        if (id == selectedItemId) {
          el.setAttribute("material", {
            color: "#0077CC",
            opacity: 1,
          });
        }
      }
    });
  },
});
