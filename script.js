function showSection(id) {
    document.getElementById('home-content').style.display = 'none';
    document.querySelectorAll('.aux-section').forEach(s => {
        s.style.display = 'none';
    });
    
    const target = document.getElementById(id);
    if(target) {
        target.style.display = 'block';
        window.scrollTo(0, 0);
    }
}

function showHome() {
    document.querySelectorAll('.aux-section').forEach(s => {
        s.style.display = 'none';
    });
    document.getElementById('home-content').style.display = 'block';
    window.scrollTo(0, 0);
}

function openLightbox(src) {
    document.getElementById('lightbox-img').src = src;
    document.getElementById('lightbox').style.display = 'flex';
}

function closeLightbox() {
    document.getElementById('lightbox').style.display = 'none';
}

let slideIndex = 0;
function moveSlides() {
    let slides = document.getElementsByClassName("carousel-slide");
    if(slides.length === 0) return;
    for (let i = 0; i < slides.length; i++) { slides[i].style.display = "none"; }
    slideIndex++;
    if (slideIndex > slides.length) slideIndex = 1;
    slides[slideIndex-1].style.display = "block";
    setTimeout(moveSlides, 3000);
}
document.addEventListener('DOMContentLoaded', moveSlides);