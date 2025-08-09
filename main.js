
let bars = document.querySelector("#bars");
bars.addEventListener("click", ()=>{
    let sidebar = document.querySelector(".sidebar");
    sidebar.style.display = 'flex';
})

let xmark = document.querySelector("#xmark");
xmark.addEventListener("click",()=>{
    let sidebar = document.querySelector(".sidebar");
    sidebar.style.display= "none"
})

//animations 
 document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollTrigger)
  // gsap code here!
  gsap.from(".side-title",{
    x:"-10vw",
    duration:2,
    ease: "power1.inOut"
  })
  gsap.from(".main-picture",{
    y:"-10vh",
    duration:2,
    delay:.1,
    ease: "power1.inOut"

  })
  gsap.fromTo(".text-section",{
    x:"-10vw",
    opacity:.65,
  },{
    x:"0",
    opacity:1,
    duration:2,
    ease: "power1.inOut"

  })

  gsap.from(".side-main-picture",{
    y:"-10vh",
    duration:2,
    delay:.2,
    ease: "power1.inOut"
  })


  //scroll animation:
  gsap.fromTo("#container-1",{
    x:"-10vw",
    opacity:.65,
  },{
    x:"0",
    opacity:1,
    duration:2,
    scrollTrigger:{
      trigger:"#container-1",
      start:"top 75%",

    },
    ease :"power.inOut"
  })

  gsap.fromTo(".man",{
    x:"-10vw",
    opacity:.65,
  },{
    x:"0",
    opacity:1,
    duration:2,
    scrollTrigger:{
      trigger:".man",
      start:"bottom, bottom",

    },
    ease :"power.inOut"
  })
 });



