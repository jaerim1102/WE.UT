// 헤더 요소 선택
var header = document.getElementById("header");
var logo = document.getElementById("logo");
var headerTexts = document.querySelectorAll("#header_text a");

// 스크롤 이벤트 처리
window.addEventListener("scroll", function() {
  // 현재 스크롤 위치 확인
  var scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

  // 백그라운드 색상 변경을 위한 임계값 설정
  var backgroundThresholds = [
    { position: 0, logo: "./img/logo.png", color: "#000228" },
    { position: 2113, logo: "./img/logo2.png", color: "#000228" },
    { position: 14304, logo: "./img/logo.png", color: "#fff" },
    { position: 18009, logo: "./img/logo2.png", color: "#AA11F8" },
    { position: 20583, logo: "./img/logo2.png", color: "#00D6A2" },
    { position: 23186, logo: "./img/logo2.png", color: "#FCAD00" },
    { position: 24632, logo: "./img/logo2.png", color: "#E82B60" },
    { position: 26115, logo: "./img/logo2.png", color: "#524AFA" },
    { position: 28375, logo: "./img/logo2.png", color: "#000228" }
  ];

  // 텍스트 색상 변경을 위한 임계값 설정
  var textThresholds = [
    { position: 0, textColor: "#fff" },
    { position: 2113, textColor: "#fff" },
    { position: 14304, textColor: "black" },
    { position: 18009, textColor: "#fff" },
    { position: 20583, textColor: "#fff" },
    { position: 23186, textColor: "#fff" },
    { position: 24632, textColor: "#fff" },
    { position: 26115, textColor: "#fff" },
    { position: 28375, textColor: "#fff" }
  ];

  // 스크롤 위치에 따라 백그라운드 색상 변경
  for (var i = 0; i < backgroundThresholds.length; i++) {
    var threshold = backgroundThresholds[i];
    if (scrollPosition >= threshold.position) {
      header.style.backgroundColor = threshold.color;
      logo.src = threshold.logo;
    }
  }

  // 스크롤 위치에 따라 텍스트 색상 변경
  for (var i = 0; i < textThresholds.length; i++) {
    var threshold = textThresholds[i];
    if (scrollPosition >= threshold.position) {
      for (var j = 0; j < headerTexts.length; j++) {
        headerTexts[j].style.color = threshold.textColor;
      }
    }
  }
});