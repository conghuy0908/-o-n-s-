function Play() {
    let b = Math.round(Math.random() * 100);
    for (let i = 0; i < 3; i++) {
        let a = +prompt("Nhập lại số bạn chọn lần thứ : " + " " + i);
        if (a == b) {
            alert("You're Win");
            break;
        } else if (a != b) {

            if (a < b) {
                alert("Số cần tìm lớn hơn, vui lòng nhập lại" + " " + i);

            } else {
                alert("Số cần tìm nhỏ hơn,vui lòng nhập lại" + " " + i);

            }
        }





    }
}
