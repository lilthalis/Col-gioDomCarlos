document.addEventListener('DOMContentLoaded', () => {
    
    // 1. ANIMAÇÃO DE REVEAL (Aparecer ao rolar a página)
    const elementosReveal = document.querySelectorAll('.scroll-reveal');

    const checarScroll = () => {
        const gatilhoAtivacao = window.innerHeight * 0.85; // Dispara quando o elemento atinge 85% da tela

        elementosReveal.forEach(el => {
            const topoElemento = el.getBoundingClientRect().top;

            if (topoElemento < gatilhoAtivacao) {
                el.classList.add('active');
            }
        });
    };

    // Executa uma vez no início (para os elementos do topo da página) e depois no scroll
    checarScroll();
    window.addEventListener('scroll', checarScroll);


    // 2. SCROLL SUAVE PARA OS LINKS DO MENU
    const linksNavegacao = document.querySelectorAll('nav a');

    linksNavegacao.forEach(link => {
        link.addEventListener('click', function(evento) {
            const href = this.getAttribute('href');
            
            if (href.startsWith('#')) {
                evento.preventDefault();
                const elementoAlvo = document.querySelector(href);
                
                if (elementoAlvo) {
                    elementoAlvo.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
});