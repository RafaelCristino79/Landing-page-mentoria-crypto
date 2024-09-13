const accordions = document.querySelectorAll('.accordion');

accordions.forEach(accordion => (
    accordion.addEventListener('click', () => {
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

    if (nav.classList.contains("active")) {
        // Adicionar a classe no body para desativar o scroll
        document.body.classList.add("no-scroll");
    } else {
        // Remover a classe do body para ativar o scroll
        document.body.classList.remove("no-scroll");
    }
});

// Fechar o menu ao clicar fora dele
document.addEventListener("click", (event) => {
    const isClickInside = nav.contains(event.target) || hamburguer.contains(event.target);

    if (!isClickInside) {
        nav.classList.remove("active");
        document.body.classList.remove("no-scroll");
    }
});

// Fechar o menu ao clicar em um item de menu
nav.addEventListener("click", (event) => {
    if (event.target.tagName === "A") { // Supondo que os itens do menu sejam <a>
        nav.classList.remove("active");
        document.body.classList.remove("no-scroll");
    }
});

// Função para o botão de subir
window.addEventListener('scroll', function() {
    let scrollButton = document.querySelector('.up-button');
    let scrollButtonShadow = document.querySelector('.up-button-shadow'); // Adicione essa linha se você tiver um botão de sombra

    if (window.scrollY > 100) {
        scrollButton.classList.add('show');
        if (scrollButtonShadow) {
            scrollButtonShadow.classList.add('show');
        }
    } else {
        scrollButton.classList.remove('show');
        if (scrollButtonShadow) {
            scrollButtonShadow.classList.remove('show');
        }
    }
});

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}