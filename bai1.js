var a = prompt("Bạn sinh năm bao nhiêu: ");

if (isNaN(a) || !isFinite(a)) {
    console.log("Invalid");
} else {
    let d = new Date();
    let age = d.getFullYear() - parseInt(a);
    console.log("Số tuổi của bạn là: " + age);
}