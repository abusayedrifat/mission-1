{
    //mapped types
//https://medium.com/@weidagang/having-fun-with-typescript-mapped-types-8e9b5521cb55
// 


// type NewType = {
//     [Property in keyof OriginalType]: NewPropertyType 
// }

//=====mapped types=========
type AreaNumber = {
    height:number,
    width:number
}

type NewTypeAreaNumber = {
    [key in keyof AreaNumber] : string
}

//get flexibility in mapped tpes using generic
type flexibleTypeArea <T> = {
    [key in keyof T] : T[key]
}

const AreaString : flexibleTypeArea <{height:string;width:number}> = {
 height:'123',
 width:345
}














}