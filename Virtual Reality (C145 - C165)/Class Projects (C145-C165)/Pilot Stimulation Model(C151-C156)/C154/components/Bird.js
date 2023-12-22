AFRAME.registerComponent("flying-birds", {
    init: function() {
        for (var i=1; i<=20; i++) {
            var id = `bird${i}`;

            //position variables
            var posX =(Math.random() * 3000 + (-1000));      
            var posY = (Math.random() * 2 + (-1));
            var posZ = (Math.random() * 3000 + -1000);

            var position = {x: posX, y: posY, x:posZ}
            this.flyingbirds(id, position);

        }
    },

    flyingbirds: (id, position) => {
        var terrainEl = document.querySelector("#terrain")
        var birdE1 = document.createElement('a-entity')

        //set the attributes - with id, position and assign bird gltf model too
        birdE1.setAttribute('id', id) //id created on line no. 4
        birdE1.setAttribute('position', position)
        birdE1.setAttribute('gltf-model', './assets/models/flying_bird/scene.gltf')
        birdE1.setAttribute('animation-mixer' , {}) //empty curly bracket => json object
        birdE1.setAttribute('scale' , {x: 300, y: 300, z: 300})
        terrainEl.appendChild(birdE1)
    }
})