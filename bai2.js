var a;

// Lấy giá trị từ người dùng
a = prompt("Nhập vào số a", );

// Chuyển sang kiểu number
a = parseInt(a);

// Kiểm tra số chẵn và lẽ
if (!isNaN(a)) {
    if (a % 2 == 0) {
        document.write("a là số chẵn");
    } else {
        document.write("a là số lẻ");
    }
} else {
    document.write("Không hợp lệ");
}
