document.addEventListener('DOMContentLoaded', function() {
  var header = document.getElementById('header');
  var links = header.getElementsByTagName('a');

  for (var i = 0; i < links.length; i++) {
    links[i].addEventListener('click', scrollToSection);
  }

  function scrollToSection(e) {
    e.preventDefault();
    var targetId = this.getAttribute('href');
    var targetElement = document.querySelector(targetId);
    var targetPosition = targetElement.offsetTop;

    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });
  }
});
