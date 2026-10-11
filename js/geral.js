//TOOLTIP BOOTSTRAP
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
});


//MENU ADICIONA CLASSE NO MENU CLICADO
var menuLink = document.querySelectorAll(".nav-link");
var urlAncora = window.location.hash.substring(1);

function linkAction() {
    menuLink.forEach(n => n.classList.remove('active'))
    this.classList.add('active')
    //fecha menu mobile
    document.querySelector(".navbar-collapse").classList.remove("show")
}
menuLink.forEach(n => n.addEventListener('click', linkAction))


//MENU SELECIONA CONFORME ATUAL URL AO CARREGAR PÁGINA
window.onload = function () {
    menuLink.forEach(function (linques) {
        linques.classList.remove("active");
        if (linques.dataset.ancora == urlAncora) {
            linques.classList.add("active")
        }
    });
};


//MENU MUDA ATIVO NA ROLAGEM (sem click menu)
let sections = document.querySelectorAll('section');
window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 85;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        let menulista = document.querySelectorAll('.nav-link[href*=' + id + ']');
        if (top >= offset && top < offset + height) {
            menuLink.forEach(n => n.classList.remove('active'));
            menulista.forEach(n => n.classList.add('active'));
        };
        //quando tiver uma área acima da primeira secção
        if (top <= 300) {
            menuLink.forEach(n => n.classList.remove('active'))
        }
    });
};


//MENU MOBILE FIXAR NO TOPO QUANDO SCROLL PARA CIMA
let prevScrollPos = window.pageYOffset;

window.addEventListener('scroll', function () {
    //atual posição de rolagem
    const currentScrollPos = window.pageYOffset;

    if (prevScrollPos > currentScrollPos) {
        //scrolled up
        document.querySelector('nav').classList.remove("menu-updown");
    } else {
        //scrolled down
        document.querySelector('nav').classList.add("menu-updown");
        document.querySelector(".navbar-collapse").classList.remove("show")
    }
    //atualizar posição de rolagem anterior
    prevScrollPos = currentScrollPos;
});


//IR PARA O TOPO, REMOVE DA URL O TITULO DO MENU
let botSubir = document.querySelector(".subir");
window.addEventListener("scroll", (event) => {
    //sumir e aparecer
    let scroll = this.scrollY;
    if (scroll >= 1000) {
        botSubir.classList.add("aparecer")
    } else {
        botSubir.classList.remove("aparecer")
    }
});
botSubir.onclick = function () {
    window.scrollTo(0, 0);
    menuLink.forEach(n => n.classList.remove('active'));
    history.pushState("", document.title, window.location.pathname + window.location.search);
};


//DETECTAR ALTURA DO SCROLL E INSERE A AÇÃO (menu nav cor)
window.addEventListener("scroll", (event) => {
    let scroll = this.scrollY;
    let cartaoLogo = document.querySelector(".cartao-logo");
    let logoNav = document.querySelector(".logo-navegacao");
    let fundoNav = document.querySelector("nav");

    if (scroll >= 300) {
        cartaoLogo.classList.add("remove-logocartao");
        logoNav.classList.add("aparece-logonav");
        fundoNav.classList.add("rolagem");
    } else {
        cartaoLogo.classList.remove("remove-logocartao");
        logoNav.classList.remove("aparece-logonav");
        fundoNav.classList.remove("rolagem");
    }
    //console.log(scroll) 
});


//COPIAR TEXTO
/* const copiar = document.querySelector(".emailcopiar");

copiar.onclick = function () {
    document.execCommand("copy");
    alert('E-mail copiado!');
}
copiar.addEventListener("copy", function (event) {
    event.preventDefault();
    if (event.clipboardData) {
        event.clipboardData.setData("text/plain", copiar.textContent);
    }
}); */


//OWL CAROUSEL
$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    responsiveClass: true,
    responsive: {
        0: {
            items: 2,
            nav: true
        },
        992: {
            items: 3,
            nav: false
        },
        1200: {
            items: 5,
            nav: true,
            loop: false
        }
    }
})