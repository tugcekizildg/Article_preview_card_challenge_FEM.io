const shareOption = document.querySelector('.share-option');

const shareBtn = document.querySelector('.share-button');

shareBtn.addEventListener('click', () => {
    shareBtn.classList.toggle('active');
    shareOption.classList.toggle('active');
})