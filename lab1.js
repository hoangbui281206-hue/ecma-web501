
//bai tap 1:
function calculateBMI(weight, height) {
  const bmi = weight / (height * height);
  let classification = "";
  if (bmi < 18.5) {
    classification = "Thiếu cân";
  } else if (bmi < 25) {
    classification = "Bình thường";
  } else if (bmi < 30) {
    classification = "Thừa cân";
  } else {
    classification = "Béo phì";
  }
  return `BMI: ${bmi.toFixed(2)} - Phân loại: ${classification}`;
}
console.log(calculateBMI(50, 2,5));
function createBook(title, author, year, price) {
    const discountMethod = "calculateDiscount";
      return {
        title,
        author,
        year,
        price,
        getBookInfo() {
          return `📘 ${title} - Tác giả: ${author}, Năm XB: ${year}, Giá: ${price.toLocaleString()} VND`;
        },
        [discountMethod](discount) {
          const discountedPrice = price - (price * discount) / 100;
          return `💰 Giá sau khi giảm ${discount}%: ${discountedPrice.toLocaleString()} VND`;
        },
      };
    }
    const book = createBook("Sachhay", "Viet hoang", 2025, 200000);
    console.log(book.getBookInfo());
    console.log(book.calculateDiscount(10));
