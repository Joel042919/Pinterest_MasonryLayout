
const main = document.querySelector('.main')


main.addEventListener('mouseover',(e)=>{
    if(e.target.tagName==='VIDEO'){
        e.target.play();
    }
})

main.addEventListener('mouseout',(e)=>{
    if(e.target.tagName==='VIDEO'){
        e.target.pause();
        e.target.currentTime = 0 //Reset to the beginning
    }
})




