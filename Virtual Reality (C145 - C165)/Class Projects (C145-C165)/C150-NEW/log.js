//registering component-->
AFRAME.registerComponent('log' , {
    schema: {
        message: {type: 'string' , default: 'hello World'}
    },
    init: function(){
        console.log(this.data.message)
    }
})