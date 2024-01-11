let number = prompt("Nhập vào một số từ 2 đến 8:");
let day;

if (number == 2) {
  day = "thứ hai";
} else if (number == 3) {
  day = "thứ ba";
} else if (number == 4) {
  day = "thứ 4";
} else if (number == 5) {
  day = "thứ năm";
} else if (number == 6) {
  day = "thứ sáu";
} else if (number == 7) {
  day = "thứ bảy";
} else if (number == 8) {
  day = "chủ nhật";
} else {
  day = "Không hợp lệ";
}

console.log("Hôm nay là : " + day);

  