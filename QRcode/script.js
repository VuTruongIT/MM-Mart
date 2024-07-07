function generateRandomString(length) {
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var result = '';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

document.getElementById('generate').addEventListener('click', function() {
    var randomText = generateRandomString(10); // Thay số 10 bằng độ dài chuỗi ngẫu nhiên bạn muốn
    var qrcode = new QRCode(document.getElementById("qrcode"), {
        text: randomText,
        width: 128,
        height: 128,
    });
});

