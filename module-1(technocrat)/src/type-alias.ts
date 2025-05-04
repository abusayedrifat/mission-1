//type alias


{

    type Student = {
        name:string;
        id:number;
        sex:string;
        age:number;
        address?:string;
        contactNo?:string;
    }
    
const student1 : {
    name:string;
    id:number;
    sex:string;
    age:number;
    address:string;
} = {
    name:'rifat',
    id:5541,
    sex:'male',
    age:23,
    address:'rajshahi'
}


const student2 : Student = {
    name:'rifat',
    id:5541,
    sex:'male',
    age:23,
    address:'rajshahi',
    contactNo:'01540000'
}
const student3 : Student= {
    name:'emon',
    id:554231,
    sex:'male',
    age:24,
    address:'mymensingh',
    contactNo:'0184566666'
}
const student4 :Student = {
    name:'ross',
    id:5111,
    sex:'male',
    age:24,
    address:'canada',
    contactNo:'090184566666'
}


type UserName = string

const userName:UserName = ' rifat'


type Add = (num1:number, num2:number) => number
const add:Add = (num1,num2)=>num1+num2





}