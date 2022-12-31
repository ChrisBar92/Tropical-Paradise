const navHidden = document.querySelector('.nav__hidden')
const navBtn = document.querySelector('.burger-btn')
const allNavItems = document.querySelectorAll('.nav__item')

const handleNav = () => {
	navHidden.classList.toggle('nav__hidden--active')

	allNavItems.forEach(item => {
		item.addEventListener('click', () => {
			navHidden.classList.remove('nav__hidden--active')
		})
	})

	handleNavItemsAnimation()
}

const handleNavItemsAnimation = () => {
	let delayTime = 0
	allNavItems.forEach(item => {
		item.classList.toggle('nav-items-animation')
		item.style.animationDelay = '.' + delayTime + 's'
		delayTime++
	})
}

navBtn.addEventListener('click', handleNav)
