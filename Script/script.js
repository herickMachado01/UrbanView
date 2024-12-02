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
