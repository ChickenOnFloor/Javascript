var limit = 10
var number = 0
function randomGenerate(){
    let num = Math.random() * limit + 1
    return Math.floor(num)
}
number = randomGenerate()
function setLimit(a){
    limit = a
    number = randomGenerate()
}

var submitted = false
function submit(){
    if(!submitted){
        const element = document.querySelector('input')
        let ans = parseInt(element.value)
        if(ans === number){
            submitted = true
            element.type = "text"
            element.value = "Correct"
            number = randomGenerate()
            setTimeout(() => {
                element.type = "number"
                element.value = null
                submitted = false
            }, 2000);
        }
        else{
            submitted = true
            if(ans && ans < number){
                element.type = "text"
                element.value = "Go Higher"
                element.style.fontSize = "4vw"
                setTimeout(() => {
                    element.type = "number"
                    element.value = null
                    submitted = false
                    element.style.fontSize = "5vw"
                }, 2000);
            }
            else if(ans && ans > number){
                element.type = "text"
                element.value = "Go Lower"
                element.style.fontSize = "4vw"
                setTimeout(() => {
                    element.type = "number"
                    element.value = null
                    submitted = false
                    element.style.fontSize = "5vw"
                }, 2000);
            }
        }
    }
}