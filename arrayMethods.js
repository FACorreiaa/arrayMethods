const item = [{
        name: "Fernando",
        age: 31,
    },
    {
        name: "Sandra",
        age: 24,
    },
    {
        name: "Antonio",
        age: 60,
    },
    {
        name: "Emilia",
        age: 59,
    },
];

const filteredItems = item.filter((i) => i.age < 30);
const mappedItems = item.map((i) => i.name);
const foundItem = item.find((i) => i.name === "Fernando");
const youngAge = item.some((i) => i.age <= 60);
const whatAge = item.every((i) => i.age > 50);
const totalAge = item.reduce((total, i) => {
    return i.age + total;
}, 0);
console.log(item);
console.log(filteredItems);
console.log(mappedItems);
console.log(foundItem);
item.forEach((i) => console.log(i.age));
console.log(youngAge);
console.log(whatAge);
console.log(totalAge);
const includesNumber = item.includes(31);
console.log(includesNumber);