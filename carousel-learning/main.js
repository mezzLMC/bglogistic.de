import './style.css'

const changePlace = function(oldClass, newClass, anime){
    let element = document.getElementsByClassName(oldClass)[0]
    element.style.animation=`${anime} 1000ms`
    setTimeout(()=>{
        element.classList.remove(oldClass)
        element.classList.add(newClass)
    },1000)
    
}

let currentImg = 0

document.getElementById("change").onclick = ()=>{

    let indicators = document.getElementsByClassName("circle")
    indicators[currentImg].classList.remove("current")
    currentImg == 4 ? currentImg = 0 : currentImg++
    indicators[currentImg].classList.add("current")
    changePlace("first", "before", "first-to-before")
    changePlace("active","after", "active-to-after")
    changePlace("before","active", "before-to-active")
    changePlace("after", "last", "after-to-last")
    changePlace("last", "first", "last-to-first")
    
}
