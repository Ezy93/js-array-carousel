


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


/* prendo gli elementi del DOM sui quali eseguiro le operazioni */
const carouselElements = document.getElementsByClassName("carousel");
const nextButton = document.getElementById("next");
const previousButton = document.getElementById("previous");

const thumbs = document.getElementsByClassName("thumbnails");

let carouselContent = "";
let thumbsElement = "";




/* con un ciclo for aggiungo dinamicamente parti al DOM */
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
/* inizializzo una variabile che mi servira da contatore per scegliere quale immagine sara attiva */
let active = 1;

/* rendo gli elementi iniziali attivi */
document.getElementsByClassName("carousel-element")[active].classList.add("active");

document.getElementsByClassName("pointer")[active].classList.add("active-thumb");
document.getElementsByClassName("pointer")[active].classList.remove("sleepy");

/* aggiungo un eventlistener per far si che al click sul bottone previous le immagini scorrano  */
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
/* aggiungo un eventlistener per far si che al click sul bottone next le immagini scorrano  */
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

