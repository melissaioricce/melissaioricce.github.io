// =====================
// ANIMAÇÃO AO ROLAR
// =====================
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
  sections.forEach(sec => {
    const top = sec.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      sec.classList.add("show");
    }
  });
});


// =====================
// TEXTO DIGITANDO
// =====================
const text = "Estudante de Análise e Desenvolvimento de Sistemas, apaixonada por tecnologia e análise de dados.";
let i = 0;

function digitar() {
  const el = document.getElementById("typing");
  if (!el) return;

  if (i < text.length) {
    el.innerHTML += text.charAt(i);
    i++;
    setTimeout(digitar, 40);
  }
}

window.addEventListener("load", digitar);


// =====================
// PARTÍCULAS
// =====================
if (typeof particlesJS !== "undefined") {
  particlesJS("particles-js", {
    particles: {
      number: { value: 60 },
      size: { value: 3 },
      color: { value: "#38bdf8" },
      move: { speed: 1.5 },
      line_linked: {
        enable: true,
        color: "#38bdf8",
        opacity: 0.2
      }
    }
  });
}

window.addEventListener("scroll", () => {
  const header = document.querySelector("header");

  if (window.scrollY > 50) {
    header.style.top = "0";
  } else {
    header.style.top = "-120px";
  }
});

