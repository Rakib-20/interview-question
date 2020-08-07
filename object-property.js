const students = [
    {id: 21, name: 'rakib'},
    {id: 31, name: 'nayem'},
    {id: 41, name: 'sakil'},
    {id: 71, name: 'rabbi'}
];

const name = students.map(s => s.name);
const id = students.map(s => s.id);
const bigger = students.filter(s => s.id > 40);
const biggerOne = students.find(s => s.id > 40);
console.log(biggerOne);