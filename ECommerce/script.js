var dataBase = {
    loggedInUser: "",
    loggedInUsername: "",
    Users: []
}

const categories = [
    "Gaming",
    "Phone",
    "Makeup",
    "Men Style",
]
var filter = []
const categorySection = document.querySelector(".classList")
if(categorySection){
    
    categories.forEach(category => {
        const btn = document.createElement("button");
        btn.classList.add("classes");
        btn.textContent = category;
        categorySection.appendChild(btn)
    })

    categorySection.addEventListener("click", (event) => {
        if (event.target.classList.contains("classes")) {
            const category = event.target.textContent;
            if(filter.includes(category)){
                filter.splice(filter.indexOf(category), 1)
                event.target.style.backgroundColor = ""
                updateCards()
            }
            else{
                filter.push(category);
                event.target.style.backgroundColor = "#87CEFA"
                updateCards()
            }
        }
    });
}

var data = localStorage.getItem("dataBase")
if(data){
    dataBase = JSON.parse(data)
}

const updataDatabase = () => {
    localStorage.setItem("dataBase", JSON.stringify(dataBase))
}

if(!dataBase.Users[0]){
    dataBase.Users.push({username: "walker", email: "abc123@gmail.com", password: "12345678", products: [{name: "Belt", price:"10", image: "./images/Belt.jpg", category:"Men Style"}, {name: "IPhone 10", price: "200", image: "./images/IPhone10.webp", category:"Phone"}, {name: "IPhone 11", price: "300", image: "./images/IPhone11.webp", category: "Phone"}, {name: "Kajal", price: "10", image: "./images/kajal.webp", category: "Makeup"}, {name: "Lipstick", price: "20", image: "./images/LipStick.jpg", category: "Makeup"}, {name: "Logitec Keyboard", price: "100", image: "./images/LogitecKeyboard.webp", category: "Gaming"}, {name: "Pencil Lipstick", price: "30", image: "./images/pencillipstick.webp", category: "Makeup"}, {name: "Razer Headset", price: "400", image: "./images/RazerHeadset.webp", category: "Gaming"}, {name: "Razer Keyboard", price: "300", image: "./images/RazerKeyboard.jpg", category: "Gaming"}, {name: "Razer Mouse", price: "200", image: "./images/RazerMouse.jpg", category: "Gaming"}, {name: "Shirt", price: "30", image: "./images/shirt.jpg", category: "Men Style"}, {name: "Watch", price: "1000", image: "./images/watch.jpg", category: "Men Style"}], cart: []})
    updataDatabase()
}
const signup = document.querySelector(".sign-up")
const signin = document.querySelector(".sign-in")
const signup1 = document.querySelector(".signup")
const signin1 = document.querySelector(".signin")


const login = document.querySelector(".login")
const loginup = document.querySelector(".loginup")


const signInEmail = document.querySelector(".signe")
const signInPassword = document.querySelector(".signp")

const signUpUser = document.querySelector(".upu")
const signUpEmail = document.querySelector(".upe")
const signUpPassword = document.querySelector(".upp")

if(signup){
    signup.addEventListener("click", ()=> {
        signin1.classList.add("signHide")
        signup1.classList.remove("signHide")
    })
}

if(signin){
        signin.addEventListener("click", ()=> {
        signin1.classList.remove("signHide")
        signup1.classList.add("signHide")
    })
}


if(login && loginup){
    login.addEventListener("click", () => {
        if(signInEmail.value !== "" && signInPassword.value !== ""){
            let filteredUser = dataBase.Users.filter(data => data.email === signInEmail.value && data.password === signInPassword.value)
            if(filteredUser.length){
                dataBase.loggedInUser = filteredUser[0].email
                dataBase.loggedInUsername = filteredUser[0].username
                updataDatabase()
                window.location.href = "index.html"
            }
            else{
                alert("User Not Found")
            }
        }
    })

    loginup.addEventListener("click", () => {
        if(signUpUser.value !== "" && signUpEmail.value !== "" && signUpPassword.value !== ""){
            let filteredUser = dataBase.Users.filter(data => data.email === signUpEmail.value)
            if(!filteredUser.length){
                dataBase.Users.push({username: signUpUser.value, email: signUpEmail.value, password: signUpPassword.value, products: [], cart: []})
                localStorage.setItem("dataBase", JSON.stringify(dataBase))
                signUpUser.value = ""
                signUpEmail.value = ""
                signUpPassword.value = ""
                updataDatabase()
                alert("Account Registered")
            }
            else{
                signUpUser.value = ""
                signUpEmail.value = ""
                signUpPassword.value = ""
                alert("Email is already Registered")
            }
        }
    })
}

//Account Setting
const accUser = document.querySelector(".accUser")
const accEmail = document.querySelector(".accEmail")
const accPass = document.querySelector(".accPass")
const saveSetting = document.querySelector(".saveSetting")
if(saveSetting && dataBase.loggedInUser !== ""){
    accEmail.placeholder = dataBase.loggedInUser
    accUser.placeholder = dataBase.loggedInUsername
    saveSetting.addEventListener("click", () => {
        if(accEmail.value.length > 0){
            const emailValue = accEmail.value.trim();
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(emailValue)) {
                alert("Please enter a valid email address.");
                return;
            }
            dataBase.Users.forEach((data, index) => {
                if(data.email === dataBase.loggedInUser){
                    dataBase.Users[index].email = emailValue
                    dataBase.loggedInUser = emailValue
                    alert("Email Changed Successfully!")
                    updataDatabase()
                }
            });
        }
        if(accPass.value.length > 0) {
            if(accPass.value.length >= 8){
                dataBase.Users.forEach((data, index) => {
                if(data.email === dataBase.loggedInUser){
                    dataBase.Users[index].password = accPass.value
                    alert("Password Changed!")
                    updataDatabase()
                }
            }); 
            }
            else{
                alert("Password Must Be 8 Characters")
            }
        }
    })


}

//main
const accSet = document.querySelector(".accset")
const logout = document.querySelector(".logout")
const dashSet = document.querySelector(".dashset")
const acclog = document.querySelector(".acclogin")
if(accSet){
    accSet.addEventListener("click", () => {
        window.location.href = "Account.html"
    })
    logout.addEventListener("click", () => {
        dataBase.loggedInUser = ""
        dataBase.loggedInUsername = ""
        location.reload()
        updataDatabase()
    })
    acclog.addEventListener("click", () => {
        window.location.href = "login.html"
    })
    dashSet.addEventListener("click", () => {
        window.location.href = "dashboard.html"
    })
    
}

const updateCategories = () => {
    const select = document.querySelector("select");
    if (select && categories.length > 0) {
        let options = '';
        categories.forEach((data, index) => {
            options += `<option value="${data}" ${index === 0 ? 'selected' : ''}>${data}</option>`;
        });
        select.innerHTML = options;
    }
};

updateCategories();



const container = document.querySelector(".product-cards");
const iteml = document.querySelector(".items-list")
function renderProductCard(product) {
    const card = document.createElement("div");
    card.className = "p-card";
    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h6>${product.name}</h6>
      <div class="pa">
        <h6>Price: $${product.price}</h6>
        <button>Add To Cart</button>
      </div>
    `;
    const button = card.querySelector("button");
    button.addEventListener("click", () => {
        
        dataBase.Users.forEach((data, index) => {
            if(data.email === dataBase.loggedInUser){
                dataBase.Users[index].cart.push(product)
                updataDatabase()
                updateCart()            
            }
        })
    });
    
    
    container.appendChild(card);
  }

  const updateCart = () =>{
    const total = document.querySelector(".total")
    iteml.innerHTML = ""
    totalCost = 0
    dataBase.Users.forEach((data, index) => {
        if(data.email === dataBase.loggedInUser){
            dataBase.Users[index].cart.forEach((data2, index2) => {
                itemCard = document.createElement("div")
                itemCard.className = "item-card"
                itemCard.innerHTML = `<img src=${data2.image} alt="">
                            <div class="item-info">
                                <h6 class="itm-name">${data2.name}</h6>
                                <h6>$${data2.price}</h6>
                            </div>
                            <button class="remove-itm">X</button>`
                const itemBtn = itemCard.querySelector(".remove-itm");
                itemBtn.addEventListener("click", () => {
                    dataBase.Users[index].cart.splice(index2, 1)
                    updateCart()
                    updataDatabase()
                });
                iteml.appendChild(itemCard)
                totalCost += parseInt(data2.price)
            })
        }
    })
    total.innerHTML = totalCost
  }
  if(iteml){
    updateCart()
  }
const updateCards = () => {
    if(container){
        container.innerHTML = "";
        dataBase.Users.forEach(data => {
            data.products.forEach(data1 => {
                if(filter.length > 0 && filter.includes(data1.category)){
                    renderProductCard(data1)
                }
                else if(filter.length === 0){
                    renderProductCard(data1)
                }
            })
        })
    }
}
updateCards()


//Dashboard
const dashImg = document.querySelector("#file-upload")
const dashName = document.querySelector(".dashName")
const dashPrice = document.querySelector(".dashPrice")
const dashSelect = document.querySelector(".selectedValue")
const dashUpload = document.querySelector(".dashUpload")
const dashDivImg = document.querySelector(".showImg")
const OwnerItem = document.querySelector(".owner-items")
if(dashImg){
    const dashImg = document.querySelector("#file-upload");
    const dashDivImg = document.querySelector(".showImg");
    dashImg.addEventListener("change", function () {
        const file = dashImg.files[0];
        const imageUrl = URL.createObjectURL(file);
        dashDivImg.src = imageUrl;
    })
    dashUpload.addEventListener("click", () => {
        if(dashImg.files.length && dashName.value !== "" && !isNaN(parseInt(dashPrice.value))){
            dataBase.Users.forEach((data, index) => {
                if(data.email === dataBase.loggedInUser){
                    const file = dashImg.files[0];
                    const imageUrl = URL.createObjectURL(file);
                    dataBase.Users[index].products.push({image: imageUrl, name: dashName.value, price: dashPrice.value, category: dashSelect.value})
                    alert("Item Added Successfully")
                    renderDash()
                    updataDatabase()
                } 
            })
        }
        else{
            alert("Something is wrong")
        }
    })

    const renderDash = () => {
    OwnerItem.innerHTML = '';

    dataBase.Users.forEach((user, userIndex) => {
        if (user.email === dataBase.loggedInUser) {
            user.products.forEach((product, productIndex) => {
                const itemDiv = document.createElement("div");
                itemDiv.className = "dashCard-item";

                // Create editable fields
                itemDiv.innerHTML = `
                    <img src="${product.image}" alt="">
                    <p class="name">${product.name}</p>
                    <p class="price">${product.price}</p>
                    <p class="category">${product.category}</p>
                    <div class="ed-btn">
                        <i class="fa-solid fa-pen-to-square edit-btn"></i>
                        <i class="fa-solid fa-trash delete-btn"></i>
                    </div>
                `;

                OwnerItem.appendChild(itemDiv);

                // Delete Function
                const delbtn = itemDiv.querySelector(".delete-btn");
                delbtn.addEventListener("click", () => {
                    dataBase.Users[userIndex].products.splice(productIndex, 1);
                    updataDatabase();
                    renderDash();
                });

                // Edit Function
                const editBtn = itemDiv.querySelector(".edit-btn");
                editBtn.addEventListener("click", () => {
                    const nameP = itemDiv.querySelector(".name");
                    const priceP = itemDiv.querySelector(".price");
                    const categoryP = itemDiv.querySelector(".category");
                    nameP.outerHTML = `<input type="text" class="edit-name edit-input" value="${product.name}">`;
                    priceP.outerHTML = `<input type="text" class="edit-price edit-input" value="${product.price}">`;
                    categoryP.outerHTML = `<input type="text" class="edit-category edit-input" value="${product.category}">`;
                    editBtn.classList.remove("fa-pen-to-square");
                    editBtn.classList.add("fa-floppy-disk");
                    editBtn.addEventListener("click", () => {
                        const newName = itemDiv.querySelector(".edit-name").value;
                        const newPrice = itemDiv.querySelector(".edit-price").value;
                        const newCategory = itemDiv.querySelector(".edit-category").value;
                        product.name = newName;
                        product.price = newPrice;
                        product.category = newCategory;
                        updataDatabase();
                        renderDash();
                    }, { once: true });
                });
            });
        }
    });
};

renderDash()
}