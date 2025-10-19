document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("reset-form");
  const emailInput = document.getElementById("email");
  const resetButton = document.querySelector(".reset-button");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const email = emailInput.value.trim();

    if (!validateEmail(email)) {
      showToast("❌ Email không hợp lệ. Vui lòng nhập đúng định dạng.", "error");
      return;
    }

   
    resetButton.disabled = true;
    resetButton.textContent = "Sending...";

    setTimeout(() => {
      showToast("✅ Email đã được gửi. Vui lòng kiểm tra hộp thư của bạn.", "success");
      resetButton.disabled = false;
      resetButton.textContent = "Send Reset Link";
      form.reset();
    }, 2000);
  });

  function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }

  function showToast(message, type) {
    const toast = document.getElementById("toast");
    toast.textContent = message;
    toast.style.backgroundColor = type === "success" ? "#4CAF50" : "#f44336";
    toast.className = "toast show";
    setTimeout(() => {
      toast.className = "toast";
    }, 3000);
  }
});
