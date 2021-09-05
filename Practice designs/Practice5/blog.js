function readMore(){
    var dots = document.getElementById('dots');
    var moreText = document.getElementById('more');
    var btnText = document.getElementById('mybtn');


    if(dots.style.display == "none"){
        dots.style.disply = "inline";
        btnText.innerHTML = "Read More";
        moreText.style.display = "none";
    }
    else{
        dots.style.display = "none";
        btnText.innerHTML = "Read Less";
        moreText.style.display = "inline";
    }
}

