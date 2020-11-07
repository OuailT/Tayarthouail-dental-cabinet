const menuBtn = document.querySelector('.menu-btn');
const mainMenu = document.querySelector('.main-menu');

const closeIcon = document.getElementById('close');
const modal = document.getElementById('modal');
const modalForm = document.querySelector('.container-modal')
const bookNowBtn = document.getElementById('bookNow');






//Event Listener
menuBtn.addEventListener('click', () => {
	mainMenu.classList.toggle('show');
});

bookNowBtn.addEventListener('click', () => {
	modalForm.classList.add('show-modal');
});

closeIcon.addEventListener('click', () => {
	modalForm.classList.remove('show-modal');
});



