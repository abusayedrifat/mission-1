{
// access modifiers


class BankAccount{
   public readonly id:number;
   public name:string;
   private _balance:number;

    constructor(id:number,name:string,balance:number){
        this.id = id;
        this.name = name;
        this._balance = balance
    }

    addDeposite(amount:number){
        this._balance = this._balance + amount
    }
    getBalance(){
        return this._balance
    }
}

const boroloxUser = new BankAccount(23434,'rifat',5000)
boroloxUser.addDeposite(3000)
const myBalance = boroloxUser.getBalance()
console.log(myBalance);


  


















}