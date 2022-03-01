const carouselElements = document.getElementsByClassName("carousel-element");
console.log(carouselElements);

const nextButton = document.getElementsByClassName("next");
console.log(nextButton);

const imageList = [
    "img/01.jpg",
    "img/02.jpg",
    "img/03.jpg",
    "img/04.jpg",
    "img/05.jpg",
];

let carouselContent = "";

for(  let i = 0; i < imageList.length; i++ ){
    carouselContent +=`
    <div class="carousel-element d-none">
        <img src="${imageList[i]}" alt="lake landscape" class="w-100">
        <h2 class="my-absolute">Lorem</h2>
        <p class="my-absolute my-bot-zero">Lorem ipsum dolor sit amet consectetur, adipisicing elit. </p>
    </div>`
};

const carouselWrapper = document.querySelector("div.carousel");
carouselWrapper.innerHTML += carouselContent;

carouselElements[0].classList.add("active");
carouselElements[0].classList.remove("d-none")







/* nextButton.addEventListener("click" , function(){
    

}) */