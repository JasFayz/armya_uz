// $('body').hide()

document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('.menu__btn').addEventListener('click', function () {
        const header_nav = document.getElementById('header_nav');
        const body = document.querySelector('body')
        header_nav.classList.toggle('show')
        if (header_nav.classList.contains('show')) {
            body.style.overflow = 'hidden'
        } else {
            body.removeAttribute('style');
        }
    })


    if(document.querySelector('.banner__slider')) {
        var splide = new Splide('.banner__slider', {
            type: 'loop',
            perPage: 1,
        });
        splide.mount();
    }
  
})