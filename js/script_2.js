
//Burger

(function (){
	const burgerItem = document.querySelector('.active');
	const menu = document.querySelector('.header_links');
	const menuClose = document.querySelector('.header_nav_close');
	burgerItem.addEventListener('click', () => {
		menu.classList.add('header_links_active');
	});
	menuClose.addEventListener('click', () => {
		menu.classList.remove('header_links_active');
	});
}());