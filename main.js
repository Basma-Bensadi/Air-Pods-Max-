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
gsap.from(".side-title",{
    x:"-20%",
    duration :3,
})

gsap.from(".main-picture",{
    y:"-30%",
    duration:3,
})
gsap.from(".text-section",{
    x:"-10%",
    delay:.2,
    duration:3,
})

gsap.from(".side-main-picture",{
    y:"50%",
    delay:.3,
    duration:3,
})


document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  const mm = gsap.matchMedia();

  mm.add("(min-width: 769px)", () => {

    gsap.from(".features-text-section", {
      x: "-15%",
      duration: 2,
      scrollTrigger: ".features-text-section",
    });

    gsap.from(".man", {
      x: "-15%",
      duration: 2,
      scrollTrigger: ".man",
    });

    gsap.from(".features-2-text-section", {
      x: "-15%",
      duration: 3,
      scrollTrigger: ".features-2-text-section",
    });

    gsap.from(".airpods-pockets", {
      y: "10%",
      duration: 3,
      delay: 0.1,
      scrollTrigger: ".airpods-pockets",
    });
  });
});
