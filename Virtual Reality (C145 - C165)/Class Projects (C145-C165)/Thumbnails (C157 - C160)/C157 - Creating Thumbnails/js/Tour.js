AFRAME.registerComponent("tour", {
  init: function () {
    this.placesContainer = this.el;
    this.createCards()
  },

  createCards: function () {
    const thumbNailsRef = [
      {
        id: "taj-mahal",
        title: "Taj Mahal",
        url: "./assets/thumbnails/taj_mahal.png",
      },
      {
        id: "budapest",
        title: "Budapest",
        url: "./assets/thumbnails/budapest.jpg",
      },

      {
        id: "eiffel-tower",
        title: "Eiffel Tower",
        url: "./assets/thumbnails/eiffel_tower.jpg",
      },
      {
        id: "new-york-city",
        title: "New York City",
        url: "./assets/thumbnails/new_york_city.png",
      },
    ];
    let prevoiusXPosition = -60;

    for (var item of thumbNailsRef) {
      const posX = prevoiusXPosition + 25;
      const posY = 10;
      const posZ = -40;
      const position = { x: posX, y: posY, z: posZ };
      prevoiusXPosition = posX;

      // Border Element
      const bordere1 = this.createborder(position, item.id)
      // Thumbnail Element
     const thumbnail = this.createthumbnail(item) //actual item from thubnail list
      bordere1.appendChild(thumbnail)

      // Title Text Element
      const titlee1 = this.creeatetitleevent(position, item)
      bordere1.appendChild(titlee1)

      this.placesContainer.appendChild(bordere1);
    }
  },
  //function for creating border
  createborder: function(position, id) {
    //create an entity - method (below)
    //a-entity => already defined for creating an entity in javascript file
      const entitye1 = document.createElement('a-entity');
      entitye1.setAttribute('id', id);
      entitye1.setAttribute('visible', true);
      entitye1.setAttribute('geometry', {
        primitive: 'ring', //primitive => shapes
        radiusInner : 9,
        radiusOuter: 10
      } )
      entitye1.setAttribute('position' , position);
      entitye1.setAttribute('material' , {
        color: '#0077CC',
        opacity: 1 //completely visible as opacity = 1
      } );
      return entitye1;
  },

  //function for creating thumnail
  createthumbnail: function(item) {
    const entitye1 = document.createElement('a-entity');
      entitye1.setAttribute('visible', true);
      entitye1.setAttribute('geometry', {
        primitive: 'circle', //primitive => shapes
        radius : 9
      } )
      entitye1.setAttribute('material' , {
        src: item.url
      } );
      return entitye1;
  },

  creeatetitleevent: function(position, item) {
      const entitye1 = document.createElement('a-entity')
      entitye1.setAttribute('text' , {
        font: 'exo2bold',
        align: 'center',
        width: 70,
        color: '#E65100',
        value: item.title
      })
      const E1position = position;
      E1position.y = -20
      entitye1.setAttribute('position' , E1position);
      entitye1.setAttribute('visible', true);
      return entitye1;
  }
  
});
