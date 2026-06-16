// Aguarda o carregamento total do DOM para garantir estabilidade
document.addEventListener('DOMContentLoaded', () => {
    
    // Seleciona todos os links da navegação que começam com '#'
    const linksNavegacao = document.querySelectorAll('nav a');

    linksNavegacao.forEach(link => {
        link.addEventListener('click', function(evento) {
            const href = this.getAttribute('href');
            
            // Verifica se o link é uma âncora interna
            if (href.startsWith('#')) {
                evento.preventDefault(); // Impede o salto brusco padrão
                
                const elementoAlvo = document.querySelector(href);
                
                if (elementoAlvo) {
                    // Faz o scroll suave até à seção selecionada
                    elementoAlvo.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });

});