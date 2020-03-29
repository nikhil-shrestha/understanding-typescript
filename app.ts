// const person: {
//   name: string;
//   age: number;
// } = {
//   name: 'Nikhil',
//   age: 25,
// };
const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string];
} = {
  name: 'Nikhil',
  age: 25,
  hobbies: ['Sports', 'Cooking'],
  role: [2, 'author']
};

// person.role.push('admin');
// person.role[1] = 10;

// person.role = [0, 'admin'];

let favoriteActivitites: string[];
favoriteActivitites = ['Sports'];

console.log(person.name);
for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}
