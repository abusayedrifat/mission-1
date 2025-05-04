{
    //generic type

    type genericArray<params> = Array<params>;

    // const numberArray:number[] = [1,2,3,4]
    // const numberArray:Array<number> = [1,2,3,4]
    const numberArray: genericArray<number> = [1, 2, 3, 4];

    // const stringArray: string[] = ['rifat','emon']
    const stringArray: Array<string> = ["rifat", "emon"];
    const booleanArr: genericArray<boolean> = [true, true, false, true];

    const objectArray: genericArray<{ name: string; age: number }> = [
        {
            name: "rifat",
            age: 23,
        },
        {
            name: "emon",
            age: 24,
        },
        {
            name: "tanvir",
            age: 30,
        },
    ];

    //generic tuple

    type genericTuple<x, y, z> = [x, y, z];

    const fruitTuple1: genericTuple<string, string, string> = [
        "mango",
        "lichi",
        "banana",
    ];

    const fruitTuple2: genericTuple<
        string,
        number,
        { address: string; weight: string; contactNo: number }
    > = [
            "rifat",
            123,
            { address: "rajshahi", weight: "62 kg", contactNo: +88013100000 },
        ];
}
