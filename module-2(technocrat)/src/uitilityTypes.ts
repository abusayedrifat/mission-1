{
    //Utility types

//Pick

type Person = {
    name:string;
    age:number;
    email?:string;
    contactNo:string
}

type NameAge = Pick<Person, "age"|"name">
     

//Omit
type ContactInfo = Omit<Person, "name"|"age">

//Required
type PersonEmail = Required<Person>

//Partial
type PartialPerson = Partial<Person>

//ReadOnly
type ReadonlyPerson1 = Readonly<Person>

//Record

type MyObj = Record<string,string>

const EmptyObj :  Record<string,unknown> ={}


const obj1:MyObj = {
    a:'a',
    b:'b',
    c:'c',
    d:'d'
}







}