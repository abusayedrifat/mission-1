{
//


class Person{

    getSleep(){
        console.log(`i am sleeping for 8 hours`);
        
    }
}

    class Student extends Person {
        getSleep() {
            console.log(`i am sleeing 7 hours per day`);
            
        }
    }
    class Developer extends Person {
        getSleep() {
            console.log(`i am sleeing 6 hours per day`);
            
        }
    }
 
 const getSleepingHours =(params: Person)=>{
    params.getSleep()
}


const person1 = new Person()
const person2 = new Student()
const person3 = new Developer()

getSleepingHours(person1)
getSleepingHours(person2)
getSleepingHours(person3)



class Shape{
    getArea(){
        return 0
    }
}

class Circle extends Shape{
    radius:number
    constructor(radius:number){
        super()
        this.radius = radius
    }
    getArea(): number {
        return Math.PI*this.radius*this.radius
    }
}

class ractangle extends Shape{
    length:number;
    width:number
    constructor(length:number, width:number){
        super()
        this.length = length
        this.width = width
    }
    getArea(): number {
        return this.length*this.width
    }
}


const getShapeArea = (params:Shape)=>{
    console.log(params.getArea());
    
}

const circleShape = new Circle(5)
const ractangleShape = new ractangle(10,23)

getShapeArea(circleShape)
getShapeArea(ractangleShape)














}