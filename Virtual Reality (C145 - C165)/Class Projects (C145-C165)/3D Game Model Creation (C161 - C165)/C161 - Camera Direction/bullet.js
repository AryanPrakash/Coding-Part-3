AFRAME.registerComponent('bullets', {
    //state is not needed for now
    init: function()
    {
        this.shootBullet();
    },
    shootBullet: function()
    {
        window.addEventListener('keydown', (e)=>{ //e - variable //to store the event of keydown //arguement
            if(e.key === 'z'){
                var bullet = document.createElement('a-entity')
                bullet.setAttribute('geometry', {
                    primitive: 'sphere',
                    //to use primitive 
                    //in javascript : primitive: '...'
                    //in html: <a-
                    radius: 0.1
                })
                bullet.setAttribute('material', 'color', 'black') //color primitive = material
                //to add the camera entity from index.html file
                var cam = document.querySelector('#camera');
                //to add the camera position from index.html file
                var pos = cam.getAttribute('position');
                //to make the camera's position = bullet's position
                bullet.setAttribute('position' , {
                    x: pos.x,
                    y: pos.y,
                    z: pos.z
                })
                //to make the bullet move
                bullet.setAttribute('velocity', {
                    x: 0, y: 0, z: -5
                })
                //to make bullet as a child of camera
                //cam.appendChild(bullet);
                var scene = document.querySelector('#scene')
                scene.appendChild(bullet)
            }
        } )
    },
})