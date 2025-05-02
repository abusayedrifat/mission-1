//reference type --> object

const user1 :{
    firstName: string;
    middleName: string;
    lastName:string;
    age:number;
    department:string;
    isTrue:boolean
} ={
    firstName : 'abu',
    middleName : 'sayed',
    lastName: 'rifat',
    age: 23,
    department: 'pshrd',
    isTrue : true
}


const user2 :{
    firstName: string;
    middleName?: string; //optional type
    lastName:string;
    age:number;
    readonly department:'pshrd'; //literal type
    isTrue:boolean
} ={
    firstName : 'emon',
    lastName: 'mia',
    age: 23,
    department: 'pshrd',
    isTrue : true
}

user2.department = 'cse' //Cannot assign to 'department' because it is a read-only property.