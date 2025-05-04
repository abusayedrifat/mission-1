{
    //https://medium.com/@enayetflweb/demystifying-typescript-types-and-interfaces-for-beginners-ec3e780e46e5

//interface type

type User1 = {
    name:string,
    age:number
}

interface User2{
    name: string;
    age: number;
}

type UserWithRole1 = User1 & {role:string} //alia type sysytem

interface UserWithRole2 extends User2{     //interface type syste
    role: string
}

const user1 : UserWithRole1 ={
    name:'enayet',
    age:23,
    role:'student'
}


const User2: UserWithRole2 ={
    name:'rifat',
    age:34,
    role:'manager'
}


//interface array

type rollNumber = number[] //alias type system



const userRollNumber:rollNumber = [1,2,34,4]





}