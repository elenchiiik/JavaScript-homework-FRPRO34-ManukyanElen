let images = [{
    url: first.png
},{
    url:second.png
},{
    url:third.png
}];

function initSlider(){
 if (!images ||!images.lenth)return;

 let sliderImages = document.querySelector(".header__img");
 let sliderArrows = document.querySelector(".arrows")
 let sliderDots = document.querySelector(".slider_dots")

 initImages();
 initArrows();
 initDots();

 function initImages(){
    images.forEach((image,index)=>{
        let imageDiv = `<div class="image n${index} ${index === 0? "active" : ""}" style="background-image:url(${images[index].url});" data-index="${index}"></div>`;
      sliderImages.innerHTML += imageDiv;
    })
 }
 function initArrows(){
   sliderArrows.querySelectorAll(".arrows").forEach(arrow=>{
    arrow.addEventListener("click", function(){
      let curNumber = sliderImages.querySelector(".active").dataset.index; 
      let nextNumber;
      if(arrow.classList.contains("left")) {
        nextNumber = curNumber === 0? images.length - 1 : curNumber - 1;
      }else{
        nextNumber = curNumber ===  images.length - 1?0 : curNumber + 1;
      }
      moveSlider(nextNumber);
    });
   }); 
 }
 function initDots(){
    images.forEach((image,index)=>{
            let dot = `<div class="slider__dots-item n${index} ${index === 0? "active" : ""}" data-index="${index}"></div>`;
            sliderDots.innerHTML += dot;
          });
          sliderDots.querySelectorAll(".slider__dots-item").forEach(dot => {
            dot.addEventListener("click", function() {
              moveSlider(this.dataset.index);
            })
    })
 }

 function initDots(){
    images.forEach((image,index) =>{
        let dot = `<div class= "slider_dots ${index === 0? "active": ""}"data-index ="${index}"`;
        sliderDots.innerHTML+-dot;
    })
    sliderDots.querySelectorAll(".slider_dots").forEach(dot =>{
        dot.addEventListener("click",function(){
            moveSlider(this.dataset.index);
    sliderDots.querySelector("active").classList.remove("active");
    this.classList.add("active");
    })
    })
 }
 function moveSlider(num){
    sliderImages.querySelector(".active").classList.remove("active");
    sliderImages.querySelector(".n"+ num).classList.add("active");
 }
}

document.addEventListener("DOMContentLoaded",initSlider);