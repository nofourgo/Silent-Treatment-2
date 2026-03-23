const toilets = [
  {
    id: 1,
    name: "Nhà vệ sinh Hồ Gươm",
    address: "Phố Lê Thái Tổ, Hoàn Kiếm, Hà Nội",
    district: "Hoàn Kiếm",
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
    district: "Hai Bà Trưng",
    priceUrination: 2000,
    priceDefecation: 4000,
    status: "Hoạt động",
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
    district: "Nam Từ Liêm",
    priceUrination: 3000,
    priceDefecation: 6000,
    status: "Hoạt động",
    openingHours: "24/7",
    cleanliness: 3,
    toiletPaperRolls: 1,
    hasHandWash: true,
    description: "Khu vực bến xe, lượng người sử dụng nhiều",
    imageUrl: "toilet_03.jpg",
  },
  {
    id: 4,
    name: "Nhà vệ sinh Công viên Cầu Giấy",
    address: "Duy Tân, Cầu Giấy, Hà Nội",
    district: "Cầu Giấy",
    priceUrination: 2000,
    priceDefecation: 5000,
    status: "Đang vệ sinh",
    openingHours: "05:00 - 21:30",
    cleanliness: 4,
    toiletPaperRolls: 6,
    hasHandWash: true,
    description: "Nhà vệ sinh mới, khá sạch",
    imageUrl: "toilet_04.jpg",
  },
  {
    id: 5,
    name: "Nhà vệ sinh Chợ Đồng Xuân",
    address: "Đồng Xuân, Hoàn Kiếm, Hà Nội",
    district: "Hoàn Kiếm",
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
    district: "Thanh Xuân",
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
    district: "Bắc Từ Liêm",
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
    district: "Đống Đa",
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
    id: 9,
    name: "Nhà vệ sinh AEON Mall Long Biên",
    address: "27 Cổ Linh, Long Biên, Hà Nội",
    district: "Long Biên",
    priceUrination: 0,
    priceDefecation: 0,
    status: "Hoạt động",
    openingHours: "09:00 - 22:00",
    cleanliness: 5,
    toiletPaperRolls: 10,
    hasHandWash: true,
    description: "Miễn phí, hiện đại, rất sạch",
    imageUrl: "toilet_09.jpg",
  },
  {
    id: 10,
    name: "Nhà vệ sinh Công viên Yên Sở",
    address: "Quốc lộ 1A, Hoàng Mai, Hà Nội",
    district: "Hoàng Mai",
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

let selectedId = null;

function statusBadge(status) {
  if (status === "Hoạt động") {
    return `
<span class="bg-green-100 text-green-700 px-2 py-1 rounded-lg text-sm">
Hoạt động
</span>
`;
  }

  return `
<span class="bg-yellow-100 text-yellow-700 px-2 py-1 rounded-lg text-sm">
Đang vệ sinh
</span>
`;
}

function paperBadge(num) {
  if (num == 0) {
    return `
<span class="text-red-500 font-semibold">
Hết
</span>
`;
  }

  if (num < 2) {
    return `
<span class="text-yellow-500 font-semibold">
Sắp hết (${num})
</span>
`;
  }

  return `
<span>
${num}
</span>
`;
}

function render(data = toilets) {
  let html = "";

  data.forEach((t) => {
    html += `

<div class="bg-white rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden">

<img 
src="images/${t.imageUrl}" 
class="w-full h-40 object-cover"
onerror="this.src='images/default.jpg'"
>

<div class="p-5">

<div class="flex justify-between items-start mb-3">

<h3 class="font-semibold text-lg">
${t.name}
</h3>

${statusBadge(t.status)}

</div>

<p class="text-slate-500 text-sm mb-2">
📍 ${t.district}
</p>

<p class="text-sm mb-2">
🚽 ${t.priceUrination} |
💩 ${t.priceDefecation}
</p>

<p class="text-sm mb-2">
⭐ ${t.cleanliness}
</p>

<p class="text-sm mb-3">
🧻 ${paperBadge(t.toiletPaperRolls)}
</p>

<p class="text-xs text-slate-500 mb-4">
${t.description}
</p>

<div class="flex gap-2">

<button onclick="selectToilet(${t.id})"
class="flex-1 bg-amber-100 hover:bg-amber-200 text-amber-700 py-1.5 rounded-lg text-sm font-medium">

✏️ Edit

</button>

<button onclick="deleteToilet(${t.id})"
class="flex-1 bg-red-100 hover:bg-red-200 text-red-700 py-1.5 rounded-lg text-sm font-medium">

🗑 Delete

</button>

</div>

</div>

</div>

`;
  });

  document.getElementById("cardContainer").innerHTML = html;
}

function addToilet() {
  // Nếu đang sửa toilet, gọi updateToilet thay vì thêm mới
  if (selectedId !== null) {
    updateToilet();
    return;
  }

  let toilet = {
    id: Date.now(),

    name: toiletName.value,

    address: "Chưa cập nhật",

    district: district.value,

    priceUrination: priceUrination.value,

    priceDefecation: priceDefecation.value,

    cleanliness: cleanliness.value,

    toiletPaperRolls: paper.value,

    status: status.value,

    openingHours: openingHours.value,

    description: description.value,

    imageUrl: image.value,

    hasHandWash: true,
  };

  toilets.push(toilet);

  render();

  clearForm();
}

function deleteToilet(id) {
  toilets = toilets.filter((t) => t.id !== id);

  render();
}

function selectToilet(id) {
  let t = toilets.find((t) => t.id === id);

  selectedId = id;

  toiletName.value = t.name;

  district.value = t.district;

  priceUrination.value = t.priceUrination;

  priceDefecation.value = t.priceDefecation;

  cleanliness.value = t.cleanliness;

  paper.value = t.toiletPaperRolls;

  status.value = t.status;

  openingHours.value = t.openingHours;

  description.value = t.description;

  image.value = t.imageUrl;
}

function updateToilet() {
  let t = toilets.find((t) => t.id === selectedId);

  if (!t) return;

  t.name = toiletName.value;

  t.district = district.value;

  t.priceUrination = priceUrination.value;

  t.priceDefecation = priceDefecation.value;

  t.cleanliness = cleanliness.value;

  t.toiletPaperRolls = paper.value;

  t.status = status.value;

  t.openingHours = openingHours.value;

  t.description = description.value;

  t.imageUrl = image.value;

  render();

  clearForm();
}

function searchToilet() {
  let keyword = search.value.toLowerCase();

  let filtered = toilets.filter((t) => t.name.toLowerCase().includes(keyword));

  render(filtered);
}

function clearForm() {
  document.querySelectorAll("input, textarea").forEach((el) => (el.value = ""));

  selectedId = null;
}

render();
