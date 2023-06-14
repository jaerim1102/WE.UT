window.addEventListener('scroll', function() {
    var logoImg = document.querySelector('.logo_img');
    var logoImgPosition = logoImg.getBoundingClientRect().top;
    var screenHeight = window.innerHeight;
  
    if (logoImgPosition < screenHeight) {
      logoImg.classList.add('scrolled');
    } else {
      logoImg.classList.remove('scrolled');
    }
  });
  