
 

   // 버튼 요소 가져오기
    var scrollToTopBtn = document.getElementById("top");

    // 버튼 클릭 시 상단으로 스크롤 이동
    scrollToTopBtn.addEventListener("click", function() {
      window.scrollTo({top: 0, behavior: "smooth"});
    });

    //메인 이미지
    let imageIndex = 0;
const images = document.querySelectorAll("#image-slider img");

setInterval(() => {
  images[imageIndex].style.display = "none";
  imageIndex = (imageIndex + 1) % images.length;
  images[imageIndex].style.display = "block";
}, 1300);

//스크롤시 밑에서 위로 이미지 올라오는고
window.addEventListener('scroll', function() {
  var image = document.getElementById('color_img');
  var imagePosition = image.getBoundingClientRect().top;
  var screenHeight = window.innerHeight;
  
  if (imagePosition < screenHeight) {
    image.classList.add('show');
  } else {
    image.classList.remove('show');
  }
});

    // 슬라이드쇼 스크립트
    var slideContainer = document.getElementById("icon_slide");
    var slides = slideContainer.getElementsByTagName("img");
    var currentSlide = 0;

    function showSlide() {
      slides[currentSlide].style.opacity = "0"; // 현재 슬라이드 숨김
      currentSlide = (currentSlide + 1) % slides.length;
      slides[currentSlide].style.opacity = "1"; // 다음 슬라이드 표시
    }

    setInterval(showSlide, 1300); // 1.3초마다 슬라이드 변경

    // 페이지 로드 시 첫 번째 슬라이드 표시
    slides[0].style.opacity = "1";





