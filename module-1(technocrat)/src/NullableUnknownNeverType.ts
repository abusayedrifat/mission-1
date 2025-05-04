


{//nullable ,unknown , never types
// read this articale for details --> https://medium.com/@enayetflweb/understanding-nullable-unknown-and-never-types-in-typescript-b183fb792d2d


//nullable type
const searchName = (value:string | null) =>{
    if (value) {
        console.log('searching');
        
    }
    else{
        console.log('there is nothing to search');
        
    }
}

searchName(null)


//unknown types

const getSpeed = (value : unknown) =>{
    if (typeof value == 'number') {
        const convertedSped = (value*1000)/3600;
        console.log('speed calculated = ', convertedSped);
        
    }
    else if( typeof value == 'string'){
        const [quantity, unit] = value.split(' ')
        const convertedSped = ( parseInt(quantity)*1000)/3600;
        console.log('speed calculated');
        
    }
    else{
        console.log('wrong input');
        
    }
}
getSpeed(10234)


//never types
const throwError = (msg:string)=>{
    throw new Error(msg)
}
throwError('this an error')



}