const filterBar = document.getElementById('filters');
const scrollLeft = document.getElementById('scroll-left');
const scrollRight = document.getElementById('scroll-right');

scrollLeft.addEventListener('click', () => {
    filterBar.scrollBy({ left: -200, behavior: 'smooth' });
});

scrollRight.addEventListener('click', () => {
    filterBar.scrollBy({ left: 200, behavior: 'smooth' });
});
