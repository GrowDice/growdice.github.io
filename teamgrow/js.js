// slide show
let back = document.getElementById("back")
let forward = document.getElementById("forward")
let slideShow = document.getElementById("slideshow")
let counter = document.getElementById("counter")
let slideShowIndex = 0

let slideShowImages = ["url('https://media.discordapp.net/attachments/1128271819498070157/1128286070648360970/image.png')", "url('https://media.discordapp.net/attachments/1128271819498070157/1128286121453953094/image.png')", "url('https://media.discordapp.net/attachments/1128271819498070157/1128286178043498588/image.png')"]

back.addEventListener("click", ()=>{
    if (slideShowIndex <= 0){
        return
    }
    slideShowIndex--;
    updateSlideShow()
})

forward.addEventListener("click", ()=>{
    if (slideShowIndex >= slideShowImages.length-1){
        return
    }
    slideShowIndex++;
    updateSlideShow()
})

function updateSlideShow(){
    slideShow.style.backgroundImage = slideShowImages[slideShowIndex]
    counter.innerText = (slideShowIndex+1).toString() + "/" + slideShowImages.length.toString()
}

updateSlideShow()

// player count
let playerCount = document.getElementById("playerCount")
let r = Math.floor(Math.random() * (20 - 4) + 4);
playerCount.innerText = "Server is up | " + r.toString() + " Players online!"



sbtn = document.getElementById("scrollBtn")
pbtn = document.getElementById("clickForProof")

sbtn.addEventListener("click", ()=>{
    slideShow.scrollIntoView({behavior:"smooth"})
})

pbtn.addEventListener("click", ()=>{
    slideShow.scrollIntoView({behavior:"smooth"})
})