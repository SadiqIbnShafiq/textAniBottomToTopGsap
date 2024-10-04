// function textAnimatebottomToTop(){
// var h1 = document.querySelector("h1")
// var h1Text = h1.textContent

// var splitText = h1Text.split("")


// var clutter = ""

// splitText.forEach(function(elem){
//     clutter += `<span>${elem}</span>` 

// })

// h1.innerHTML = clutter

// gsap.from("h1 span",{
//     y:70,
//     opacity:0,
//     stagger:0.3,
//     duration:0.9,
//     delay:0.5
// })
// }
// textAnimatebottomToTop();

function animateRightToCenterLeftToCenter() {
    var h1 = document.querySelector("#name")
    var h1Text = h1.textContent

    var splitText = h1Text.split("");


    var halfValue = splitText.length / 2
    console.log(halfValue);

    var clutter = ""

    splitText.forEach(function (elem, idx) {
        if (idx < halfValue) {
            clutter += `<span class="right" >${elem}</span>`
        } else {
            clutter += `<span class="left" >${elem}</span>`
        }
    })

    h1.innerHTML = clutter
}

animateRightToCenterLeftToCenter()

gsap.from(".right",{
    y:90,
    duration:0.6,
    delay:0.5,
    stagger:0.15,
    opacity:0
})
gsap.from(".left",{
    y:90,
    duration:0.6,
    delay:0.5,
    stagger:-0.15,
    opacity:0
})

