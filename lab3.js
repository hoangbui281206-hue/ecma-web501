//bai1
const multiply = (a ,b) => a*b;

const isPositive = (number) => number >= 0;

const getRandomNumber = () => Math.random();

const createUser = (name = "Anonymous", age = 18, isAdmin = false) => {
    return {name, age, isAdmin};
}
//bai2
function createUser(name = "Anonymous", age = 18, isAdmin = false) {
    return { name, age, isAdmin };
  }
  
  console.log(createUser()); // { name: "Anonymous", age: 18, isAdmin: false }
  console.log(createUser("Hoàng", 19, true)); // { name: "Hoàng", age: 19, isAdmin: true }
// bai3 p1
function mergeArrays(...arrays) {
    return arrays.flat(); // hoặc dùng [].concat(...arrays)
  }
  
  console.log(mergeArrays([1, 2], [3, 4], [5])); // [1, 2, 3, 4, 5]
  //bai3 p2
  function sumAll(...numbers) {
    return numbers.reduce((sum, n) => sum + n, 0);
  }
  
  console.log(sumAll(1, 2, 3, 4)); // 10
// bai3 p3
function createProduct({ name, price, category = "general", inStock = true }) {
    return { name, price, category, inStock };
  }
  
  console.log(createProduct({ name: "Laptop", price: 999 }));
  // { name: "Laptop", price: 999, category: "general", inStock: true }
// bai4
function shoppingCart(customerName, ...products) {
    return {
      customer: customerName,
      items: products,
      totalItems: products.length
    };
  }
  
  console.log(shoppingCart("Hoàng", "Laptop", "Phone", "Mouse"));
  