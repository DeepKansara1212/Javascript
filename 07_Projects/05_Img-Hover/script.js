const element = document.querySelectorAll('.element')

element.forEach((val) => {

    // console.log(val.childNodes);

    val.addEventListener('mouseenter', () => {
        val.childNodes[3].style.opacity = 1
    })
    val.addEventListener('mouseleave', () => {
        val.childNodes[3].style.opacity = 0
    })
    val.addEventListener('mousemove', (details) => {
        val.childNodes[3].style.left = details.x + "px"
        // val.childNodes[3].style.top = details.y + "px"
    })
});

