const typingElement = document.getElementById("typing");

const message = "Designing technology around real users and real workflows.";

let characterIndex = 0;

function typeEffect() {
  if (!typingElement || characterIndex >= message.length) {
    return;
  }

  typingElement.textContent += message.charAt(characterIndex);
  characterIndex += 1;

  window.setTimeout(typeEffect, 55);
}

const prefersReducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)"
).matches;

if (typingElement) {
  if (prefersReducedMotion) {
    typingElement.textContent = message;
  } else {
    window.addEventListener("load", typeEffect);
  }
}

const revealElements = document.querySelectorAll(".reveal");

if (prefersReducedMotion || !("IntersectionObserver" in window)) {
  revealElements.forEach((element) => {
    element.classList.add("active");
  });
} else {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.12
    }
  );

  revealElements.forEach((element) => {
    observer.observe(element);
  });
}
