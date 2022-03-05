


const imageList = [
    "img/01.jpg",
    "img/02.jpg",
    "img/03.jpg",
    "img/04.jpg",
    "img/05.jpg",
];

const title = [
    'Svezia',
    'Svizzera',
    'Gran Bretagna',
    'Germania',
    'Paradise'
];

const text = [
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    'Lorem ipsum',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
];



const carouselElements = document.getElementsByClassName("carousel");
console.log(carouselElements);
const nextButton = document.getElementById("next");
const previousButton = document.getElementById("previous");

const thumbs = document.getElementsByClassName("thumbnails");

let carouselContent = "";
let thumbsElement = "";





for( let i = 0 ; i < imageList.length; i++ ){
    carouselContent +=`
    <div class="carousel-element text-white my-relative my-d-none">
        <img src="${imageList[i]}" alt="${title[i]}" class="w-100">
        <h2 class="my-absolute">${title[i]}</h2>
        <p class="my-absolute my-bot-zero"> ${text[i]} </p>
    </div>`;
    
    thumbsElement += `
    <div class="thumb">
        <img src="${imageList[i]}" alt="" class="w-100 pointer sleepy">
    </div>`;
    
    document.querySelector("div.carousel").innerHTML = carouselContent;


    document.querySelector("div.thumbnails").innerHTML = thumbsElement;


};

let active = 1;


document.getElementsByClassName("carousel-element")[active].classList.add("active");

document.getElementsByClassName("pointer")[active].classList.add("active-thumb");
document.getElementsByClassName("pointer")[active].classList.remove("sleepy");


previousButton.addEventListener("click" , function(){
    
    document.getElementsByClassName("carousel-element")[active].classList.remove("active");
    document.getElementsByClassName("pointer")[active].classList.remove("active-thumb");
    document.getElementsByClassName("pointer")[active].classList.add("sleepy");
    
    
    if(active == 0){
        active = imageList.length - 1;
    }else{
        active--;
    }

    document.getElementsByClassName("carousel-element")[active].classList.add("active");
    document.getElementsByClassName("pointer")[active].classList.add("active-thumb");
    document.getElementsByClassName("pointer")[active].classList.remove("sleepy");

});

nextButton.addEventListener("click" , function(){
    
    document.getElementsByClassName("carousel-element")[active].classList.remove("active");
    document.getElementsByClassName("pointer")[active].classList.remove("active-thumb");
    document.getElementsByClassName("pointer")[active].classList.add("sleepy");
    
    
    if(active === imageList.length - 1){
        active = 0;
    }else{
        active++;
    }

    document.getElementsByClassName("carousel-element")[active].classList.add("active");
    document.getElementsByClassName("pointer")[active].classList.add("active-thumb");
    document.getElementsByClassName("pointer")[active].classList.remove("sleepy");

});

