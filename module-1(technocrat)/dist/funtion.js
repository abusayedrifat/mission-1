"use strict";
//Functions
//normal function
//arrow Function
function add(a, b) {
    return a + b;
}
add(3, 3);
const add2 = (a, b) => a + b;
//object --> function --> method
const pooGuy = {
    name: 'abu sayed',
    balance: 0,
    addBalance(balance) {
        return `my new balance : ${this.balance + balance}`;
    }
};
const arr = [1, 2, 4];
const newArry = arr.map((ele) => ele * ele);
