let a = prompt("Nhập số a:");
let b = prompt("Nhập số b:");
let c = prompt("Nhập số c:");

if (a >= b && a >= c) {
  console.log("Số lớn nhất là " + a);
} else if (b >= a && b >= c) {
  console.log("Số lớn nhất là " + b);
} else {
  console.log("Số lớn nhất là " + c);
}
