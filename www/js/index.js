let btnSignup = document.querySelector("#add")
let clear = document.querySelector("#clear")
btnSignup.addEventListener('click', ()=>{
    let first = document.querySelector("#first").value
    let second = document.querySelector("#second").value
    let result = Number(first) + Number(second)
    ons.notification.alert('Your result is ' + result)
    ons.notification.toast('result ' + result, {timeout:3000})
})
clear.addEventListener('click', ()=>{
    document.querySelector("#first").value = ''
    document.querySelector("#second").value = ''
})