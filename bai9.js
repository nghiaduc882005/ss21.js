let a = prompt("Nhập vào số a : ");
let b = prompt("Nhập vào số b : ");
let c = prompt("Nhập vào số c : ");

// Chuyển đổi các chuỗi nhập thành số
a = parseFloat(a);
b = parseFloat(b);
c = parseFloat(c);

let min, med, max;

if (a <= b && a <= c && b <= c){
    min = a;
    med = b;
    max = c;
} else if (b <= a && b <=c && a <= c){
    min = b;
    med = a;
    max = c;
} else if (c <= b && c <= a && b <= a){
    min = c;
    med = b;
    max = a;
} else if (a <= c && a <= b && c <= b){
    min = a;
    med = c;
    max = b;
} else if (b <= c && b <= a && c <= a){
    min = b;
    med = c;
    max = a;
} else {
    min = c;
    med = a;
    max = b;
}

console.log("Thứ tự tăng dần là : " + min + ", " + med + ", " + max);