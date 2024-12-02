
    // Obtém a URL da página atual
    var currentPage = window.location.pathname.split('/').pop();

    // Seleciona todos os links de navegação
    var navLinks = document.querySelectorAll('.nav-link');

    // Percorre os links e verifica se o href coincide com a página atual
    navLinks.forEach(function(link) {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });

