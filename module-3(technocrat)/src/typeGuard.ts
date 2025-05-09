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

 type NormalUser = {
    name:string
 }

 type AdminUser = {
    name:string;
    role:'admin'
 }

 const getUser = (user: NormalUser | AdminUser ) =>{
    if ('role' in user) {
        console.log(`This user is ${user.role} and name is ${user.name}`);
    }
    else{
        console.log(`this is normal user and his name is ${user.name} `);
        
    }
 }

 const user1 : NormalUser ={
    name:'public'
 }

 const user2: AdminUser ={
    name:'rifat',
    role:'admin'
 }

getUser(user2)












}