var textArray = [
  "find the right orbi for you >>",
  "limited time offers >>",
  "upgrade to orbi wifi 7 >>",
  "sign up for special offers >>"
];

var linkArray = [
  "#",
  "https://www.youtube.com",
  "https://www.fb.com",
  "https://www.tiktok.com"
];

var currentIndex = 0;

function changeText() {
  var changingText = document.getElementById("changingText");
  changingText.innerHTML = "<a href='" + linkArray[currentIndex] + "' target='_blank'>" + textArray[currentIndex] + "</a>";
  currentIndex = (currentIndex + 1) % textArray.length;
}

setInterval(changeText, 5000);
var next = document.getElementById('header-next');
var prev = document.getElementById('header-prev');

function updateText() {
  var changingText = document.getElementById("changingText");
  changingText.innerHTML = "<a href='" + linkArray[currentIndex] + "' target='_blank'>" + textArray[currentIndex] + "</a>";
}

next.addEventListener('click', function(){
  currentIndex = (currentIndex + 1) % textArray.length;
  updateText();
});

prev.addEventListener('click', function(){
  currentIndex = (currentIndex - 1 + textArray.length) % textArray.length;
  updateText();
})


  var listItem = document.getElementById('li_list');
  var menu = document.getElementById('sub-nav');

  // Bắt sự kiện mouseover để hiển thị menu
  listItem.addEventListener('mouseover', function () {
    menu.style.display = 'block';
  });

  // Bắt sự kiện mouseout để ẩn menu
  listItem.addEventListener('mouseout', function () {
    menu.style.display = 'none';
  });

  var listItem = document.getElementById('sub-nav');
  var menu = document.getElementById('sub-nav');

  // Bắt sự kiện mouseover để hiển thị menu
  listItem.addEventListener('mouseover', function () {
    menu.style.display = 'block';
  });

  // Bắt sự kiện mouseout để ẩn menu
  listItem.addEventListener('mouseout', function () {
    menu.style.display = 'none';
  });




  /*****************/
  var listItem1 = document.getElementById('business-list');
  var menu1 = document.getElementById('business-sub-nav');

  // Bắt sự kiện mouseover để hiển thị menu
  listItem1.addEventListener('mouseover', function () {
    menu1.style.display = 'block';
  });

  // Bắt sự kiện mouseout để ẩn menu
  listItem1.addEventListener('mouseout', function () {
    menu1.style.display = 'none';
  });

  var listItem1 = document.getElementById('business-sub-nav');
  var menu1 = document.getElementById('business-sub-nav');

  // Bắt sự kiện mouseover để hiển thị menu
  listItem1.addEventListener('mouseover', function () {
    menu1.style.display = 'block';
  });

  // Bắt sự kiện mouseout để ẩn menu
  listItem1.addEventListener('mouseout', function () {
    menu1.style.display = 'none';
  });
  



  /*****************/
  var listItem2 = document.getElementById('av-list');
  var menu2 = document.getElementById('AV-sub-nav');

  // Bắt sự kiện mouseover để hiển thị menu
  listItem2.addEventListener('mouseover', function () {
    menu2.style.display = 'block';
  });

  // Bắt sự kiện mouseout để ẩn menu
  listItem2.addEventListener('mouseout', function () {
    menu2.style.display = 'none';
  });

  var listItem2 = document.getElementById('AV-sub-nav');
  var menu2 = document.getElementById('AV-sub-nav');

  // Bắt sự kiện mouseover để hiển thị menu
  listItem2.addEventListener('mouseover', function () {
    menu2.style.display = 'block';
  });

  // Bắt sự kiện mouseout để ẩn menu
  listItem2.addEventListener('mouseout', function () {
    menu2.style.display = 'none';
  });


  /************ */
  var opensearch = document.getElementById('btn-open-search');
  var modalsearch = document.getElementById('box-search-modal');
  var closemodalsearch = document.getElementById('close-box-search-modal');

  opensearch.onclick = function(){
    modalsearch.style.display = "block";
  };

  closemodalsearch.onclick = function(){
    modalsearch.style.display = "none";
  };

  window.onclick = function(event){
    if(event.target == modalsearch){
      modalsearch.style.display = "none";
    }
  };

  var lg = document.getElementById('language');
  var ul_lg = document.getElementById('ul-language');

  lg.addEventListener('mouseover', function(){
      ul_lg.style.display = "block";
  });

  lg.addEventListener('mouseout', function(){
    ul_lg.style.display = "none";
});

var lg = document.getElementById('ul-language');
var ul_lg = document.getElementById('ul-language');

lg.addEventListener('mouseover', function(){
    ul_lg.style.display = 'block';
});

lg.addEventListener('mouseout', function(){
  ul_lg.style.display = 'none';
});

function chuyenTrang(){
  window.location.href = "signin.html";
};

function chuyenTrangcreate(){
  window.location.href = "createAcc.html";
};

function createAccount() {
  var username = document.getElementById("create-email").value;
  var password = document.getElementById("create-pass").value;

  if (username && password) {
      // Kiểm tra xem tài khoản đã tồn tại chưa
      if (localStorage.getItem(username)) {
          alert("Tài khoản đã tồn tại!");
          return false;
      } else {
          // Lưu thông tin tài khoản vào Local Storage
          localStorage.setItem(username, password);
          alert("Tài khoản đã được tạo thành công!");
          chuyenTrang();
          return true;
      }
  } else {
      alert("Vui lòng nhập tên đăng nhập và mật khẩu!");
      return false;
  }
}

// Hàm để đăng nhập
function login() {
  var username = document.getElementById("signin-email").value;
  var password = document.getElementById("signin-pass").value;

  if (username && password) {
      // Kiểm tra xem tài khoản tồn tại và mật khẩu có đúng không
      if (localStorage.getItem(username) === password) {
          alert("Đăng nhập thành công!");
          window.location.href = "main.html";
          return true;
      } else {
          alert("Tên đăng nhập hoặc mật khẩu không đúng!");
          return false;
      }
  } else {
      alert("Vui lòng nhập tên đăng nhập và mật khẩu!");
      return false;
  }
}

// Hàm để hiển thị danh sách các tài khoản đã được lưu vào Local Storage
function displayAccounts() {
  // Lấy danh sách các key trong Local Storage
  var keys = Object.keys(localStorage);

  if (keys.length === 0) {
      console.log("Không có tài khoản nào được lưu.");
  } else {
      console.log("Danh sách các tài khoản:");
      keys.forEach(function(key) {
          console.log("Username: " + key + ", Password: " + localStorage.getItem(key));
      });
  }
}

