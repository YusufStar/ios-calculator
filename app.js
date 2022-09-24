const previousresult = document.getElementById("previousresult")
let currentresult = document.getElementById("currentresult")
let btncontainer = document.getElementById("btncontainer")

btncontainer.addEventListener("click", (e) => {
    if(e.path[0].innerHTML == "=") {
        currentresult.innerHTML = eval(currentresult.innerHTML)
    } else if(e.path[0].innerHTML == "AC") {
        currentresult.innerHTML = ""
    } else if(e.path[0].innerHTML == "±") {
        if(currentresult.innerHTML.length > 0){
        currentresult.innerHTML = eval(currentresult.innerHTML)*-1
        }
    } else {
        currentresult.innerHTML+=e.path[0].innerHTML
    }
})

window.addEventListener("keydown", (x) => {
    if(x.keyCode == 8) {
       if(currentresult.innerHTML.length > 0) {
        currentresult.innerHTML = currentresult.innerHTML.slice(0, -1)
       }
    }
})