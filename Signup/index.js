document.querySelector('.Create-button').addEventListener('click', function (e) {
    e.preventDefault();

    const firstname = document.getElementById('firstname').value.trim();
    const lastname = document.getElementById('Lastname').value.trim();
    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmpassword').value;

    if (!firstname || !lastname || !username || !email || !password || !confirmPassword) {
        alert('Vui lòng điền đầy đủ thông tin!');
        return;
    }

    if (password !== confirmPassword) {
        alert('Mật khẩu xác nhận không khớp!');
        return;
    }

    
    const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
    existingUsers.push({ firstname, lastname, username, email, password });
    localStorage.setItem('users', JSON.stringify(existingUsers));

    alert('Đăng ký thành công!');

   
    window.location.href = "../login/index.html";
});
