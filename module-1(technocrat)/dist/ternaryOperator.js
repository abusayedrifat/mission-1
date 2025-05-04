"use strict";
var _a, _b;
{
    //ternary operator  || optional chaining || nullish coalescing operator
    const age = 18;
    if (age >= 18) {
        console.log('adult');
    }
    else {
        console.log('not adult');
    }
    const isAdult = age >= 18 ? 'adult' : 'not adult';
    console.log({ isAdult });
    //nullish coalescing opreator
    const isAuthenticated = undefined;
    const result = isAuthenticated !== null && isAuthenticated !== void 0 ? isAuthenticated : 'guest';
    const user = {
        name: 'sayed',
        address: {
            city: 'rajshahi',
            road: 'shohid siraji road',
            presentAddress: 'sm hall',
        }
    };
    const permanentAddress = (_b = (_a = user === null || user === void 0 ? void 0 : user.address) === null || _a === void 0 ? void 0 : _a.permanentAddress) !== null && _b !== void 0 ? _b : 'no permanent address';
    console.log(permanentAddress);
}
