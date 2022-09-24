let previousresult = document.getElementById("previousresult")
let currentresult = document.getElementById("currentresult")
let btncontainer = document.getElementById("btncontainer")

let islem;

btncontainer.addEventListener("click", (e) => {

    islem = currentresult.innerHTML
    
    if(e.path[0].innerHTML == "=") {
        currentresult.innerHTML = eval(currentresult.innerHTML)
        sethistory()
    } else if(e.path[0].innerHTML == "AC") {
        previousresult.innerHTML = ""
        currentresult.innerHTML = ""
    } else if(e.path[0].innerHTML == "±") {
        if(currentresult.innerHTML.length > 0){
        currentresult.innerHTML = eval(currentresult.innerHTML)*-1
        }
    } else if(e.path[0].innerHTML == "x"){
        currentresult.innerHTML+="*"
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

function sethistory () {
    previousresult.innerHTML = islem
    counter++
}