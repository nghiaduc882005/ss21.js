let weight = parseFloat(prompt("Nhập cân nặng của bạn (kg):"));
let height = parseFloat(prompt("Nhập chiều cao của bạn (m):"));

let bmi = weight / (height * height);

if (bmi < 18.5) {
  console.log("Cân nặng thấp (gầy)");
} else if (bmi >= 18.5 && bmi < 24.9) {
  console.log("Bình thường");
} else if (bmi >= 25 && bmi < 29.9) {
  console.log("Tiền béo phì");
} else if (bmi >= 30 && bmi < 34.9) {
  console.log("Béo phì độ I");
} else if (bim >= 35 && bmi < 39.9) {
    console.log("Béo phì độ II");
} else {
    console.log("Béo phì độ III");
}
