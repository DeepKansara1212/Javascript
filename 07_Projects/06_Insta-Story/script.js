const arr = [
    {
        dp: "./Images/VK18.png",
        story: "./Images/VK18_2.png"
    },
    {
        dp: "./Images/SS49.png",
        story: "./Images/SS49_2.png"
    },
    {
        dp: "./Images/KW22.png",
        story: "./Images/KW22_2.png"
    },
    {
        dp: "./Images/JR66.png",
        story: "./Images/JR66_2.png"
    },
] 

let clutter = ""
let stories = document.querySelector("#stories")

arr.forEach((e, index) => {
    // console.log(e, index);
    clutter += `<div class="story">
                <img id="${index}" src="${e.dp}" alt="">    
                </div>`
}) 

stories.innerHTML = clutter 

stories.addEventListener("click", (dets) => {
    // console.log(dets);       // It will give "pointer events"
    
    document.querySelector("#full-screen").style.display = "block"
    document.querySelector("#full-screen").style.backgroundImage = `url(${arr[dets.target.id].story})` 

    setTimeout(() => {
        document.querySelector("#full-screen").style.display = "none"
    } , 2000)
}) 