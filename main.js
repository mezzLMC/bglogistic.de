import './style.css'

let langDrop = document.getElementById("langage__drop")
let langList = document.getElementById("langage__list")
langDrop.onmouseover = ()=>{
    langList.style.height = "150px"
}
langList.onmouseleave = ()=>{
    langList.style.height = "0"
}