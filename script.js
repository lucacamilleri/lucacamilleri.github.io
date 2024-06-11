var loaded = localStorage.getItem("loaded");
if (loaded == 0 || loaded == null){
  localStorage.setItem("loaded", 1);
  $(window).on('load', function() {
    setTimeout(function() {
        $('#loading').fadeOut('slow');
    }, 2000);
  });
}else{
  $(window).on('load', function() {
    setTimeout(function() {
        $('#loading').hide(0);
    }, 0);
  });
}

function openModal(type){
  if(type == "discord"){
    $('.toast').toast('show');
  } 
}

function animateBurger(x) {
  x.classList.toggle("change");
}