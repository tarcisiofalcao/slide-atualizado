let imgList = ['images/img01.jpg', 'images/img02.jpg', 'images/img03.jpg', 'images/img04.jpg'];
let $slider = document.querySelector('.slider');
let $slidePosition = document.querySelector('.slide--position');
let slideWidth = document.querySelector('.slide_frame').clientWidth;
let slideIndex = 0;


imgList.map((item, index)=>{
   
    let $slideImage = document.createElement('div');
    $slideImage.classList.add('slideImg');
    $slideImage.style.backgroundImage=`url('${item}')`;
    $slider.appendChild($slideImage)

    let $currentImg = document.createElement('div');
    $currentImg.classList.add('current--img');
    if(index == 0){
        $currentImg.classList.add('selected');
    }
    $currentImg.setAttribute('data-key', index);
    $slidePosition.appendChild($currentImg);

    $currentImg.addEventListener('click',(e)=>{
        slideIndex = e.target.getAttribute('data-key');
        updateImg(slideIndex);
    })
})

function updateImg (n){
    $slider.style.marginLeft = `calc(-${slideWidth}px*${n})`;
    let slideItems = document.querySelectorAll('.current--img');
    let slideSelected = document.querySelector('.current--img.selected');
    slideSelected.classList.remove('selected');
    slideItems[n].classList.add('selected');
   
}
function startSlide(){
    slideIndex++;
    if(slideIndex==imgList.length){
        slideIndex = 0;
    }
    updateImg(slideIndex)
}    

setInterval(startSlide, 3000)