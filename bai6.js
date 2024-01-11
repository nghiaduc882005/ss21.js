function tinhDiemTrungBinh(toan, van, anh) {
    var diemTrungBinh = (toan + van + anh) / 3;
    return diemTrungBinh;
  }
  
  function xepLoai(diemTrungBinh) {
    if (diemTrungBinh >= 8.0 && diemTrungBinh <= 10) {
      return "Xếp loại: GIỎI";
    } else if (diemTrungBinh >= 6.5 && diemTrungBinh <= 7.9) {
        return "Xếp loại: KHÁ";
    } else if (diemTrungBinh >= 5.0 && diemTrungBinh <= 6.4) {
        return "Xếp loại: TRUNG BÌNH";
    } else {
        return "Xếp loại: YẾU";
    }
  }
  
  var toan = parseFloat(prompt("Nhập điểm môn Toán:"));
  var van = parseFloat(prompt("Nhập điểm môn Văn:"));
  var anh = parseFloat(prompt("Nhập điểm môn Anh:"));
  
  var diemTB = tinhDiemTrungBinh(toan, van, anh);
  var xepLoaiDiem = xepLoai(diemTB);
  
  console.log("Điểm trung bình: " + diemTB.toFixed(2));
  console.log(xepLoaiDiem);
  