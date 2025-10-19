document.addEventListener("DOMContentLoaded", function () {
    const checkoutBtn = document.querySelector(".checkout-btn");

    checkoutBtn.addEventListener("click", function () {
        const country = document.getElementById("country").value;
        const state = document.getElementById("state").value.trim();
        const paymentMethod = document.querySelector("input[name='payment']:checked").id;

        let cardName = "", cardNumber = "", expiry = "", cvc = "";
        if (paymentMethod === "card") {
            cardName = document.getElementById("card-name").value.trim();
            cardNumber = document.getElementById("card-number").value.trim();
            expiry = document.getElementById("expiry").value.trim();
            cvc = document.getElementById("cvc").value.trim();
        }

        const total = document.querySelector(".total span").innerText;

        let result = `
        Thanh toán thành công!
        ----------------------------
        Quốc gia: ${country}
        State: ${state}
        Phương thức: ${paymentMethod === "card" ? "Credit/Debit Card" : "PayPal"}
        Tổng tiền: ${total}
        `;

        if (paymentMethod === "card") {
            result += `
            ----------------------------
            Chủ thẻ: ${cardName}
            Số thẻ: ${cardNumber}
            Hết hạn: ${expiry}
            CVC: ${cvc}
            `;
        }

        alert(result);
    });
});
