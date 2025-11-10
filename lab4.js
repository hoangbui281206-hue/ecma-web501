const colors = ["red", "green", "blue"];

// const red = colors[0];
// console.log(red);
// const [red, green, blue, yellow] = colors;

// console.log(red, green, blue, yellow);

const numbers = [1, 2, 3, 4, 5];

const [,second, four,] = numbers;
console.log(second, four);

const [password, ...userInfo] = user;
console.log(userInfo);

//bai1
function getFirstLast(array) {
    if (!array || array.length === 0) return [];
    return [array[0], array[array.length - 1]];
  }
  
  console.log(getFirstLast([1, 2, 3, 4])); 
  console.log(getFirstLast([7]));
  console.log(getFirstLast([])); 
  //bai2
  function swapElements(arr) {
    if (arr.length < 4) return arr;
    [arr[1], arr[3]] = [arr[3], arr[1]]; 
    return arr;
  }
  
  console.log(swapElements([1, 2, 3, 4, 5])); 
  console.log(swapElements([10, 20, 30]));   

  // bai 1 Object Destructuring
  function getUserInfo(user) {
    const { personalInfo: { name, contact: { email } } } = user;
    return { name, email };
  }
  
  const user = {
    id: 1,
    personalInfo: {
      name: "javascript",
      contact: {
        email: "javascript@email.com",
        phone: "123-456-7890",
      },
    },
  };
  
  console.log(getUserInfo(user));
  //bai 2
  const product2 = createProduct({ name: "Phone", price: 499, category: "electronics", inStock: false });
console.log(product2);
  