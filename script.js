const words = document.querySelectorAll('.bounce');

words.forEach(word => {
  word.addEventListener('mousemove', () => {
    word.classList.add('bounce-animation');
  });

  word.addEventListener('mouseleave', () => {
    word.classList.remove('bounce-animation');
  });
});
