const container = document.querySelector(".container")
const add = document.querySelector(".add")
const clr = document.querySelector(".clear")
const brand = document.querySelector(".brand")
const year = document.querySelector(".year")
const nme = document.querySelector(".name")

function Car(brand, year, name){
    this.brand = brand
    this.year = year
    this.name = name
}

var cars = []

function createCar(brand, year, name){
    if(brand !== "" && year !== "" && name !== ""){
        cars.push(new Car(brand, year, name))
    }
    updateCards()
}

function clear(){
    cars = []
    updateCards()
}

function updateCards(){
    let innerHTML = ""
    cars.forEach((car) => {
        innerHTML += `<div class="card"><h3>${car.brand}</h3><h3>${car.year}</h3><h3>${car.name}</h3></div>`
    })
    container.innerHTML = innerHTML
}

add.addEventListener("click", function(){
    createCar(brand.value, year.value, nme.value)
})

clr.addEventListener("click", function(){
    clear()
})
