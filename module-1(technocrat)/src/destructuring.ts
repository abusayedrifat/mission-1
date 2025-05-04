//object destucturing
const user = {
  id: 23948,
  name: {
    firstName: "abu",
    middleName: "sayed",
    lastName: "rifat",
  },
  contactNo: +88013100252394,
  address: "rajshahi",
};

const { id, address, name: {firstName: rawname} } = user;  //name alias --> name: {firstName: rawname} . firstName changed to rawname

const fruits: string[] = [
  "mango",
  "lichi",
  "banana",
  "wood-apple",
  "coconut",
  "pomeegranate",
  "pineapple",
  "grapes",
  "guava",
  "black-berry",
  "raspeberry",
  "jackfruit",
];

const [a, b, c, d, favFruit, ...rest] = fruits;
console.log(fruits);
