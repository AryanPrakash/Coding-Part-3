AFRAME.registerComponent("enemy-bullets", {
    init: function () { 
        setInterval(this.shootEnemyBullet, 2000)
    },
    shootEnemyBullet: function () {
        var els = document.querySelectorAll('.enemy') //class name entity 
        for (var i = 0; i<els.length; i++)
        {
            var enemy_bullet = document.createElement('a-entity') //method to create a-entity in js file
            enemy_bullet.setAttribute('geometry', {premitive: 'sphere', radius: '0.1'})
            enemy_bullet.setAttribute('material', 'color', '#282B29');
            var pos = els[i].getAttribute('position')
            enemy_bullet.setAttribute('position' , {
                x: pos.x + 1.5,
                y: pos.y + 3.5,
                z: pos.z
            })
            var scene = document.querySelector('#scene') //to make enemy-bullet entity inside the scene in html file
            scene.appendChild('enemy-bullets')
        }
    },

});