
const form = document.querySelector("form");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");


form.addEventListener("submit", function (event) {
  event.preventDefault(); 


  const username = usernameInput.value.trim();
  const password = passwordInput.value.trim();

 
  if (username === "" || password === "") {
    alert("Vui lòng nhập đầy đủ thông tin!");
    return;
  }


  if (username === "hoa1710" && password === "1234") {
    alert("Đăng nhập thành công!");
    
    
    setTimeout(() => {
      window.location.href = "../Homepage/index.html";
    }, 1000);
    
  } else {
    alert("Sai tên đăng nhập hoặc mật khẩu!");
  }
});