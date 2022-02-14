import './style.css'
import './carousel.css'
import './carousel_anime.css'


const changePlace = async function(oldClass, newClass, anime){
    let element = document.getElementsByClassName(oldClass)[0]
    element.style.animation=`${anime} 1000ms`
    setTimeout(() => {
        element.classList.remove(oldClass)
        element.classList.add(newClass)
    }, 1000)

}

let currentImg = 0


//document.getElementById("change").onclick = rightSwipe

async function rightSwipe(){
    //document.getElementById("change").onclick = function (){}
    let indicators = document.getElementsByClassName("circle")
    indicators[currentImg].classList.remove("current")
    currentImg === 4 ? currentImg = 0 : currentImg++
    indicators[currentImg].classList.add("current")
    await changePlace("first", "before", "first-to-before")
    await changePlace("active","after", "active-to-after")
    await changePlace("before","active", "before-to-active")
    await changePlace("after", "last", "after-to-last")
    await changePlace("last", "first", "last-to-first")
}



let langDrop = document.getElementById("langage__drop")
let langList = document.getElementById("langage__list")



langDrop.onmouseover = ()=>{
    langList.style.height = "180px"
}
langList.onmouseleave = ()=>{
    langList.style.height = "0"
}

//setInterval(()=>rightSwipe(),3000)