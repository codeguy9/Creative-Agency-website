const slides = [
    {
        id: 1,
        title: 'Brand naming & guidelines',
        image: 'assets/desktop/image-slide-1.jpg',
        projectTitle: 'Lean Product Roadmap',
        year: '2019 project'
    },
    {
        id: 2,
        title: 'Brand identity & merchandise',
        image: 'assets/desktop/image-slide-2.jpg',
        projectTitle: 'New Majestic Hotel',
        year: '2018 Project'
    },
    {
        id: 3,
        title: 'Brand identity & web design',
        image: 'assets/desktop/image-slide-3.jpg',
        projectTitle: 'Crypto Dashboard',
        year: '2016 Project'
    }
]

// select items

const title = document.querySelector('.slide-title');
const img = document.getElementById('slide-img');
const projectTitle = document.querySelector('.project-title');
const year = document.querySelector('.year');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

currentItem = 0;

const showSlide = () => {
    const item = slides[currentItem];
    img.src = item.image;
    title.textContent = item.title;
    projectTitle.textContent = item.projectTitle;
    year.textContent = item.year;
}

window.addEventListener('DOMContentLoaded', () => {
    showSlide(currentItem);
})

prevBtn.addEventListener('click', () => {
    currentItem--;
    if(currentItem < 0) {
        currentItem = slides.length - 1;
    }
    showSlide();
})

nextBtn.addEventListener('click', () => {
    currentItem++;
    if(currentItem > slides.length - 1) {
        currentItem = 0;
    }
    showSlide();
})