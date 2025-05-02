//basic data type

//premetive data type
//string
let fullName : string = 'abu sayed rifat'

//number
let num : number = 5541

//boolean 
let muscle : boolean = true

//undefined
let x: undefined = undefined

//null
let y: null = null

//typescript won't let you insert multiple or as you like put any dataType. if it's pre-defined .




//non-premetive dataType 

let friends : string[] = ['rifat','emon']

friends.push('zahid') // error: Argument of type 'number' is not assignable to parameter of type 'string'

//tuple --> array --> order --> types of value

//==> A tuple in TypeScript (and many programming languages) is a fixed-length array where each element has a specific type and position.

let ageName : [number, string] = [23,'rifat']

ageName[0] = 34

console.log(ageName);
