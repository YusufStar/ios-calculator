let previousresult = document.getElementById("previousresult")
let currentresult = document.getElementById("currentresult")
let btncontainer = document.getElementById("btncontainer")

let islem;

btncontainer.addEventListener("click", (e) => {
    console.log(e)
    if(e.path.length== 7){
        if(e.target.innerHTML == "=") {
            currentresult.innerHTML = eval(currentresult.innerHTML)
            sethistory()
        } else if(e.target.innerHTML == "AC") {
            previousresult.innerHTML = ""
            currentresult.innerHTML = ""
        } else if(e.target.innerHTML == "±") {
            if(currentresult.innerHTML.length > 0){
            currentresult.innerHTML = eval(currentresult.innerHTML)*-1
            }
        } else if(e.target.innerHTML == "x"){
            currentresult.innerHTML+="*"
        } else {
        currentresult.innerHTML+=e.target.innerHTML
        }
        islem = currentresult.innerHTML
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
}