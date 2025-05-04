//Functions

//normal function
//arrow Function

function add(a : number, b:number){
return a+b
}
add(3,3)


const add2 = (a:number,b:number):number => a+b ; 

//object --> function --> method

const pooGuy = {
    name:'abu sayed',
    balance:0,
    addBalance(balance:number): string{
        return `my new balance : ${this.balance + balance}`
    }
}

const arr: number[] = [1,2,4]

const newArry : number[] = arr.map((ele : number) :number => ele*ele)