function openMenu(evt, menuName) {
  var i, menuList, tabBtn;
  
  // 1. Get the clicked button and its specific parent container (the .menu-tabs div)
  var clickedButton = evt.currentTarget;
  var buttonContainer = clickedButton.parentElement;
  var contentContainer = buttonContainer.nextElementSibling; // The .menu-content div right below it

  // 2. Find all menu lists ONLY inside this specific content container and hide them
  var specificMenuLists = contentContainer.getElementsByClassName("menu-list");
  for (i = 0; i < specificMenuLists.length; i++) {
    specificMenuLists[i].classList.remove("active");
  }

  // 3. Remove 'active' from all buttons ONLY inside this specific button container
  var specificButtons = buttonContainer.getElementsByClassName("tab-btn");
  for (i = 0; i < specificButtons.length; i++) {
    specificButtons[i].classList.remove("active");
  }

  // 4. Show the selected menu list and highlight the clicked button
  document.getElementById(menuName).classList.add("active");
  clickedButton.classList.add("active");
}

// =========================================
// 3D MAGNETIC TILT EFFECT FOR HOMEPAGE BUTTONS
// =========================================
const tiltButtons = document.querySelectorAll('.tilt-btn');

tiltButtons.forEach(btn => {
  btn.addEventListener('mousemove', (e) => {
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Calculate rotation based on mouse position
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = ((y - centerY) / centerY) * -10; // Max tilt 10deg
    const rotateY = ((x - centerX) / centerX) * 10;
    
    btn.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05) translateY(-5px)`;
    btn.style.boxShadow = `0 20px 30px rgba(212, 175, 55, 0.4)`;
    btn.style.background = `#D4AF37`;
    btn.style.color = `#000000`;
  });

  btn.addEventListener('mouseleave', () => {
    // Reset when mouse leaves
    btn.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1) translateY(0px)`;
    btn.style.boxShadow = `none`;
    btn.style.background = `rgba(0, 0, 0, 0.5)`;
    btn.style.color = `#D4AF37`;
  });
});

// =========================================
// SCROLL REVEAL ANIMATION
// =========================================
window.addEventListener('scroll', reveal);

function reveal() {
  var reveals = document.querySelectorAll('.reveal');

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150; // How many pixels before it reveals

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add('active');
    } else {
      reveals[i].classList.remove('active'); // Remove this line if you only want it to animate once
    }
  }
}

// Trigger once on load in case images are already in view
reveal();