let toilets = [
  {
    id: 1,
    name: "Nhà vệ sinh Hồ Gươm",
    address: "Phố Lê Thái Tổ, Hoàn Kiếm, Hà Nội",
    priceUrination: 3000,
    priceDefecation: 5000,
    status: "Hoạt động",
    openingHours: "24/7",
    cleanliness: 4,
    toiletPaperRolls: 5,
    hasHandWash: true,
    description: "Gần hồ Hoàn Kiếm, khá sạch, đông khách du lịch",
    imageUrl: "toilet_01.jpg",
  },
  {
    id: 2,
    name: "Nhà vệ sinh Công viên Thống Nhất",
    address: "Trần Nhân Tông, Hai Bà Trưng, Hà Nội",
    priceUrination: 2000,
    priceDefecation: 4000,
    status: "Đang sửa",
    openingHours: "05:00 - 22:00",
    cleanliness: 3,
    toiletPaperRolls: 3,
    hasHandWash: true,
    description: "Trong công viên, buổi sáng đông người tập thể dục",
    imageUrl: "toilet_02.jpg",
  },
  {
    id: 3,
    name: "Nhà vệ sinh Bến xe Mỹ Đình",
    address: "20 Phạm Hùng, Nam Từ Liêm, Hà Nội",
    priceUrination: 3000,
    priceDefecation: 6000,
    status: "Đang v",
    openingHours: "24/7",
    cleanliness: 3,
    toiletPaperRolls: 1,
    hasHandWash: true,
    description: "Khu vực bến xe, lượng người sử dụng nhiều",
    imageUrl: "toilet_03.jpg",
  },
  {
    name: "Nhà vệ sinh Công viên Cầu Giấy",
    address: "165 Cầu Giấy",
    priceUrination: 2000,
    priceDefecation: 5000,
    cleanliness: "4",
    toiletPaperRolls: "6",
    status: "Hoạt động",
    openingHours: "05:00 - 21:30",
    description: "Nhà vệ sinh mới, khá sạch",
    imageUrl: "toilet_04.jpg",
    id: 4,
  },
  {
    id: 5,
    name: "Nhà vệ sinh Chợ Đồng Xuân",
    address: "Đồng Xuân, Hoàn Kiếm, Hà Nội",
    priceUrination: 3000,
    priceDefecation: 5000,
    status: "Hoạt động",
    openingHours: "06:00 - 18:00",
    cleanliness: 3,
    toiletPaperRolls: 0,
    hasHandWash: true,
    description: "Khu chợ đông đúc, cơ sở vật chất trung bình",
    imageUrl: "toilet_05.jpg",
  },
  {
    id: 6,
    name: "Nhà vệ sinh Royal City",
    address: "72 Nguyễn Trãi, Thanh Xuân, Hà Nội",
    priceUrination: 0,
    priceDefecation: 0,
    status: "Hoạt động",
    openingHours: "08:00 - 22:00",
    cleanliness: 5,
    toiletPaperRolls: 8,
    hasHandWash: true,
    description: "Trong trung tâm thương mại, miễn phí và rất sạch",
    imageUrl: "toilet_06.jpg",
  },
  {
    id: 7,
    name: "Nhà vệ sinh Công viên Hòa Bình",
    address: "Phạm Văn Đồng, Bắc Từ Liêm, Hà Nội",
    priceUrination: 2000,
    priceDefecation: 4000,
    status: "Hoạt động",
    openingHours: "05:30 - 22:00",
    cleanliness: 4,
    toiletPaperRolls: 2,
    hasHandWash: false,
    description: "Khu công viên rộng, thoáng",
    imageUrl: "toilet_07.jpg",
  },
  {
    id: 8,
    name: "Nhà vệ sinh Ga Hà Nội",
    address: "120 Lê Duẩn, Đống Đa, Hà Nội",
    priceUrination: 3000,
    priceDefecation: 5000,
    status: "Hoạt động",
    openingHours: "04:30 - 23:00",
    cleanliness: 3,
    toiletPaperRolls: 4,
    hasHandWash: true,
    description: "Phục vụ hành khách đi tàu",
    imageUrl: "toilet_08.jpg",
  },
  {
    name: "Nhà vệ sinh AEON Mall Long Biên",
    address: "199 Nguyễn Văn Linh, Long Biên, Hà Nội",
    priceUrination: 0,
    priceDefecation: 0,
    cleanliness: "5",
    toiletPaperRolls: "0",
    status: "Hoạt động",
    openingHours: "19:00 - 22:30",
    description: "Chú ý không có giấy, chỉ có tăm nước",
    imageUrl: "toilet_09.jpg",
    id: 9,
  },
  {
    id: 10,
    name: "Nhà vệ sinh Công viên Yên Sở",
    address: "Quốc lộ 1A, Hoàng Mai, Hà Nội",
    priceUrination: 2000,
    priceDefecation: 4000,
    status: "Hoạt động",
    openingHours: "05:00 - 21:00",
    cleanliness: 4,
    toiletPaperRolls: 3,
    hasHandWash: true,
    description: "Trong công viên lớn, không gian thoáng",
    imageUrl: "toilet_10.png",
  },
];
console.log(toilets);
let newId = (toilets) => {
  if (toilets.length === 0) {
    return 1;
  } else {
    let max = toilets[0].id;
    toilets.forEach((t) => {
      if (t.id > max) {
        max = t.id;
      }
    });
    return max + 1;
  }
};
let flag = true;
// Mở modal khi click
let openModal = (flag, index) => {
  document.getElementById("modal").style.display = "block";
  if (flag) {
    document.getElementById(`lbl-title`).innerHTML = `➕ Thêm nhà vệ sinh`;
  } else {
    document.getElementById(`lbl-title`).innerHTML =
      `😶‍🌫️ Sửa thông tin ${toilets[index].name}`;
  }
};
let btnOpenModalAdd = document.getElementById(`btn-add`);

btnOpenModalAdd.addEventListener("click", () => openModal(true));
let closeModal = () => {
  document.getElementById("modal").style.display = "none";
};
let btnCloseModal = document.getElementById(`btn-close-modal`);
let btnCancel = document.getElementById(`btn-cancel`);
btnCloseModal.addEventListener("click", closeModal);
btnCancel.addEventListener("click", closeModal);

let render = (toilets) => {
  let toiletUI = document.getElementById(`toilets-list`);
  // console.log(toiletUI);
  toilets.forEach((toilet, index) => {
    let toiletHTML = document.createElement("div");
    toiletHTML.innerHTML = `<div
          class="bg-white rounded-xl shadow hover:shadow-xl transition overflow-hidden relative" id="toilet-${toilet.id}"
        >
              ${
                toilet.status === "Hoạt động"
                  ? `<span class="bg-green-100 text-green-600 px-3 py-1 rounded text-sm absolute right-1 top-1">
                Hoạt động
              </span>`
                  : ""
              }
              ${
                toilet.status === "Đang sửa"
                  ? `<span class="bg-yellow-100 text-orange-600 px-3 py-1 rounded text-sm absolute right-1 top-1">
                Đang sửa
              </span>`
                  : ""
              }
              ${
                toilet.status === "Đang vệ sinh"
                  ? `<span class="bg-[red] text-white px-3 py-1 rounded text-sm absolute right-1 top-1">
                Đang vệ sinh
              </span>`
                  : ""
              }
          <img src="./images/${toilet.imageUrl}" class="w-full h-48 object-cover" />
              
          <div class="p-5">
            <div class="flex justify-between mb-3">
              <h3 class="font-bold text-lg">${toilet.name}</h3>
            </div>
              
            <p class="text-gray-500 text-sm mb-3">${toilet.address}</p>

            <div class="text-sm space-y-1">
              <p>
                💦 Đi nhẹ:
                <b>${toilet.priceUrination.toLocaleString()} VNĐ</b>
              </p>

              <p>
                💩 Đi nặng:
                <b>${toilet.priceDefecation.toLocaleString()} VNĐ</b>
              </p>

              <p>
                🧻 Giấy:
                ${toilet.toiletPaperRolls > 0 ? `<b class="${toilet.toiletPaperRolls >= 3 ? "text-[green]" : "text-[red]"}">${toilet.toiletPaperRolls} Cuộn </b>` : `Hết`}
              </p>

              <p>
                ⭐ Sạch:
                <b>8/10</b>
              </p>

              <p>🕐 24/7</p>
            </div>

            <p class="text-gray-600 text-sm mt-3">${toilet.description}</p>

            <div class="flex gap-2 mt-5">
              <button
                class="bg-yellow-400 hover:bg-yellow-500 text-white w-full py-2 rounded" onclick='openModal(false,${index})'
              >
                ✏️ Sửa
              </button>

              <button
                class="bg-red-500 hover:bg-red-600 text-white w-full py-2 rounded"
              >
                🗑 Xóa
              </button>
            </div>
          </div>
        </div>`;
    toiletUI.appendChild(toiletHTML);
  });
};
render(toilets);
let btnSave = document.getElementById(`btn-save`);
let addToilet = () => {
  let name = document.getElementById(`input-name`).value;
  let address = document.getElementById(`input-address`).value;
  let priceUrination = +document.getElementById(`input-urination`).value;
  let priceDefecation = +document.getElementById(`input-defecation`).value;
  let status = document.getElementById(`input-status`).value;
  let openingHours = document.getElementById(`input-openHour`).value;
  let cleanliness = document.getElementById(`input-cleanliness`).value || 0;
  let imageUrl = document.getElementById(`input-image`).files[0].name;
  let description = document.getElementById(`input-description`);

  let newToilet = {
    id: newId(toilets),
    name,
    address,
    priceUrination,
    priceDefecation,
    status,
    openingHours,
    cleanliness,
    imageUrl,
    description,
  };
  toilets.push(newToilet);
  alert(`Thêm thành công`);
  document.getElementById(`input-name`).innerHTML = "";
  document.getElementById(`input-address`).innerHTML = "";
  document.getElementById(`input-urination`).innerHTML = "";
  document.getElementById(`input-defecation`).innerHTML = "";
  document.getElementById(`input-status`).innerHTML = "";
  document.getElementById(`input-openHour`).innerHTML = "";
  document.getElementById(`input-cleanliness`).innerHTML = "";
  document.getElementById(`input-image`).value = "";
  document.getElementById(`input-description`).value = "";
};

btnSave.addEventListener(`click`, addToilet);
