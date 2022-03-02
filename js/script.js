


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

let carouselContent = "";

for(  let i = 0; i < imageList.length; i++ ){
    carouselContent +=`
        <div class="carousel-element text-white my-relative d-none">
            <img src="${imageList[i]}" alt="random pictures" class="w-100">
            <h2 class="my-absolute">${title[i]}</h2>
            <p class="my-absolute my-bot-zero"> ${text[i]} </p>
        </div>`
        
    document.querySelector("div.carousel").innerHTML.append(carouselContent);
};