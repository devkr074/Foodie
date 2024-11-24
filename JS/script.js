const main = document.getElementById('main');
const nav = document.getElementById('nav');
const back = document.getElementById('back');
main.addEventListener("scroll", function () {
    if (main.scrollTop >= 120) {
        console.log(main.scrollTop);
        nav.classList.add("active");
        back.classList.add('active');
    } else {
        nav.style.transform = `translateY(${-main.scrollTop}px)`;
        nav.classList.remove("active");
        back.classList.remove('active');
    }
});

back.addEventListener('click', function () {
    main.scrollTop = 0;
});