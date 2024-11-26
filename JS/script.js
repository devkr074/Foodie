const main = document.getElementById('main');
const nav = document.getElementById('nav');
const back = document.getElementById('back');
const searchBtn = document.getElementById('search-btn');
const searchBox = document.getElementById('search-box');
const closeBtn = document.getElementById('close-btn');
const openBtn = document.getElementById('open');
const content2 = document.getElementById('content-2');
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
searchBtn.addEventListener('click', function () {
    searchBox.classList.toggle('active');
    main.classList.toggle('active');
});
closeBtn.addEventListener('click', function () {
    searchBox.classList.toggle('active');
    main.classList.toggle('active');
});
openBtn.addEventListener('click',function(){
    this.classList.toggle('active')
    content2.classList.toggle('active');
})