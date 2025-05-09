{

//type guard

type AlphaNumeric = number | string

 const add = (a:AlphaNumeric, b:AlphaNumeric): AlphaNumeric =>  {
    if(typeof a === 'number' && typeof b === 'number'){
        return a+b
    }
    else{
        return a.toString()+b.toString()
    }
 }

 console.log(add('abu','sayed'));
 


 //in guard

 

















}