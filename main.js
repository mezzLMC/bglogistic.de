import './style.css'
import './carousel.css'
import './carousel_anime.css'

function detectMob() {
    const toMatch = [
        /Android/i,
        /webOS/i,
        /iPhone/i,
        /iPad/i,
        /iPod/i,
        /BlackBerry/i,
        /Windows Phone/i
    ];
    return toMatch.some((toMatchItem) => {
        return navigator.userAgent.match(toMatchItem);
    });
}
 async function changePlace(oldClass, newClass, anime){
    let element = document.getElementsByClassName(oldClass)[0]
    element.style.animation=`${anime} 1000ms`
    setTimeout(() => {
        element.classList.remove(oldClass)
        element.classList.add(newClass)
    }, 1000)
}

async function rightSwipe(){
    indicators[currentImg].classList.remove("current")
    currentImg === 4 ? currentImg = 0 : currentImg++
    indicators[currentImg].classList.add("current")
    await changePlace("first", "before", "first-to-before")
    await changePlace("active","after", "active-to-after")
    await changePlace("before","active", "before-to-active")
    await changePlace("after", "last", "after-to-last")
    await changePlace("last", "first", "last-to-first")
}

async function leftSwipe(){
    indicators[currentImg].classList.remove("current")
    currentImg === 4 ? currentImg = 0 : currentImg++
    indicators[currentImg].classList.add("current")
    await changePlace("first", "before", "first-to-before")
    await changePlace("active","after", "active-to-after")
    await changePlace("before","active", "before-to-active")
    await changePlace("after", "last", "after-to-last")
    await changePlace("last", "first", "last-to-first")
}

let indicators = document.getElementsByClassName("circle")
let langDrop = document.getElementById("langage__drop")
let langList = document.getElementById("langage__list")
let currentImg = 0
let dropped = false


if(!detectMob()){
    langDrop.onmouseover = langList.onmouseover = ()=>{
        langList.style.height = "180px"
    }
    langList.onmouseleave = langDrop.onmouseleave = ()=>{
        langList.style.height = "0"
    }
}

let carouselMove = setInterval(()=>rightSwipe(),2500)

document.getElementById("arrow__right").onclick = ()=>{
    clearTimeout(carouselMove)
    rightSwipe()
}
document.getElementById("arrow__left").onclick = ()=>{
    clearTimeout(carouselMove)
    leftSwipe()
}

if(detectMob()){
    langDrop.onclick = ()=>{
        if(dropped){
            dropped = false
            langDrop.classList.remove("dropped")
            langList.style.height = "0"
        }
        else{
            dropped = true
            langDrop.classList.add("dropped")
            langList.style.height = "180px"
        }
    }
}




