// =========================
// NAVBAR SCROLL EFFECT
// =========================

const header = document.querySelector('.header');

window.addEventListener('scroll', () => {

    if(window.scrollY > 50){

        header.style.background =
        'rgba(255,255,255,0.95)';

        header.style.boxShadow =
        '0 10px 30px rgba(0,0,0,0.08)';

    }else{

        header.style.background =
        'rgba(255,255,255,0.75)';

        header.style.boxShadow =
        'none';

    }

});

// =========================
// FADE IN ANIMATION
// =========================

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add('show');

        }

    });

},{
    threshold:0.15
});

document
.querySelectorAll(
'section, .education-card, .stat-card, .contact-card'
)
.forEach(el=>{

    el.classList.add('hidden');

    observer.observe(el);

});

// =========================
// CONTADOR ANIMADO
// =========================

const counters =
document.querySelectorAll('.stat-card h3');

const counterObserver =
new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            const counter =
            entry.target;

            const target =
            parseInt(
            counter.innerText.replace(/\D/g,'')
            );

            let count = 0;

            const speed = target / 80;

            const update = ()=>{

                count += speed;

                if(count < target){

                    counter.innerText =
                    Math.floor(count);

                    requestAnimationFrame(update);

                }else{

                    if(counter.innerText.includes('%')){

                        counter.innerText =
                        target + '%';

                    }else if(counter.innerText.includes('+')){

                        counter.innerText =
                        '+' + target;

                    }else{

                        counter.innerText =
                        target;

                    }

                }

            }

            update();

            counterObserver.unobserve(counter);

        }

    });

});

counters.forEach(counter=>{

    counterObserver.observe(counter);

});

// =========================
// PARALLAX HERO
// =========================

window.addEventListener('scroll',()=>{

    const hero =
    document.querySelector('.hero');

    let scroll =
    window.pageYOffset;

    hero.style.backgroundPositionY =
    scroll * 0.4 + 'px';

});

// =========================
// BOTÃO VOLTAR AO TOPO
// =========================

const backToTop =
document.getElementById('backToTop');

window.addEventListener('scroll',()=>{

    if(window.scrollY > 500){

        backToTop.classList.add('active');

    }else{

        backToTop.classList.remove('active');

    }

});

backToTop.addEventListener('click',()=>{

    window.scrollTo({

        top:0,
        behavior:'smooth'

    });

});

// =========================
// HOVER PREMIUM CARDS
// =========================

const cards =
document.querySelectorAll(
'.education-card, .stat-card'
);

cards.forEach(card=>{

    card.addEventListener('mousemove',(e)=>{

        const rect =
        card.getBoundingClientRect();

        const x =
        e.clientX - rect.left;

        const y =
        e.clientY - rect.top;

        const centerX =
        rect.width / 2;

        const centerY =
        rect.height / 2;

        const rotateX =
        (y - centerY) / 20;

        const rotateY =
        (centerX - x) / 20;

        card.style.transform =
        `
        perspective(1000px)
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
        scale(1.03)
        `;

    });

    card.addEventListener('mouseleave',()=>{

        card.style.transform =
        `
        perspective(1000px)
        rotateX(0deg)
        rotateY(0deg)
        scale(1)
        `;

    });

});


window.addEventListener('load',()=>{

    document.body.style.opacity = '1';

});