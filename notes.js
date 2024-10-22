//1. Module Pattern
const Module = (function(){
    letprivateVar = "I am private";
    function privateMethod() {
        console.log(privateVar);
    }

    //public API
    return{
        publicMethod: function(){
            privateMethod();
        }
    };
})

Module.publicMethod(); //Output: I AM PRIVATE

//single Pattern

const Singleton = (function(){
    let instance;

    function createInstance() {
        return {name: "Singleton Instance"};
    }

    return {
        getInstance: function() {
            if(!instance) {
                instance = createInstance();
            }
            return instance //return existance instance
        }
    }
})
