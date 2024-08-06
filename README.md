create package.json


```bash
npm init -y
```
start up
```
npm run dev
```

# Reviews Profile Project

The Reviews Profile project is a simple web application that displays user reviews with a user-friendly interface. 
Users can navigate through different reviews using the "previous" and "next" buttons or get a random review by clicking the "surprise me" button.
The project includes HTML, CSS, and JavaScript files.

> Table of Contents

 
[Getting Started](#getting-started)

[Project Structure](#project-structure)

[Usage](#usage)




## Getting Started

 
To get a local copy of the project up and running on your machine, follow these steps:

Clone the repository:


`git clone https://github.com/your-username/reviews-profile.git`

Navigate to the project directory:

`cd reviews-profile`

Open index.html in your browser.


 ## Project Structure

The project consists of the following files:

```
index.html: The main HTML file containing the structure of the review profile page.

styles.css: The CSS file that styles the review profile page.

app.js: The JavaScript file that handles the functionality of the review profile page.
```

index.html




```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Review Project</title>
    <link rel="stylesheet" href="./styles.css">
    <link rel="stylesheet"  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css">
</head>
<body>
<main>
    <section class="container">
        <div class="title">
            <h2>our reviews</h2>
            <div class="underline"></div>
        </div>
        <article class="review">

            <div class="img-container">
                <img src="./person-natalia.jpeg" id="person-img" alt="">

            </div>
            <h4 id="author">natalia kuchta</h4>
            <p id="job">frontend developer</p>
            <p id="info">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate
                velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <div class="button-container">
                <button class="prev-btn">
                    <i class="fas fa-chevron-left"></i>
                </button>
                <button class="next-btn">
                    <i class="fas fa-chevron-right"></i>
                </button>
            </div>
            <button class="random-btn">suprise me</button>
        </article>
    </section>
</main>
<h1>Review Project</h1>
<script src="app.js"></script>
</body>
</html>
```


app.js

```js
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



nextBtn.addEventListener('click',function (){
    currentItem++;
    if(currentItem>reviews.length -1){
        currentItem=0;
    }
    showPerson();
});



prevBtn.addEventListener('click',function (){
    currentItem--;
    if(currentItem< 0){
        currentItem=reviews.length -1
    }
    showPerson();
});



randomBtn.addEventListener('click',function (){
    currentItem=Math.floor(Math.random()* reviews.length)
    showPerson()
});
```

## Usage

```
Open index.html in your browser to see the Reviews Profile page.

Navigate through the reviews using the "previous" and "next" buttons.

Click the "surprise me" button to display a random review.
```

 ## ![Screenshot from 2024-08-06 15-55-30](https://github.com/user-attachments/assets/5e6f9f34-c3c2-4122-8cd8-b7fa1909818b)
