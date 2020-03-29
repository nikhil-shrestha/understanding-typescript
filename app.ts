// const person: {
//   name: string;
//   age: number;
// } = {
//   name: 'Nikhil',
//   age: 25,
// };
const person = {
  name: 'Nikhil',
  age: 25,
  hobbies: ['Sports', 'Cooking']
};

let favoriteActivitites: string[];
favoriteActivitites = ['Sports', 1];

console.log(person.name);
for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}
