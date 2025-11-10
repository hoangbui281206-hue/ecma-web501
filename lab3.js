//bai1
const multiply = (a ,b) => a*b;

const isPositive = (number) => number >= 0;

const getRandomNumber = () => Math.random();

const createUser = (name = "Anonymous", age = 18, isAdmin = false) => {
    return {name, age, isAdmin};
}
console.log(createUser());

console.log(createUser("hoang",19,true));
bdfbdfdf