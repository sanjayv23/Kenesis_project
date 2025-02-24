document.addEventListener("DOMContentLoaded", (event) => {
    // gsap code here!
    gsap.from('.maintitle',{
        duration:1.5,
        y:'-90%',
        ease:'bounce'
    })
    gsap.from('.about-btn',{
        duration:1.5,
        y:'-90%',
        ease:'circ.inOut'
    })
    gsap.from('.menu',{
        duration:1.5,
        y:'-90%',
        ease:'expo.out'
    })
    gsap.from('.logo',{
        duration:1.5,
        y:'-90%',
        ease:'expo.out'
    })
    gsap.from('.container',{
        duration:1.5,
        y:'-90%',
        ease:'expo.out'
    })

    
});
console.log("df");