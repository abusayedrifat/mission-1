

{

  //for clean code we use type alias and interface

  type genericTuple<x, y, z> = [x, y, z];
  type FruitTuple = genericTuple<
    string,
    number,
    { address: string; weight: string; contactNo: number }
  >;
  const fruitTuple: FruitTuple = [
    "rifat",
    123,
    { address: "rajshahi", weight: "62 kg", contactNo: +88013100000 },
  ];


  type genericArrayOfEverything<params> = Array<params>

  type foodObject = genericArrayOfEverything<{
    _id: number;
    foodName: string;
    imgURL: string;
    price: number;
  }>

  const foodItems: foodObject = [
    {
      _id: 128939812,
      foodName: 'burger',
      imgURL: 'https://hdkjahsdk.asdf.asdf.jpg',
      price: 345345
    },
    {
      _id: 128939812,
      foodName: 'burger',
      imgURL: 'https://hdkjahsdk.asdf.asdf.jpg',
      price: 345345
    },
    {
      _id: 128939812,
      foodName: 'burger',
      imgURL: 'https://hdkjahsdk.asdf.asdf.jpg',
      price: 345345
    },
    {
      _id: 128939812,
      foodName: 'burger',
      imgURL: 'https://hdkjahsdk.asdf.asdf.jpg',
      price: 345345
    }
  ]
  // console.log(foodItems);

  type hoobies = genericArrayOfEverything<string>
  const myHobbies: hoobies = ['gaming', 'pkaing', "lobbing", 'f']
  console.log(myHobbies);

  //interface  generic type

  interface Developer<T,X = null> {
    name: string;
    computer: {
      brand: string
    };
    smartWatch: T
    bike?:X
  }

  

  type SmartWatch =Array<{ brandName: string, ratings: number}>
  type Bike = {name:string,model:string}
  const richDeveloper: Developer<SmartWatch,Bike> = {
    name: 'rifat',
    computer: {
      brand: 'lenevo'
    },
    smartWatch: [
      {
        brandName: 'samsung',
        ratings: 23
      },
      {
        brandName:'apple',
        ratings:345
      },
      {
        brandName:'xiaomi',
        ratings:4.5
      }
    ],
    bike:{
      name:'yamaha',
      model:'fzs'
    }
    
  }


}