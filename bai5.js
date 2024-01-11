// Yêu cầu người dùng nhập số tháng trong năm
var month = prompt("Nhập số tháng trong năm (từ 1 đến 12):");

// Sử dụng lệnh if else để xác định số ngày trong tháng
if (month === "1" || month === "3" || month === "5" || month === "7" || month === "8" || month === "10" || month === "12") {
  console.log("Tháng " + month + " có 31 ngày.");
} else if (month === "4" || month === "6" || month === "9" || month === "11") {
  console.log("Tháng " + month + " có 30 ngày.");
} else if (month === "2") {
  console.log("Tháng 2 có 28 hoặc 29 ngày.");
} else {
  console.log("Số tháng không hợp lệ. Vui lòng nhập lại từ 1 đến 12.");
}
