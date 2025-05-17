var dataBase = {
    LoggedInUser: "",
    LoggerdInUsername: "",
    Users: []
}   

var data = localStorage.getItem("dataBase")
if(data){
    dataBase = JSON.parse(data)
}

const updataDatabase = () => {
    localStorage.setItem("dataBase", JSON.stringify(dataBase))
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
                dataBase.LoggedInUser = filteredUser[0].email
                dataBase.LoggerdInUsername = filteredUser[0].username
                updataDatabase()
                window.location.href = "blog.html"
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
                dataBase.Users.push({username: signUpUser.value, email: signUpEmail.value, password: signUpPassword.value, posts: []})
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

const posts = document.querySelector(".posts")
if(posts){
    posts.innerHTML = ""
    htm = ""
    dataBase.Users.forEach(data => {
        if(data.email === dataBase.LoggedInUser){
            
            data.posts.forEach(post1 => {
                console.log("postadded")
                htm += `<div class="post-card">
                    <div class="card-inner">
                        <img src=${post1.img} alt="">
                        <p class="content">${post1.caption}</p>
                        <p class="price">${post1.price}</p>
                    </div>
                    <div class="buttons">
                        <button>Like</button>
                        <button>Comment</button>
                        <button>Share</button>
                    </div>
                </div>`
            })   
        }
    })
    posts.innerHTML = htm
}

const blogb = document.querySelector(".blogb")
const dashb = document.querySelector(".go-Dash")
if(blogb){
    blogb.addEventListener("click", () => {
        window.location.href = "blog.html"
    })
}

if(dashb){
    dashb.addEventListener("click", () => {
        window.location.href = "dashboard.html"
    })
}

const addPost = document.querySelector(".adpost")
if(addPost){
    addPost.addEventListener("click", () => {
        const postImg = document.querySelector(".postimg")
        const postCap = document.querySelector(".postcap")
        const postPrice = document.querySelector(".postprice")
        if(postImg.value !== "" && postCap.value !== "" && postPrice.value !== ""){
            dataBase.Users.forEach(data => {
                if(data.email === dataBase.LoggedInUser){
                    data.posts.push({img: postImg.value, caption: postCap.value, price: postPrice.value})
                    postImg.value = ""
                    postCap.value = ""
                    postPrice.value =""
                    updataDatabase()
                }
            })
        }
        const posts = document.querySelector(".posts")
        if("posts"){
            posts.innerHtml = ""
            dataBase.Users.forEach(data => {
                if(data.email === dataBase.LoggedInUser){
                    data.posts.forEach(post1 => {
                        posts.innerHtml += `<div class="post-card">
                            <div class="card-inner">
                                <img src=${post1.img} alt="">
                                <p class="content">${post1.caption}</p>
                                <p class="price">${post1.price}</p>
                            </div>
                            <div class="buttons">
                                <button>Like</button>
                                <button>Comment</button>
                                <button>Share</button>
                            </div>
                        </div>`
                    })   
                }
            })
        }
    })
}


const logout = document.querySelector(".logout-b")
if(logout){
    logout.addEventListener("click", () => {
        dataBase.LoggedInUser = ""
        dataBase.LoggerdInUsername = ""
        updataDatabase()
        window.location.href = "index.html"
    })
}

const blogContainer = document.querySelector(".blog-container")
if(blogContainer){
    blogContainer.innerHTML = ""
    bloghtml = ""
    dataBase.Users.forEach(data => {
        data.posts.forEach(data1 => {
            bloghtml += `<div class="blog-card">
                <img src=${data1.img} alt="">
                <p class="cont">${data1.caption}</p>
                <div>
                    <p>${data1.price}</p>
                    <button>Add to Cart</button>
                </div>
            </div>`
        })
    })
    blogContainer.innerHTML = bloghtml
}
