const colors = ["red", "green", "blue"];

const red = colors[0];
console.log(red);
const [red, green, blue, yellow] = colors;

console.log(red, green, blue, yellow);

const numbers = [1, 2, 3, 4, 5];

const [,second, four,] = numbers;
console.log(second, four);

const [password, ...userInfo] = user;
console.log(userInfo);