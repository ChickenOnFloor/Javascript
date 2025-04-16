const cards = document.querySelector('.cards')
const item = document.querySelector('.item')
const cost = document.querySelector('.cost')
const add = document.querySelector('.add')
const totl = document.querySelector('.totalCost')
var items = []

function updateCards(){
    let innerHTML = ''
    if(item.value !== "" && cost.value !== "" && !isNaN(parseInt(cost.value))){
        items.push([item.value, cost.value])
    }
    let total = 0
    items.forEach((item) => {
        innerHTML += `<div class="card"><h3>${item[0]}</h3><h3>${item[1]}</h3></div>`
        total += parseInt(item[1])
    })
    cards.innerHTML = innerHTML
    totl.innerHTML = total
}

add.addEventListener('click', function(){
    updateCards()
})
