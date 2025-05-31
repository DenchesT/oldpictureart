const lightbox = document.getElementById('lightbox');
const lightboxImg = document.querySelector('.lightbox-img');
const caption = document.querySelector('.caption');
const closeBtn = document.querySelector('.close');

document.querySelectorAll('.gallery img').forEach(img => {
  img.addEventListener('click', () => {
    lightbox.classList.add('active');
    lightboxImg.src = img.src;
    lightboxImg.alt = img.alt;
    caption.textContent = img.dataset.caption || img.alt;
  });
});

closeBtn.addEventListener('click', () => {
  lightbox.classList.remove('active');
});

lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) {
    lightbox.classList.remove('active');
  }
});
const downloadBtn = document.getElementById('download-btn');
const openBtn = document.getElementById('open-btn');

document.querySelectorAll('.gallery img').forEach(img => {
  img.addEventListener('click', () => {
    lightbox.classList.add('active');
    lightboxImg.src = img.src;
    lightboxImg.alt = img.alt;
    caption.textContent = img.dataset.caption || img.alt;

    // Обновление ссылок
    downloadBtn.href = img.src;
    openBtn.href = img.src;
  });
});
