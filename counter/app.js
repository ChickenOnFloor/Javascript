const add = document.querySelector('.add');
const remove = document.querySelector('.sub');
const dark = document.querySelectorAll('.dark-tog');
const darktoggle = document.querySelector('.darktoggle');
const num = document.querySelector('.count');
darktoggle.addEventListener('click', () => {
    if(darktoggle.innerHTML === 'Light Mode<i class="fa-solid fa-moon"></i>'){
        darktoggle.innerHTML = 'Dark Mode<i class="fa-solid fa-sun"></i>';
    }
    else{
        darktoggle.innerHTML = 'Light Mode<i class="fa-solid fa-moon"></i>'
    }
    dark.forEach(element => {
        element.classList.toggle('dark-tog');
    })
})

add.addEventListener('click', () => {
    num.innerHTML = parseInt(num.innerHTML) + 1;
});

remove.addEventListener('click', () => {
    let number = Number(num.innerHTML);
    num > 0 ? num.innerHTML = parseInt(num.innerHTML) - 1 : num.innerHTML = 0;
});