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

$(document).ready(function() {
  $('a').click(function(e) {
      e.preventDefault();
      var url = $(this).attr('href');

      $.ajax({
          url: url,
          type: 'GET',
          success: function(data) {
            var newContent = $(data).find('html').length ? $(data).find('html').html() : data;
            document.open();
            document.write(newContent);
            window.history.pushState({page: 'Another page'}, 'Another page', url);
            document.close();
          },
          error: function() {
              console.log('Page load failed.');
          }
      });
  });
});

function testFunction(){
  navigator.clipboard.writeText("lucamalta");
  alert("Copied to clipboard!");
}