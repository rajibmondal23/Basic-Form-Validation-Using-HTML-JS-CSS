const form = document.querySelector(".form2")
form.addEventListener("submit",(e)=>{
    // to prevent autosave of all details
    e.preventDefault()

    const username = form.username.value
    const password = form.password.value
    const confirmpassword = form.confirmpassword.value
   

    // const authenticated = authentication(username,password,confirmpassword)

    // if(authenticated){
    //     window.location.href = "logout.html"
    // }else{
    //     alert("Sorry please provided correct once")
    // }
})

// function authentication(confirmpassword,password){
   
// }