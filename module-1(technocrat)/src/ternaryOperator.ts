{
    
    //ternary operator  || optional chaining || nullish coalescing operator


const age :number = 18

if (age >= 18) {
    console.log('adult');
    
}
else{
    console.log('not adult');
    
}

const isAdult = age >= 18 ? 'adult' : 'not adult';

console.log({isAdult});


//nullish coalescing opreator

const isAuthenticated = undefined;

const result = isAuthenticated ?? 'guest'

type User = {
    name:string;
    address:{
      city:string;
      road:string;
      presentAddress:string;
      permanentAddress?:string  
    }
   
}
const user:User = {
    name:'sayed',
    address:{
    city:'rajshahi',
    road:'shohid siraji road',
    presentAddress:'sm hall',  
    }
}

const permanentAddress = user?.address?.permanentAddress??'no permanent address'
console.log(permanentAddress);





}