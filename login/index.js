// Lấy phần tử form và các input
const form = document.querySelector("form");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");

// Lắng nghe sự kiện khi người dùng bấm nút "Sign In"
form.addEventListener("submit", function (event) {
  event.preventDefault(); // Ngăn load lại trang

  // Lấy dữ liệu người dùng nhập
  const username = usernameInput.value.trim();
  const password = passwordInput.value.trim();

  // Kiểm tra xem người dùng có nhập đủ chưa
  if (username === "" || password === "") {
    alert("Vui lòng nhập đầy đủ thông tin!");
    return;
  }

  // Kiểm tra tài khoản (login giả lập)
  if (username === "admin" && password === "1234") {
    alert("Đăng nhập thành công!");
    
    // ⚡ Chuyển sang trang homepage.html sau 1 giây
    setTimeout(() => {
      window.location.href = "../Homepage/homepage.html";
    }, 1000);
    
  } else {
    alert("Sai tên đăng nhập hoặc mật khẩu!");
  }
});