var listItem = document.getElementById('li_list-shop');
  var menu = document.getElementById('sub-nav-shop');

  // Bắt sự kiện mouseover để hiển thị menu
  listItem.addEventListener('mouseover', function () {
    menu.style.display = 'block';
  });

  // Bắt sự kiện mouseout để ẩn menu
  listItem.addEventListener('mouseout', function () {
    menu.style.display = 'none';
  });

  var listItem = document.getElementById('sub-nav-shop');
  var menu = document.getElementById('sub-nav-shop');

  // Bắt sự kiện mouseover để hiển thị menu
  listItem.addEventListener('mouseover', function () {
    menu.style.display = 'block';
  });

  // Bắt sự kiện mouseout để ẩn menu
  listItem.addEventListener('mouseout', function () {
    menu.style.display = 'none';
  });




  /*****************/
  var listItem1 = document.getElementById('business-list-shop');
  var menu1 = document.getElementById('business-sub-nav-shop');

  // Bắt sự kiện mouseover để hiển thị menu
  listItem1.addEventListener('mouseover', function () {
    menu1.style.display = 'block';
  });

  // Bắt sự kiện mouseout để ẩn menu
  listItem1.addEventListener('mouseout', function () {
    menu1.style.display = 'none';
  });

  var listItem1 = document.getElementById('business-sub-nav-shop');
  var menu1 = document.getElementById('business-sub-nav-shop');

  // Bắt sự kiện mouseover để hiển thị menu
  listItem1.addEventListener('mouseover', function () {
    menu1.style.display = 'block';
  });

  // Bắt sự kiện mouseout để ẩn menu
  listItem1.addEventListener('mouseout', function () {
    menu1.style.display = 'none';
  });
  



  /*****************/
  var listItem2 = document.getElementById('av-list-shop');
  var menu2 = document.getElementById('AV-sub-nav-shop');

  // Bắt sự kiện mouseover để hiển thị menu
  listItem2.addEventListener('mouseover', function () {
    menu2.style.display = 'block';
  });

  // Bắt sự kiện mouseout để ẩn menu
  listItem2.addEventListener('mouseout', function () {
    menu2.style.display = 'none';
  });

  var listItem2 = document.getElementById('AV-sub-nav-shop');
  var menu2 = document.getElementById('AV-sub-nav-shop');

  // Bắt sự kiện mouseover để hiển thị menu
  listItem2.addEventListener('mouseover', function () {
    menu2.style.display = 'block';
  });

  // Bắt sự kiện mouseout để ẩn menu
  listItem2.addEventListener('mouseout', function () {
    menu2.style.display = 'none';
  });

  document.getElementById('next').onclick = function(){
    let lists = document.querySelectorAll('.item');
    document.getElementById('slide').appendChild(lists[0]);
  }

  document.getElementById('prev').onclick = function(){
    let lists = document.querySelectorAll('.item');
    document.getElementById('slide').prepend(lists[lists.length - 1]);
  }

  document.getElementById('next1').onclick = function(){
    let lists = document.querySelectorAll('.item1');
    document.getElementById('slide1').appendChild(lists[0]);
  }

  document.getElementById('prev1').onclick = function(){
    let lists = document.querySelectorAll('.item1');
    document.getElementById('slide1').prepend(lists[lists.length - 1]);
  }

  /************ */
  var opensearch1 = document.getElementById('btn-open-search_shopoffers');
  var modalsearch1 = document.getElementById('box-search-modal_shop');
  var closemodalsearch1 = document.getElementById('close-box-search-modal_shop');

  opensearch1.onclick = function(){
    modalsearch1.style.display = "block";
  };

  closemodalsearch1.onclick = function(){
    modalsearch1.style.display = "none";
  };

  window.onclick = function(event){
    if(event.target == modalsearch1){
      modalsearch1.style.display = "none";
    }
  };

function chuyenTrang(){
  window.location.href = "signin.html";
};

function chuyenTrangcreate(){
  window.location.href = "createAcc.html";
};

