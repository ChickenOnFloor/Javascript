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
        if(parseInt(element.value) === number){
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
            element.type = "text"
            element.value = "Incorrect"
            setTimeout(() => {
                element.type = "number"
                element.value = null
                submitted = false
            }, 2000);
        }
    }
}