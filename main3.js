// #main에 진입할 때 헤더의 로고 이미지 변경하는 함수
function changeLogoOnMainEnter() {
    const main = document.querySelector("#main");
    const logoImage = document.querySelector("#logo");
    let originalLogoSrc; // 원래 로고 이미지의 src를 저장할 변수
  
    // main에 mouseenter 이벤트 리스너 추가
    main.addEventListener("mouseenter", function() {
      originalLogoSrc = logoImage.src; // 원래 로고 이미지의 src 저장
      logoImage.src = "./assets/logo.png"; // 로고 이미지 변경
    });
  
    // main에 mouseleave 이벤트 리스너 추가
    main.addEventListener("mouseleave", function() {
      logoImage.src = originalLogoSrc; // 원래 로고 이미지로 되돌아옴
    });
  }
  
  // #div2에 진입할 때 헤더의 로고 이미지 변경하는 함수
  function changeLogoOnDiv2Enter() {
    const div2 = document.querySelector("#div2");
    const logoImage = document.querySelector("#logo");
    let originalLogoSrc; // 원래 로고 이미지의 src를 저장할 변수
  
    // div2에 mouseenter 이벤트 리스너 추가
    div2.addEventListener("mouseenter", function() {
      originalLogoSrc = logoImage.src; // 원래 로고 이미지의 src 저장
      logoImage.src = "./assets/logo.png"; // 로고 이미지 변경
    });
  
    // div2에 mouseleave 이벤트 리스너 추가
    div2.addEventListener("mouseleave", function() {
      logoImage.src = originalLogoSrc; // 원래 로고 이미지로 되돌아옴
    });
  }

  // 함수 호출
  changeLogoOnMainEnter();
  changeLogoOnDiv2Enter();
  
