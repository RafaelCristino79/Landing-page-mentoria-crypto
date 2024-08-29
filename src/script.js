const accordions = document.querySelectorAll('.accordion');

accordions.forEach(accordion => (
    accordion.addEventListener('click', () =>{
        const body = accordion.querySelector('.accordion-body');
        body.classList.toggle('active');
    })
));

// Verifica se a tela é de um dispositivo móvel
function isMobile() {
    return window.matchMedia("(max-width: 768px)").matches;
}

let lastScrollTop = 0;
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        // Scroll para baixo - esconder navbar
        navbar.style.top = "-100px";
    } else {
        // Scroll para cima - mostrar navbar
        navbar.style.top = "0";
    }

    // Alternar entre a classe transparente e a sólida dependendo da posição do scroll
    if (scrollTop > 0) {
        navbar.classList.add("transparent");
    } else {
        navbar.classList.remove("transparent");
    }

    lastScrollTop = scrollTop;
});

const hamburguer = document.querySelector(".nav-hamburguer");
const nav = document.querySelector("#navbar");

hamburguer.addEventListener("click", () => {
    nav.classList.toggle("active");
});

// Função para fechar o menu ao clicar fora dele
document.addEventListener("click", (event) => {
    const isClickInside = nav.contains(event.target);

    if (!isClickInside) {
        nav.classList.remove("active");
    }
});