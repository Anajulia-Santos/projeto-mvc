class Atrativos{

    #id_atrativo
    #nome_atrativo
    #lat_atrativo
    #long_atrativo
    #desc_atrativo
    #image_atrativo

    constructor(id_atrativo,nome_atrativo,lat_atrativo,long_atrativo,desc_atrativo,image_atrativo,){
        this.#id_atrativo = id_atrativo
        this.#nome_atrativo = nome_atrativo 
        this.#lat_atrativo = lat_atrativo
        this.#long_atrativo = long_atrativo
        this.#desc_atrativo = desc_atrativo
        this.#image_atrativo = image_atrativo
    }

    get id_atrativo(){
        return this.#id_atrativo
    }

    set id_atrativo(value){
        this.#id_atrativo = value
    }

    get nome_atrativo(){
        return this.#nome_atrativo
    }

    set nome_atrativo(value){
        this.#nome_atrativo = value
    }
    
    get lat_atrativo(){
        return this.#lat_atrativo
    }

    set lat_atrativo(value){
        this.#lat_atrativo = value
    }

     get long_atrativo(){
        return this.#long_atrativo
    }

    set long_atrativo(value){
        this.#long_atrativo = value
    }

    get desc_atrativo(){
        return this.#desc_atrativo
    }

    set desc_atrativo(value){
        this.#desc_atrativo = value
    }
    
    get image_atrativo(){
        return this.#image_atrativo
    }

    set image_atrativo(value){
        this.#image_atrativo = value
    }

    toJson(){

        return {
            "id_atrativo": this.#id_atrativo,
            "nome_atrativo": this.#nome_atrativo,
            "lat_atrativo": this.#lat_atrativo,
            "long_atrativo": this.#long_atrativo,
            "desc_atrativo": this.#desc_atrativo,
            "image_atrativo": this.#image_atrativo
        }
      
    }
    
}

module.exports = Atrativos