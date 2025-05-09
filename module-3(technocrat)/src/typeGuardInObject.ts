{

//instance of guard


class Animal{
    name:string;
    species:string;

    constructor(name:string,species:string){
        this.name = name;
        this.species = species
    }

    makeSound(){
        console.log('animal making sound');
        
    }
}

class Dog extends Animal {
    constructor(name:string,species:string){
        super(name,species)
    }
    barkingSound(){
        console.log(`${this.name} ${this.species} is barking`);
        
    }
}

class Cat extends Animal{
    constructor(name:string,species:string){
        super(name,species)
    }
    meowSound(){
        console.log(`the ${this.name} ${this.species} is meowing`);
        
    }
}

//
const getAnimal=(animal:Animal)=>{

    if (animal instanceof Cat) {
        animal.meowSound()
    }
    else if(animal instanceof Dog){
        animal.barkingSound()
    }
    else{
        animal.makeSound()
    }
}

const cat = new Cat('ginger','cat')
const dog = new Dog('german shepard','dog')
getAnimal(cat)


















}