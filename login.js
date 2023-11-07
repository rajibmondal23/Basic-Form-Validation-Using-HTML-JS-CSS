const form = document.querySelector(".form")

form.addEventListener("submit",(e)=>{
    // to prevent autosave of all details
    e.preventDefault()

    const username = form.username.value
    const password = form.password.value

    const authenticated = authentication(username,password)

    if(authenticated){
        window.location.href = "logout.html"
    }else{
        alert("Please Enter Correct Username Or Password")
    }
})






// function for checking username and password

function authentication(username,password){
    if(username === "rajibmondal" && password === "1234"){
        return true
    }else{
        return false
    }
}