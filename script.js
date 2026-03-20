// 1. Dữ liệu hạt giống (Đã thêm trường image)
// Lấy dữ liệu từ localStorage nếu có, nếu không dùng dữ liệu mặc định
let seeds = JSON.parse(localStorage.getItem("seeds")) || [
  {
    id: 1,
    name: "Bí đỏ",
    importPrice: 500,
    type: "Hàng năm",
    season: "Xuân",
    sellingPrice: 10000,
    quantity: 1,
    supplier: "Popcap",
    image: "./images/bido.jpg",
  },
  {
    id: 2,
    name: "Cà chua bi",
    importPrice: 800,
    type: "Hàng năm",
    season: "Hạ",
    sellingPrice: 15000,
    quantity: 50,
    supplier: "GreenFarm",
    image: "./images/cachuabi.jpg",
  },
  {
    id: 3,
    name: "Hoa Hồng Leo",
    importPrice: 5000,
    type: "Lưu niên",
    season: "Xuân",
    sellingPrice: 45000,
    quantity: 4,
    supplier: "Popcap",
    image: "./images/hoahongleo.jpg",
  },
  {
    id: 4,
    name: "Cải Bó Xôi",
    importPrice: 300,
    type: "Hàng năm",
    season: "Đông",
    sellingPrice: 8000,
    quantity: 100,
    supplier: "VinSeed",
    image: "images/caiboxoi.jpg",
  },
  {
    id: 5,
    name: "Dưa Hấu",
    importPrice: 1200,
    type: "Hàng năm",
    season: "Hạ",
    sellingPrice: 25000,
    quantity: 30,
    supplier: "GreenFarm",
    image: "./images/duahau.jpg",
  },
  {
    id: 6,
    name: "Oải Hương",
    importPrice: 7000,
    type: "Lưu niên",
    season: "Thu",
    sellingPrice: 60000,
    quantity: 5,
    supplier: "Popcap",
    image: "./images/oaihuong.jpg",
  },
  {
    id: 7,
    name: "Cà rốt",
    importPrice: 400,
    type: "2 năm",
    season: "Đông",
    sellingPrice: 12000,
    quantity: 80,
    supplier: "VinSeed",
    image: "./images/carot.jpg",
  },
  {
    id: 8,
    name: "Hướng Dương",
    importPrice: 1000,
    type: "Hàng năm",
    season: "Hè",
    sellingPrice: 20000,
    quantity: 15,
    supplier: "GreenFarm",
    image: "./images/huongduong.jpg",
  },
  {
    id: 9,
    name: "Việt Quất",
    importPrice: 15000,
    type: "Lưu niên",
    season: "Xuân",
    sellingPrice: 120000,
    quantity: 8,
    supplier: "Popcap",
    image: "./images/vietquat.jpg",
  },
];

// Lưu dữ liệu vào localStorage nếu chưa có
if (!localStorage.getItem("seeds")) {
  localStorage.setItem("seeds", JSON.stringify(seeds));
}

let cart = [];

// 2. Hiển thị danh sách hạt giống
function renderProducts() {
  const seedList = document.getElementById("seed-list");
  seedList.innerHTML = seeds
    .map(
      (seed) => `
        <div class="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group">
            <div class="relative overflow-hidden h-48">
                <img src="${seed.image}" alt="${seed.name}" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500">
                <span class="absolute top-3 left-3 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-green-700 shadow-sm">
                    ${seed.season}
                </span>
            </div>
            <div class="p-5">
                <div class="flex justify-between items-start mb-2">
                    <h3 class="text-lg font-bold text-gray-800">${seed.name}</h3>
                    <span class="text-xs text-gray-400 italic">${seed.supplier}</span>
                </div>
                <p class="text-sm text-gray-500 mb-2 font-medium">${seed.type}</p>
                <div class="text-xs text-gray-500 mb-4">
                    Kho: <span class="font-bold ${seed.quantity === 0 ? 'text-red-600' : seed.quantity < 10 ? 'text-orange-600' : 'text-green-600'}">${seed.quantity}</span> sản phẩm
                </div>
                <div class="flex justify-between items-center">
                    <span class="text-xl font-bold text-green-600">${seed.sellingPrice.toLocaleString()}đ</span>
                    <button onclick="addToCart(${seed.id})" 
                        class="bg-gray-900 text-white p-2 px-4 rounded-lg hover:bg-green-600 transition-colors text-sm font-semibold ${seed.quantity === 0 ? 'opacity-50 cursor-not-allowed' : ''}"
                        ${seed.quantity === 0 ? 'disabled' : ''}>
                        Thêm vào giỏ
                    </button>
                </div>
            </div>
        </div>
    `,
    )
    .join("");
}

// 3. Thêm vào giỏ hàng
window.addToCart = function (id) {
  const seed = seeds.find((s) => s.id === id);
  const cartItem = cart.find((item) => item.id === id);

  if (cartItem) {
    if (cartItem.cartQty < seed.quantity) {
      cartItem.cartQty++;
    } else {
      alert("Rất tiếc, loại hạt này đã hết hàng trong kho!");
    }
  } else {
    cart.push({ ...seed, cartQty: 1 });
  }
  updateUI();
};

// 4. Cập nhật giao diện giỏ hàng
window.updateQuantity = function (id, change) {
  const item = cart.find((i) => i.id === id);
  const seedOriginal = seeds.find((s) => s.id === id);

  if (item) {
    item.cartQty += change;

    // Nếu số lượng tăng vượt quá kho
    if (item.cartQty > seedOriginal.quantity) {
      alert("Đã đạt giới hạn số lượng trong kho!");
      item.cartQty = seedOriginal.quantity;
    }

    // Nếu số lượng về 0 hoặc nhỏ hơn 0 thì xóa khỏi giỏ
    if (item.cartQty <= 0) {
      cart = cart.filter((i) => i.id !== id);
    }
  }
  updateUI();
};

// 2. Cập nhật giao diện giỏ hàng (Có thêm nút + và -)
function updateUI() {
  const cartItemsContainer = document.getElementById("cart-items");
  const cartCount = document.getElementById("cart-count");
  const totalPrice = document.getElementById("total-price");

  cartCount.innerText = cart.reduce((sum, item) => sum + item.cartQty, 0);

  if (cart.length === 0) {
    cartItemsContainer.innerHTML = `<div class="text-center py-8 text-gray-400">Trống trơn... 🥬</div>`;
    totalPrice.innerText = "0đ";
    return;
  }

  cartItemsContainer.innerHTML = cart
    .map(
      (item) => `
        <div class="flex gap-3 items-center bg-gray-50 p-3 rounded-xl border border-gray-100">
            <img src="${item.image}" class="w-12 h-12 rounded-lg object-cover">
            <div class="flex-1">
                <h4 class="text-sm font-bold text-gray-800 line-clamp-1">${item.name}</h4>
                <p class="text-xs text-green-600 font-semibold">${item.sellingPrice.toLocaleString()}đ</p>
                
                <div class="flex items-center gap-2 mt-2">
                    <button onclick="updateQuantity(${item.id}, -1)" 
                        class="w-6 h-6 flex items-center justify-center bg-white border border-gray-300 rounded hover:bg-red-50 text-gray-600 transition">-</button>
                    
                    <span class="text-sm font-bold w-4 text-center">${item.cartQty}</span>
                    
                    <button onclick="updateQuantity(${item.id}, 1)" 
                        class="w-6 h-6 flex items-center justify-center bg-white border border-gray-300 rounded hover:bg-green-50 text-gray-600 transition">+</button>
                </div>
            </div>
            <button onclick="removeFromCart(${item.id})" class="text-gray-300 hover:text-red-500 transition ml-2">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
            </button>
        </div>
    `,
    )
    .join("");

  const total = cart.reduce(
    (sum, item) => sum + item.sellingPrice * item.cartQty,
    0,
  );
  totalPrice.innerText = total.toLocaleString() + "đ";
}

// Xóa khỏi giỏ
window.removeFromCart = function (id) {
  cart = cart.filter((item) => item.id !== id);
  updateUI();
};

// 5. Thanh toán
window.checkout = function () {
  if (cart.length === 0) return alert("Giỏ hàng của bạn đang trống!");

  const total = cart.reduce(
    (sum, item) => sum + item.sellingPrice * item.cartQty,
    0,
  );
  alert(
    `🛒 Đã nhận đơn hàng!\nTổng tiền: ${total.toLocaleString()}đ\nChúng tôi sẽ liên hệ giao hàng sớm nhất.`,
  );
  cart = [];
  updateUI();
};

// Khởi chạy khi trang load xong
document.addEventListener("DOMContentLoaded", renderProducts);

// Nhập hàng mới , cập nhật kho, dùng form đơn giản