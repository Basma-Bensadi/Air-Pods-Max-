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
document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  // Entry animations (not scroll-based)
  gsap.from(".side-title", {
    x: "-20%",
    duration: 3,
  });

  gsap.from(".main-picture", {
    y: "-30%",
    duration: 3,
  });

  gsap.from(".text-section", {
    x: "-10%",
    delay: 0.2,
    duration: 3,
  });

  gsap.from(".side-main-picture", {
    y: "50%",
    delay: 0.3,
    duration: 3,
  });

  // Scroll animations
  gsap.from(".features-text-section", {
    x: "-15%",
    duration: 2,
    scrollTrigger: {
      trigger: ".features-text-section",
      start: "top 80%", // smoother trigger
    },
  });

  gsap.from(".man", {
    x: "-15%",
    duration: 2,
    scrollTrigger: {
      trigger: ".man",
      start: "top 80%",
    },
  });

  gsap.from(".features-2-text-section", {
    x: "-15%",
    duration: 3,
    scrollTrigger: {
      trigger: ".features-2-text-section",
      start: "top 80%",
    },
  });

  gsap.from(".airpods-pockets", {
    y: "10%",
    duration: 3,
    delay: 0.1,
    scrollTrigger: {
      trigger: ".airpods-pockets",
      start: "top 90%",
    },
  });
});
