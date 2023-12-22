AFRAME.registerComponent('box-move' , {
    schema : {
        moveX: {type: 'number' , default: 1},
        moveY: {type: 'number' , default: 2}
    },
    tick: function(){
        this.data.moveX = this.data.moveX + 0.01;
        var pos = this.el.getAttribute('position')
        pos.x=this.data.moveX
        //setting new values for position in box.js file
        this.el.setAttribute('position' , {
            x: pos.x, y: pos.y , z: pos.z
        })
        
        //console.log(pos.x)
    }
})