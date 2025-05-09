{

// oop - inheritence


class Parent {

    name:string;
    age:number;
    address:string;

    constructor( name:string, age:number, address:string ){
        this.name = name;
        this.age = age;
        this.address = address
    }

    getSleep(numOfHours:number){
        console.log(`${this.name} sleeps ${numOfHours} hours daily`);
        
    }

}



class Student extends Parent {
    constructor( name:string, age:number, address:string ){
        super(name,age,address)
    }

}

const student1 = new Student('rifat', 23, 'rajshahi')
student1.getSleep(6)




class Teacher extends Parent {

    designation:string;

    constructor( name:string, age:number, address:string, designation:string ){
        super(name,age,address)
        this.designation = designation;
    }
    takeClasses(numOfClass:number){
        console.log(`${this.name} takes class total ${numOfClass}`);    
    }

}
const teacher = new Teacher('golam mostofa',48,'uganda','professor')
teacher.takeClasses(34)















}