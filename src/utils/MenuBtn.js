let show = true;

const clickButton = () => {
    const menuSection = document.querySelector('.menu');
    const menuToggle = menuSection.querySelector('.menu-toggle');

    menuToggle.addEventListener('click', () => {
        document.body.style.overflow = show ? "hidden" : "initial"

        menuSection.classList.toggle("on", show)
        show = !show
    })
}

export default clickButton;