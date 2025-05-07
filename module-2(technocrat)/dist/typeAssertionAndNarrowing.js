"use strict";
{
    //https://medium.com/@enayetflweb/understanding-type-assertion-in-typescript-a-beginners-guide-9495fcec2c61
    //type assertion
    let anything;
    anything = 'nest level web development';
    anything = 222;
    anything;
    const kgToGm = (value) => {
        if (typeof value === 'string') {
            const convertedValue = parseInt(value) * 1000;
            console.log(convertedValue);
            return `${convertedValue}gm`;
        }
        if (typeof value === 'number') {
            console.log(`${value * 1000}gm`);
            return `${value * 1000}gm`;
        }
    };
    kgToGm('300');
}
