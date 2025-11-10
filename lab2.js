//bai 1:
for (let i = 0; i < 3; i++) {
    setTimeout(function () {
        console.log(i); // 0, 1, 2
    }, 100);
}

//bai 2:
const student = {
    name: "VanSang",
    age: 18,
};
student.grade = "A";
student.age = 20;
console.log(student);

//bai 3:
const user = {
    firstName: "Nguyen",
    lastName: "Van Sang",
    product: "Giay The Thao",
    price: 250000,
    orderDate: "2025-04-8",
};
const emailTemplate = `
Xin chào ${user.firstName} ${user.lastName},

Cảm ơn bạn đã đặt hàng tại cửa hàng của chúng tôi.
Thông tin đơn hàng của bạn như sau:

Sản phẩm: ${user.product}
Giá: ${user.price.toLocaleString()} VND
Ngày đặt hàng: ${user.orderDate}

Chúng tôi sẽ liên hệ với bạn sớm để xác nhận đơn hàng.

Trân trọng,
Đội ngũ bán hàng
`;

console.log(emailTemplate);

//bai 4: 
const product = {
    name: "iPhone Xs Max",
    price: 20000000,
    discount: 10,
    inStock: true,
};

const finalPrice = product.price * (1 - product.discount / 100);

const productCard = `
<div class="product-card">
  <h2>${product.name}</h2>
  <p>Giá gốc: <s>${product.price.toLocaleString()} VND</s></p>
  <p>Giảm giá: ${product.discount}%</p>
  <p>Giá sau giảm: <strong>${finalPrice.toLocaleString()} VND</strong></p>
  <p>Tình trạng: ${product.inStock ? "Còn hàng" : "Hết hàng"}</p>
  <button ${product.inStock ? "" : "disabled"}>Mua ngay</button>
</div>
`;

console.log(productCard);

//bai 5:
const width = 100;
const height = 300;
const color = "red";

const rectangle = {
    width,
    height,
    color,

    calculateArea() {
        return this.width * this.height;
    },

    describe() {
        return `Rectangle ${this.width}x${this.height}, color: ${this.color}`;
    },
};

console.log(rectangle.calculateArea());
console.log(rectangle.describe());