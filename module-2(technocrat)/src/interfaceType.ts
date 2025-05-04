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

type UserWithRole1 = User1 & {role:'student'}

const user : UserWithRole1 ={
    name:'enayet',
    age:23,
    role:'student'
}




}