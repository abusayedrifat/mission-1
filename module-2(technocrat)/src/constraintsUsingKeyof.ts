{

//generic constraints with keyof operator


type Vehicle ={
    bike:string;
    car:string;
    yacht:string;
}

type Owner = "bike" | "car" | "yacht"    //manually. uniob string literal type

type Owner2 = keyof Vehicle

const user = {
    name:'mr. X',
    age:23,
    address:'rajshahi'
}

const getPropertyValue = <X,Y extends keyof X > (obj:X, key:Y)=>{

    return obj[key]
}

const result = getPropertyValue(user,'name')
console.log(result);





}