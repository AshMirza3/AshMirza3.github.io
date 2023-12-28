// app.js

let newsIndex = 0;

function showNews(index) {
  const carousel = document.getElementById('news-carousel');
  const items = document.getElementsByClassName('carousel-item');
  if (index >= items.length) {
    newsIndex = 0;
  } else if (index < 0) {
    newsIndex = items.length - 1;
  } else {
    newsIndex = index;
  }
  const translateValue = -newsIndex * 100 + '%';
  carousel.style.transform = 'translateX(' + translateValue + ')';
}

function scrollNews(direction) {
  showNews(newsIndex + direction);
}
