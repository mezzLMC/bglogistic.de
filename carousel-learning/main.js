import './style.css'

function getImg(n){
    let children = Array.from(document.getElementById("app").children)
    return children[n]
}


let currentImg = 2
document.getElementById("change").onclick = ()=>{
    getImg(currentImg).style.animation="active-to-after 1000ms "
    setTimeout(()=>{
        getImg(currentImg).classList.remove("active")
    },1000)
    currentImg--
    getImg(currentImg).style.animation="before-to-active 1000ms"
    setTimeout(()=>{
        getImg(currentImg).classList.add("active")
    },1000)
}
