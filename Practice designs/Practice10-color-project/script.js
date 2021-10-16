const color_arr = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
const colorChanger = document.getElementById('ChangeColor_button');

colorChanger.addEventListener('click',function(){
    var colorCode='#'

    for(let i=0;i<6;i++){
        let randomNumber = getRandomNumber();
        colorCode += color_arr[randomNumber];
        }
        console.log(colorCode);

    document.body.style.backgroundColor = colorCode;
});

function getRandomNumber(){
    return Math.floor(Math.random()*color_arr.length);
}