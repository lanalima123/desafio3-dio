class hero{
    constructor(name, age, type){
        this.name = name
        this.age = age
        this.type = type
        
    }
    escrever(){ console.log(`O ${this.type} atacou usando:`)}}
    let novoHeroi = new hero("igor", "22", "ninja")

if(novoHeroi.type === "Mago"){
    let ataques = "feitiço"
   novoHeroi.escrever() + console.log(ataques)  
 
    
    
   
} 
else if(novoHeroi.type === "gerreiro"){
    let ataques = "espada"
    novoHeroi.escrever() + console.log(ataques)  }


else if(novoHeroi.type === "ninja"){
    let ataques = "shuriken"
    novoHeroi.escrever() + console.log(ataques)  }
 
    
    
   
