const shmodal = document.querySelector('.shmodal');
const confirm = document.querySelector('.confirm');
const close = document.querySelector('.close');
const modal = document.querySelector('.modal');
const backdrop = document.querySelector('.backdrop');

function close_Modal(){
    modal.style.opacity = "0";
    modal.style.transform = "translateY(-100vh)";
    backdrop.style.display = "none";
}

shmodal.addEventListener('click', () => {
    modal.style.opacity = "1";
    modal.style.transform = "translateY(0vh)";
    backdrop.style.display = "block";
});

close.addEventListener('click', () => {
    close_Modal()

});

backdrop.addEventListener('click', () => {
    close_Modal()
});

confirm.addEventListener('click', () => {
    close_Modal()
    alert('You clicked confirm');
});
