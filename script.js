//  typing animation

var typed = new Typed(".typing", {
  strings: [
    "Space Mission Design",
    "Space Robotics",
    "Aerospace Technology",
    "Artificial Intelligence",
    "IT Project Management",
  ],
  typeSpeed: 100,
  BackSpeed: 60,
  loop: true,
});

// Aside
const nav = document.querySelector(".nav"),
  navList = nav.querySelectorAll("li"),
  totalNavList = navList.length,
  allSection = document.querySelectorAll(".section"),
  totalSection = allSection.length;
for (let i = 0; i < totalNavList; i++) {
  const a = navList[i].querySelector("a");
  a.addEventListener("click", function () {
    removeBackSection();
    for (let j = 0; j < totalNavList; j++) {
      if (navList[j].querySelector("a").classList.contains("active")) {
        addBackSection(j);
        // allSection[j].classList.add("back-section");
      }
      navList[j].querySelector("a").classList.remove("active");
    }
    this.classList.add("active");
    showSection(this);
    if(window.innerWidth<1200){
        asideSectionTogglerBtn()
    }
  });
}
function removeBackSection() {
  for (let i = 0; i < totalSection; i++) {
    allSection[i].classList.remove("back-section");
  }
}
function addBackSection(num) {
  allSection[num].classList.add("back-section");
}
function showSection(element) {
  for (let i = 0; i < totalSection; i++) {
    allSection[i].classList.remove("active");
  }
  const target = element.getAttribute("href").split("#")[1];
  document.querySelector("#" + target).classList.add("active");
}
function updateNav(element) {
  for (let i = 0; i < totalNavList; i++) {
    navList[i].querySelector("a").classList.remove("active");
    const target = element.getAttribute("href").split("#")[1];
    if (target === navList[i].querySelector("a").getAttribute("href").split("#")[1] ) {
      navList[i].querySelector("a").classList.add("active");
    }
  }
}
document.querySelector(".hire-me").addEventListener("click",function(){
  const sectionIndex = this.getAttribute("data-section-index");
  showSection(this);
  updateNav(this);
  removeBackSection();
  addBackSection(sectionIndex);
})
document.querySelector(".about-me").addEventListener("click",function(){
  const sectionIndex = this.getAttribute("data-section-index");
  showSection(this);
  updateNav(this);
  removeBackSection();
  addBackSection(sectionIndex);
})

const navTogglerBtn =document.querySelector(".nav-toggler"),
     aside= document.querySelector(".aside");
     navTogglerBtn.addEventListener("click", ()=>{
        asideSectionTogglerBtn()
     })
     function asideSectionTogglerBtn() {
         aside.classList.toggle("open");
         navTogglerBtn.classList.toggle("open")
         for (let i = 0; i < totalSection; i++) {
            allSection[i].classList.toggle("open");
          }
     }

// Contact form -> opens the visitor's email app
document.getElementById("cf-send").addEventListener("click", function () {
  const name = document.getElementById("cf-name").value.trim();
  const email = document.getElementById("cf-email").value.trim();
  const subject = document.getElementById("cf-subject").value.trim() || "Portfolio enquiry";
  const message = document.getElementById("cf-message").value.trim();
  const body = message + "\n\n" + name + (email ? " (" + email + ")" : "");
  window.location.href =
    "mailto:goodluckudofia31@gmail.com?subject=" + encodeURIComponent(subject) +
    "&body=" + encodeURIComponent(body);
});

// 3D tilt on the home photo (mouse and touch)
(function () {
  const wrap = document.querySelector(".photo-wrap");
  if (!wrap) return;
  const img = wrap.querySelector("img");
  function tilt(x, y) {
    const r = wrap.getBoundingClientRect();
    const px = (x - r.left) / r.width - 0.5;
    const py = (y - r.top) / r.height - 0.5;
    img.style.transform =
      "perspective(700px) rotateY(" + px * 22 + "deg) rotateX(" + -py * 22 + "deg) scale(1.05)";
  }
  function reset() { img.style.transform = ""; }
  wrap.addEventListener("mousemove", (e) => tilt(e.clientX, e.clientY));
  wrap.addEventListener("mouseleave", reset);
  wrap.addEventListener("touchmove", (e) => tilt(e.touches[0].clientX, e.touches[0].clientY), { passive: true });
  wrap.addEventListener("touchend", reset);
})();
