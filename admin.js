// Thông tin đăng nhập mặc định
const ADMIN_USERNAME = "admin";
const ADMIN_PASSWORD = "admin123";

// Khởi chạy
document.addEventListener("DOMContentLoaded", () => {
  // Kiểm tra xem đã đăng nhập chưa
  const isLoggedIn = checkLoginStatus();
  if (isLoggedIn) {
    showAdminScreen();
    loadStockList();
  }
});

// Xử lý login
window.handleLogin = function (event) {
  event.preventDefault();

  const username = document.getElementById("username-input").value;
  const password = document.getElementById("password-input").value;
  const errorDiv = document.getElementById("login-error");

  if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
    // Lưu trạng thái đăng nhập vào localStorage
    localStorage.setItem("adminLoggedIn", "true");
    localStorage.setItem("adminLoginTime", new Date().getTime());

    showAdminScreen();
    loadStockList();
  } else {
    errorDiv.classList.remove("hidden");
    errorDiv.innerText = "❌ Tên đăng nhập hoặc mật khẩu sai!";
  }
};

// Kiểm tra trạng thái đăng nhập
function checkLoginStatus() {
  return localStorage.getItem("adminLoggedIn") === "true";
}

// Hiển thị trang admin
function showAdminScreen() {
  document.getElementById("login-screen").classList.add("hidden");
  document.getElementById("admin-screen").classList.remove("hidden");
}

// Đăng xuất
window.handleLogout = function () {
  if (confirm("Bạn chắc chắn muốn đăng xuất?")) {
    localStorage.removeItem("adminLoggedIn");
    localStorage.removeItem("adminLoginTime");
    location.reload();
  }
};

// Chuyển tab
window.switchTab = function (tabName) {
  // Ẩn tất cả tabs
  document.getElementById("add-seed-tab").classList.add("hidden");
  document.getElementById("update-stock-tab").classList.add("hidden");

  // Xóa active class từ tất cả nút
  document.getElementById("tab-add-seed").classList.remove("bg-green-600", "text-white");
  document.getElementById("tab-update-stock").classList.remove("bg-green-600", "text-white");

  document.getElementById("tab-add-seed").classList.add("bg-gray-300", "text-gray-700");
  document.getElementById("tab-update-stock").classList.add("bg-gray-300", "text-gray-700");

  // Hiển thị tab được chọn
  if (tabName === "add-seed") {
    document.getElementById("add-seed-tab").classList.remove("hidden");
    document.getElementById("tab-add-seed").classList.add("bg-green-600", "text-white");
    document.getElementById("tab-add-seed").classList.remove("bg-gray-300", "text-gray-700");
  } else if (tabName === "update-stock") {
    document.getElementById("update-stock-tab").classList.remove("hidden");
    document.getElementById("tab-update-stock").classList.add("bg-green-600", "text-white");
    document.getElementById("tab-update-stock").classList.remove("bg-gray-300", "text-gray-700");
    loadStockList();
  }
};

// Lấy dữ liệu hạt giống từ localStorage hoặc tạo mới từ dữ liệu mặc định
function getSeeds() {
  let seeds = JSON.parse(localStorage.getItem("seeds"));
  
  // Nếu chưa có trong localStorage, lấy từ window.seeds (nếu đã import từ script.js)
  // hoặc dùng dữ liệu mặc định
  if (!seeds) {
    seeds = [
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
    saveSeeds(seeds);
  }

  return seeds;
}

// Lưu dữ liệu hạt giống vào localStorage
function saveSeeds(seeds) {
  localStorage.setItem("seeds", JSON.stringify(seeds));
}

// Thêm hạt giống mới
window.handleAddSeed = function (event) {
  event.preventDefault();

  const seeds = getSeeds();

  const newSeed = {
    id: Math.max(...seeds.map((s) => s.id), 0) + 1,
    name: document.getElementById("seed-name").value,
    type: document.getElementById("seed-type").value,
    season: document.getElementById("seed-season").value,
    supplier: document.getElementById("seed-supplier").value,
    importPrice: parseInt(document.getElementById("seed-import-price").value),
    sellingPrice: parseInt(document.getElementById("seed-selling-price").value),
    quantity: parseInt(document.getElementById("seed-quantity").value),
    image: document.getElementById("seed-image").value || "./images/default.jpg",
  };

  seeds.push(newSeed);
  saveSeeds(seeds);

  // Xóa form
  event.target.reset();

  // Hiển thị thông báo thành công
  const successDiv = document.getElementById("success-message");
  successDiv.classList.remove("hidden");
  successDiv.innerText = `✅ Đã thêm hạt giống "${newSeed.name}" thành công!`;

  setTimeout(() => {
    successDiv.classList.add("hidden");
  }, 3000);
};

// Tải danh sách kho cho cập nhật
function loadStockList() {
  const seeds = getSeeds();
  const stockList = document.getElementById("stock-list");

  stockList.innerHTML = seeds
    .map(
      (seed) => `
        <div class="bg-gray-50 border border-gray-200 rounded-xl p-4 flex justify-between items-center hover:bg-gray-100 transition">
            <div class="flex-1">
                <h3 class="text-lg font-bold text-gray-800">${seed.name}</h3>
                <p class="text-sm text-gray-600">
                    ${seed.type} | ${seed.season} | ${seed.supplier}
                </p>
                <p class="text-xs text-gray-500 mt-1">
                    Giá bán: <span class="font-semibold">${seed.sellingPrice.toLocaleString()}đ</span>
                </p>
            </div>
            <div class="flex items-center gap-3">
                <div class="text-center">
                    <p class="text-xs text-gray-600 mb-1">Số lượng hiện tại</p>
                    <input
                        type="number"
                        value="${seed.quantity}"
                        min="0"
                        class="stock-input w-20 px-2 py-2 border border-gray-300 rounded-lg text-center font-bold focus:outline-none focus:ring-2 focus:ring-green-500"
                        data-seed-id="${seed.id}"
                    />
                </div>
            </div>
        </div>
    `,
    )
    .join("");
}

// Lưu thay đổi kho
window.saveStockChanges = function () {
  const seeds = getSeeds();
  const inputs = document.querySelectorAll(".stock-input");

  inputs.forEach((input) => {
    const seedId = parseInt(input.getAttribute("data-seed-id"));
    const newQuantity = parseInt(input.value);

    const seed = seeds.find((s) => s.id === seedId);
    if (seed) {
      seed.quantity = newQuantity;
    }
  });

  saveSeeds(seeds);

  // Hiển thị thông báo thành công
  const successDiv = document.getElementById("stock-success-message");
  successDiv.classList.remove("hidden");
  successDiv.innerText = "✅ Đã cập nhật số lượng kho thành công!";

  setTimeout(() => {
    successDiv.classList.add("hidden");
  }, 3000);
};
