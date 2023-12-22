A-FRAME.registerComponent('terrain-rotation-reader', {
    schema: {
        speedofrotation: {type: 'number' , default: 0}
    }, 

    init: function(){
        window.addEventListener('keydown' , (e)=>{
            //-e - means any keydown event
            if(e.key==='ArrowRight'){
                if(this.data.speedofrotation<0.1){
                    this.data.speedofrotation+=0.01
                }
            }
            if(e.key==='ArrowLeft'){
                if(this.data.speedofrotation>-0.1){
                    this.data.speedofrotation-=0.01
                }
            }
        })
        
    },
//every function should be ended wwith comma(',')
    tick: function(){
        var maprotation = this.el.getAttribute('rotation');
        maprotation.y+=this.data.speedofrotation
        this.el.setAttribute('rotation' , {
            x: maprotation.x,
            y: maprotation.y,
            z: maprotation.z
        })
    }
})

A-FRAME.registerComponent('plane-rotation-reader', {
    schema: {
        speedofrotation: {type: 'number' , default: 0},
        speedofascent: {type: 'number', default: 0},
    }, 

    init: function(){
        window.addEventListener('keydown' , (e)=>{
            this.data.speedofrotation = this.el.getAttribute('rotation')
            this.data.speedofascent = this.el.getAttribute('position')

            var planerotation = this.data.speedofrotation;
            var planeposition = this.data.speedofascent;

            //-e - means any keydown event
            if(e.key==='ArrowRight'){
                if(planerotation.x < 10){
                    planerotation.x+=0.5;
                    this.el.setAttribute('rotation', planerotation) 
                }
            }

            if(e.key==='ArrowLeft'){
                if(planerotation.x > -10){
                    planerotation.x-=0.5;
                    this.el.setAttribute('rotation', planerotation) 
                }
            }

            if(e.key==='ArrowUp'){
                if(planerotation.z < 20){
                    planerotation.z+=0.5;
                    this.el.setAttribute('rotation', planerotation) 
                }
            }

            if(e.key==='ArrowDown'){
                if(planerotation.z > -10){
                    planerotation.z-=0.5;
                    this.el.setAttribute('rotation', planerotation) 
                }
            }
        })
        
    },
})