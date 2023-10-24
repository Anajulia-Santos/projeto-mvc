class Coins{

    #id
    #nome 
    #value 
    #image 

    constructor(id ,nome ,value ,image ,){
        this.#id  = id 
        this.#nome  = nome  
        this.#value  = value 
        this.#image  = image 
    }

    get id (){
        return this.#id 
    }

    set id (value){
        this.#id  = value
    }

    get nome (){
        return this.#nome 
    }

    set nome (value){
        this.#nome  = value
    }
    
     get value (){
        return this.#value 
    }

    set value (value){
        this.#value  = value
    }

    get image (){
        return this.#image 
    }

    set image (value){
        this.#image  = value
    }

    toJson(){

        return {
            "id": this.#id,
            "nome": this.#nome ,
            "value": this.#value,
            "image": this.#image
        }
      
    }
    
}

module.exports = Coins