const e = document.querySelectorAll('.selection')
const rock = document.querySelector(".Rock")
const paper = document.querySelector(".Paper")
const scissor = document.querySelector(".Scissor")
const fist1 = document.querySelector('.fist1')
const fist2 = document.querySelector('.fist2')
document.querySelector('.fa-hand-back-fist')
userSelection = "";
botChoice = "";
var ongoing = false;
e.forEach(element => {
    element.addEventListener("click", function(){
        if(!ongoing){
            e.forEach(c => {
                c.classList.remove('active')
            })
            element.classList.add('active')
            fist1.classList.remove(...fist1.classList);
            fist2.classList.remove(...fist2.classList);
            fist2.classList.add('fa-regular', 'fa-hand-back-fist', 'fist2')
            fist1.classList.add('fa-regular', 'fa-hand-back-fist', 'fist1')
            fist2.style.transform = "rotate(-90deg)  scaleX(-1)"
            fist1.style.transform = "rotate(90deg)"
        }
    })
    
})

const botSelection = () =>{
    let options = ["Rock", "Paper", "Scissor"]
    return options[Math.floor(Math.random() * 3)]
}


rock.addEventListener("click", function(){
    if(!ongoing){
        ongoing = true
        fist1.style.animation = "animate .3s infinite alternate"
        fist2.style.animation = "animate1 .3s infinite alternate"
        const outcome = document.querySelector('.outCome')
        outcome.innerText = "Wait..."
        setTimeout(() => {
            userSelection = "Rock"
            botChoice = botSelection()
            fist1.style.removeProperty('animation');
            fist2.style.removeProperty('animation');
            fist1.classList.remove(...fist1.classList);
            fist2.classList.remove(...fist2.classList);
            if(userSelection === botChoice){
                outcome.innerText = "Its a draw"
                fist1.classList.add('fa-regular', 'fa-hand-back-fist', 'fist1')
                fist2.classList.add('fa-regular', 'fa-hand-back-fist', 'fist2')
            }
            else if(botChoice === "Paper"){
                outcome.innerText = "You Lose"
                fist1.classList.add('fa-regular', 'fa-hand-back-fist', 'fist1')
                fist2.classList.add('fa-regular', 'fa-hand', 'fist2')
            }
            else{
                outcome.innerText = "You Win"
                fist1.classList.add('fa-regular', 'fa-hand-back-fist', 'fist1')
                fist2.classList.add('fa-regular', 'fa-hand-scissors', 'fist2')
                fist2.style.transform = "rotate(-180deg) scale(-1)"
            }
            ongoing = false
        }, 1500);
    }
})

paper.addEventListener("click", function(){
    if(!ongoing){
        ongoing = true
        fist1.style.animation = "animate .3s infinite alternate"
        fist2.style.animation = "animate1 .3s infinite alternate"
        const outcome = document.querySelector('.outCome')
        outcome.innerText = "Wait..."
        setTimeout(() => {
            userSelection = "Paper"
            botChoice = botSelection()
            fist1.style.removeProperty('animation');
            fist2.style.removeProperty('animation');
            fist1.classList.remove(...fist1.classList);
            fist2.classList.remove(...fist2.classList);

            if(userSelection === botChoice){
                outcome.innerText = "its a draw"
                fist1.classList.add('fa-regular', 'fa-hand', 'fist1')
                fist2.classList.add('fa-regular', 'fa-hand', 'fist2')
            }
            else if(botChoice === "Scissor"){
                outcome.innerText = "You Lose"
                fist1.classList.add('fa-regular', 'fa-hand', 'fist1')
                fist2.classList.add('fa-regular', 'fa-hand-scissors', 'fist2')
                fist2.style.transform = "rotate(-180deg) scale(-1)"
            }
            else{
                outcome.innerText = "You Win"
                fist1.classList.add('fa-regular', 'fa-hand', 'fist1')
                fist2.classList.add('fa-regular', 'fa-hand-back-fist', 'fist2')
            }
            ongoing = false
        }, 1500);
    }
})

scissor.addEventListener("click", function(){
    if(!ongoing){
        ongoing = true
        fist1.style.animation = "animate .3s infinite alternate"
        fist2.style.animation = "animate1 .3s infinite alternate"
        const outcome = document.querySelector('.outCome')
        outcome.innerText = "Wait..."
        setTimeout(() => {
            userSelection = "Scissor"
            botChoice = botSelection()
            fist1.style.removeProperty('animation');
            fist2.style.removeProperty('animation');
            fist1.classList.remove(...fist1.classList);
            fist2.classList.remove(...fist2.classList);

            if(userSelection === botChoice){
                outcome.innerText = "its a draw"
                fist1.classList.add('fa-regular', 'fa-hand-scissors', 'fist1')
                fist2.classList.add('fa-regular', 'fa-hand-scissors', 'fist2')
                fist2.style.transform = "rotate(-180deg) scale(-1)"
                fist1.style.transform = "rotate(180deg)"
            }
            else if(botChoice === "Rock"){
                outcome.innerText = "You Lose"
                fist1.classList.add('fa-regular', 'fa-hand-scissors', 'fist1')
                fist2.classList.add('fa-regular', 'fa-hand-back-fist', 'fist2')
                fist1.style.transform = "rotate(180deg)"
            }
            else{
                outcome.innerText = "You Win"
                fist1.classList.add('fa-regular', 'fa-hand-scissors', 'fist1')
                fist2.classList.add('fa-regular', 'fa-hand', 'fist2')
                fist1.style.transform = "rotate(180deg)"
            }
            ongoing = false
        }, 1500);
    }
})