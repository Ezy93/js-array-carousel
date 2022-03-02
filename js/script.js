const carouselElements = document.getElementsByClassName("carousel-element");
console.log(carouselElements);



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

let carouselContent = "";

for(  let i = 0; i < imageList.length; i++ ){
    carouselContent +=`
    <div class="carousel-element d-none">
        <img src="${imageList[i]}" alt="lake landscape" class="w-100">
        <h2 class="my-absolute">Lorem</h2>
        <p class="my-absolute my-bot-zero">Lorem ipsum dolor sit amet consectetur, adipisicing elit. </p>
    </div>`
};

