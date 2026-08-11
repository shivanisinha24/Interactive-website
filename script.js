document.addEventListener("DOMContentLoaded", () => {
  const topSection = document.querySelector(".top-section");
  const animatedBox = document.getElementById("animated-box");
  const menuText = document.getElementById("menu")
  menuText.addEventListener("mouseenter",(e)=>{
    e.target.textContent='CLOSE'
  })
   menuText.addEventListener("mouseleave",(e)=>{
    e.target.textContent='MENU'
  })
  let isOpen=false;
   menuText.addEventListener("click",(e)=>{
    isOpen=!isOpen;
    if(isOpen) e.target.textContent='CLOSE'
    else e.target.textContent='MENU'
  })
  let mouseX = 0;
  let mouseY = 0;
  let currentX = 0;
  let currentY = 0;
  if (topSection && animatedBox) {
    topSection.addEventListener("mousemove", (e) => {
      const rect = topSection.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    });

    function animateCursor() {
      currentX += (mouseX - currentX) * 0.1;
      currentY += (mouseY - currentY) * 0.1;

      animatedBox.style.left = `${currentX}px`;
      animatedBox.style.top = `${currentY}px`;

      requestAnimationFrame(animateCursor);
    }
    animateCursor();
  }
  const modeBtn = document.querySelector("#nav-ribbon-left p:nth-child(2)");
  const navRibbon = document.getElementById("nav-ribbon");
  const allTextElements = document.querySelectorAll("p, h1, h2, h3, span, a");

  let isDarkMode = false;

  // Set smooth transition directly via JS
  document.body.style.transition = "background-color 0.4s ease, color 0.4s ease";
  if (navRibbon) {
    navRibbon.style.transition = "background-color 0.4s ease";
  }

  if (modeBtn) {
    modeBtn.addEventListener("click", () => {
      isDarkMode = !isDarkMode;

      if (isDarkMode) {
        document.body.style.backgroundColor = "#000000";
        document.body.style.color = "#ffffff";

        // Adjust navigation ribbon background for dark contrast
        if (navRibbon) {
          navRibbon.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
        }

        // Ensure every text element stays clearly visible
        allTextElements.forEach((el) => {
          el.style.color = "#ffffff";
        });

        // Update button text
        modeBtn.textContent = "LIGHT MODE";
      } else {
        // Revert to light mode defaults
        document.body.style.backgroundColor = "#ffffff";
        document.body.style.color = "#000000";

        if (navRibbon) {
          navRibbon.style.backgroundColor = "rgba(255, 255, 255, 0.8)";
        }

        allTextElements.forEach((el) => {
          el.style.color = "#000000";
        });

        modeBtn.textContent = "DARK MODE";
      }
    });

  }

});