function createHeart() {
    const heartContainer = document.getElementById('heart-container');
  
    // Создаём контейнер для сердечка
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.top = '-10vh';
    heart.style.animationDuration = Math.random() * 2 + 3 + 's';
  
    // Добавляем SVG-сердечко
    heart.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 29.6" fill="url(#grad1)">
        <defs>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:#ff5f6d;stop-opacity:1" />
            <stop offset="100%" style="stop-color:#ffc371;stop-opacity:1" />
          </linearGradient>
        </defs>
        <path d="M23.6,0c-3.4,0-6.4,2.1-8,5.2C13.7,2.1,10.7,0,7.3,0C3.2,0,0,3.2,0,7.3c0,6.5,10.6,13.5,15.6,21.2
          c5-7.7,15.6-14.7,15.6-21.2C32,3.2,28.8,0,23.6,0z"/>
      </svg>
    `;
  
    heartContainer.appendChild(heart);
  
    // Удаляем сердечко после завершения анимации
    setTimeout(() => {
      heart.remove();
    }, 5000);
  }
  
  // Создаём сердечки каждую секунду
  setInterval(createHeart, 300);
  
