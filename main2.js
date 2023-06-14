window.addEventListener('scroll', reveal);


function reveal(){
    var reveals =document.querySelectorAll('.reveal');
    //reveal 이라는 변수를 만들어서 찾게 함.

    for(var i = 0; i < reveals.length; i++){

        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 50;

        if(revealtop < windowheight - revealpoint){
            reveals[i].classList.add('active_ani');
        }else{
            reveals[i].classList.remove('active_ani');
        }
    }

}