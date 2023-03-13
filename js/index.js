//Crarga
window.onload = function() {
	var loader = document.getElementById('loader');
	loader.style.visibility = 'hidden';
	loader.style.opacity = '0';
}
//scroll
window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle("abajo", window.scrollY>0);
})

//Cursor
function isTouchDevice() {
    return(('ontouchstart' in window) || (navigator.maxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0));
    }
    const isTouch = isTouchDevice();
    if(!isTouch) {
    const cursorEl = document.querySelector('.js-cursor');
    const isClickedClass = 'is-clicked';
    const isHiddenClass = 'is-hidden';
    const isLinkHoveredClass = 'is-link-hovered';
    const hasCustomCursorClass = 'has-custom-cursor';
    const addEventListeners = () => {
        document.addEventListener("mousemove", onMouseMove);
        document.addEventListener("mousedown", onMouseDown);
        document.addEventListener("mouseup", onMouseUp);
        document.addEventListener("mouseenter", onMouseEnter);
        document.addEventListener("mouseleave", onMouseLeave);
        handleLinkHoverEvents();
    };
    const onMouseMove = (e) => {
        cursorEl.style.setProperty('--cursor-x', e.clientX + "px");
        cursorEl.style.setProperty('--cursor-y', e.clientY + "px");
    };
    const onMouseDown = () => {
        cursorEl.classList.add(isClickedClass);
    };
    const onMouseUp = () => {
        cursorEl.classList.remove(isClickedClass);
    };
    const onMouseEnter = () => {
        cursorEl.classList.remove(isHiddenClass);
    };
    const onMouseLeave = () => {
        cursorEl.classList.add(isHiddenClass);
    };
    const handleLinkHoverEvents = () => {
        document.querySelectorAll('a, button, .js-link, input[type="button"], input[type="submit"]').forEach((el) => {
            el.addEventListener("mouseover", () => cursorEl.classList.add(isLinkHoveredClass));
            el.addEventListener("mouseout", () => cursorEl.classList.remove(isLinkHoveredClass));
        });
    };
    addEventListeners();
    document.body.classList.add(hasCustomCursorClass);
    }