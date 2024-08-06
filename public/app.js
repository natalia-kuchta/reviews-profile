const reviews = [
    {
        id: 1,
        name: 'Natalia Kuchta',
        job: 'frontend developer',
        img: './person-natalia.jpeg',
        text: "As a frontend developer, I am passionate about programming and continuously learning new languages. I enjoy creating websites and designing their interfaces, focusing on delivering user-friendly and visually appealing web experiences.",
    },
    {
        id: 2,
        name: 'anna johnson',
        job: 'web designer',
        img: 'https://www.course-api.com/images/people/person-2.jpeg',
        text: 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
    },
    {
        id: 3,
        name: 'peter jones',
        job: 'intern',
        img: 'https://www.course-api.com/images/people/person-4.jpeg',
        text: 'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
    },
    {
        id: 4,
        name: 'bill anderson',
        job: 'the boss',
        img: 'https://www.course-api.com/images/people/person-3.jpeg',
        text: 'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
    },
];

const img = document.getElementById('person-img');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');

const prevBtn=document.querySelector('.prev-btn');
const nextBtn=document.querySelector('.next-btn');
const randomBtn=document.querySelector('.random-btn');

let currentItem=0;

window.addEventListener('DOMContentLoaded',function (){
    showPerson();
});

function showPerson(){
    const item=reviews[currentItem];
    img.src=item.img;
    author.textContent=item.name;
    job.textContent=item.job;
    info.textContent=item.text;


}

if(!nextBtn) throw new Error('nextBtn not found!');

nextBtn.addEventListener('click',function (){
    currentItem++;
    if(currentItem>reviews.length -1){
        currentItem=0;
    }
    showPerson();
});

if(!prevBtn) throw new Error('prevBtn not found!');

prevBtn.addEventListener('click',function (){
    currentItem--;
    if(currentItem< 0){
        currentItem=reviews.length -1
    }
    showPerson();
});

if(!randomBtn) throw new Error('randomBtn not found!');

randomBtn.addEventListener('click',function (){
    currentItem=Math.floor(Math.random()* reviews.length)
    showPerson()
});