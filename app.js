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

const map = ["0","1","2","3","4","5","6","7","8","9","/","*","-","+","%","."]

window.addEventListener("keydown", (x) => {

    for(let i = 0;i < map.length; i++) {
        if(x.key == map[i]) {
            currentresult.innerHTML+=x.key
            islem = currentresult.innerHTML
            break
        } else {
            if(x.key == "Enter") {
                currentresult.innerHTML = eval(currentresult.innerHTML)
                sethistory()
                break
            }
        }
    }

    if(x.keyCode == 8) {
       if(currentresult.innerHTML.length > 0) {
        currentresult.innerHTML = currentresult.innerHTML.slice(0, -1)
        islem = currentresult.innerHTML
       }
    }
})

function sethistory () {
    previousresult.innerHTML = islem
}