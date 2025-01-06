// Função para adicionar a classe 'active' aos links de navegação
(function() {
    var currentPage = window.location.pathname.split('/').pop(); // Pega o nome da página atual
    var navLinks = document.querySelectorAll('.nav-link'); // Seleciona os links de navegação

    navLinks.forEach(function(link) {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active'); // Marca o link como ativo
        } else {
            link.classList.remove('active'); // Remove a classe 'active' dos outros links
        }
    });
})();

// Função para verificar se um elemento está visível na tela
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Seleciona todos os cards
const cards = document.querySelectorAll('.card');

// Função para adicionar animação nos cards ao rolar a página
function handleCardAnimation() {
    cards.forEach(card => {
        if (isElementInViewport(card)) {
            card.classList.add('show'); // Aplica a animação de aparecimento
        }
    });
}

// Função para fixar a barra de navegação ao rolar a página
function handleNavbarScroll() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.querySelector(".navbar").classList.add("fixed-navbar"); // Adiciona a classe de fixação
    } else {
        document.querySelector(".navbar").classList.remove("fixed-navbar"); // Remove a classe quando a rolagem voltar ao topo
    }
}

// Adiciona o evento de rolagem para animar os cards
window.addEventListener('scroll', function() {
    handleCardAnimation();  // Verifica se os cards estão visíveis
    handleNavbarScroll();   // Verifica a rolagem da navbar
});

// Chama as funções quando a página carregar
window.addEventListener('load', function() {
    handleCardAnimation();  // Verifica os cards ao carregar
});


// JS IMAGEM MAPA

document.addEventListener("DOMContentLoaded", function () {
    const image = document.querySelector('.animated-image');

    // Função para verificar quando a imagem estiver visível
    function handleScroll() {
        const imagePosition = image.getBoundingClientRect().top;
        const screenPosition = window.innerHeight;

        if (imagePosition < screenPosition - 100) {
            image.classList.add('show'); // Adiciona a classe que ativa a animação
        }
    }

    // Evento de scroll para verificar a posição da imagem
    window.addEventListener('scroll', handleScroll);

    // Verifica logo no carregamento
    handleScroll();
});

document.addEventListener("DOMContentLoaded", function () {
    const faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach((item) => {
        const question = item.querySelector(".faq-question");

        question.addEventListener("click", () => {
            // Fecha todas as outras FAQs
            faqItems.forEach((otherItem) => {
                if (otherItem !== item) {
                    otherItem.classList.remove("active");
                }
            });
            // Abre/Fecha a FAQ clicada
            item.classList.toggle("active");
        });
    });
});

// Empresa card B
// Função para observar elementos e adicionar a classe "visible" quando entram na tela
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // Remove o observador depois que o elemento apareceu
      }
    });
  });
  
  // Seleciona todos os elementos com a classe 'animate-on-scroll'
  const elementsToAnimate = document.querySelectorAll('.animate-on-scroll');
  elementsToAnimate.forEach(element => {
    observer.observe(element);
  });
  
  